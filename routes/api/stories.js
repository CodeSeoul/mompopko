const express = require("express");
const router = express.Router();
const Story = require("../../models/Story");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const bodyParser = require("body-parser");

let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("images");
});

//body parser middleware

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//@route GET api/stories/test
//@desc test stories page
//@access Public

router.get("/test", (req, res) => {
  res.json({ msg: "Stories page works" });
});

//@route GET api/stories
//@desc fetch stories page
//@access Public

router.get("/", (req, res) => {
  
  Story.find().then(storiesData => {
    let responseData = [...storiesData];
    
    
    storiesData.map((storyData,storyIndex) => {
      
      responseData[storyIndex].imageFiles =[];
      gfs.files
        .find({ _id: { $in: storyData.image } })
        .toArray((err, files) => {
          files.map((file,imageIndex) => {
            
            let data =[]
            var readstream = gfs.createReadStream({
              _id: file._id
            });
            readstream.on('data',(chunk)=>{
              data.push(chunk);
            })
            readstream.on('end',()=>{
              data = Buffer.concat(data);
              
              responseData[storyIndex].imageFiles[imageIndex]=Buffer(data).toString('base64')
            })
          });
        });
    });
    res.json(responseData)
  });
});

module.exports = router;
