import {
  GET_STORIES,
  POST_ONE_STORY,
  DELETE_STORIES
} from './types';

const initialState = {
  story: {},
  stories: []
}

export default function (state = initialState, action) {

  switch (action) {
    case GET_STORIES:
      return {
        ...state,
        stories: action.payload
      }
    case POST_ONE_STORY:
      return {
        ...state,
        story: action.payload
      }
    case DELETE_STORIES:
      return {
        ...state,
        story: action.payload
      }
    default:
      return state
  }

}