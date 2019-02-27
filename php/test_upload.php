

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <?php
    session_start();

    if($_SERVER["REQUEST_METHOD"]=="POST"){
        include "fileupload.php";
    }

    ?>
    <form action="test_upload.php" method="POST" enctype="multipart/form-data">
        <div class="form-group">
            <label for="mainImages">Main image</label>
            <input name="mainImage" type="file" id="mainImage" class="form-control" />
        </div>

        <div class="form-group">
            <label for="subImages">Sub images</label>
            <input multiple name="subImages[]" type="file" multiple id="subImages" class="form-control" />
        </div>
        
        <button>submit</button>
    </form>
</body>
</html>