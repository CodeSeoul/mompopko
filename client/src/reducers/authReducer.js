import {
  LOGIN,
  LOGOUT
} from '../actions/types'

const initialState = {
  inAuthenticated: false
}

export default function (state = initialState, action) {

  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true
      }

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      }

    default:
      return state;
  }

}