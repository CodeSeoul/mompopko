import {
  GET_STORIES,
  POST_ONE_STORY,
  DELETE_STORIES,
  GET_ERRORS
} from "./types";
import axios from "axios";

export const getStories = () => dispatch => {
  axios
    .get("http://localhost:5000/api/stories")
    .then(res => {
      dispatch({
        type: GET_STORIES,
        payload: res.data.stories
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const postOneStory = storyData => dispatch => {};

export const deleteStories = storyData => dispatch => {};
