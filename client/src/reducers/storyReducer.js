import { GET_STORIES, POST_ONE_STORY, DELETE_STORIES } from "../actions/types";

const initialState = {
  isLoaded: false,
  story: {},
  stories: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STORIES:
      return {
        ...state,
        stories: action.payload,
        isLoaded: true
      };
    case POST_ONE_STORY:
      return {
        ...state,
        story: action.payload
      };
    case DELETE_STORIES:
      return {
        ...state,
        story: action.payload
      };
    default:
      return state;
  }
}
