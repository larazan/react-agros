import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
    USER_INFO_REQUEST,
    USER_INFO_SUCCESS,
    USER_INFO_FAIL,
  } from '../actions/types'
  
  export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { loading: true }
      case USER_LOGIN_SUCCESS:
        return { loading: false, userInfo: action.payload.user }
      case USER_LOGIN_FAIL:
        return { loading: false, error: action.payload }
      case USER_LOGOUT:
        return {}
      default:
        return state
    }
  }
  
  export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true }
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload.user }
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload }
      case USER_LOGOUT:
        return {}
      default:
        return state
    }
  }
  
  export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return { ...state, loading: true }
      case USER_DETAILS_SUCCESS:
        return { loading: false, user: action.payload }
      case USER_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      case USER_DETAILS_RESET:
        return { user: {} }
      default:
        return state
    }
  }
  
  export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_UPDATE_PROFILE_REQUEST:
        return { loading: true }
      case USER_UPDATE_PROFILE_SUCCESS:
        return { loading: false, success: true, userInfo: action.payload }
      case USER_UPDATE_PROFILE_FAIL:
        return { loading: false, error: action.payload }
      case USER_UPDATE_PROFILE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const userDetailReducer = (state = { user: []}, action) => {
    switch (action.type) {
      case USER_INFO_REQUEST:
        return { loading: true, user: [] }
      case USER_INFO_SUCCESS:
        return { 
          loading: false, 
          user: action.payload.user,
          userId: action.payload.userId, 
          quoteTot: action.payload.quoteTot, 
          followingTot: action.payload.followingTot,
          followerTot: action.payload.followerTot,
          collectTot: action.payload.collectTot,
        }
      case USER_INFO_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
}
