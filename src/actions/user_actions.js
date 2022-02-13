import axios from 'axios';
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
    // USER_UPDATE_PROFILE_RESET,
    USER_INFO_REQUEST,
    USER_INFO_SUCCESS,
    USER_INFO_FAIL,

    
} from './types';

import { USER_SERVER } from '../components/utils/misc';

export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      })
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const { data } = await axios.post(
        `${USER_SERVER}/login`,
        { email, password },
        config
      )
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
  
      localStorage.setItem('userInfo', JSON.stringify(data))
      localStorage.setItem("isAuthenticated", "true");
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  
  export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')   
    localStorage.removeItem('isAuthenticated')   
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })
    document.location.href = '/login'
  }
  
  export const register = (name, email, password, passwordConfirm) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })

      console.log(name, email, password, passwordConfirm);
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const { data } = await axios.post(
        `${USER_SERVER}/signup`,
        { name, email, password, passwordConfirm },
        config
      )
  
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
  
      localStorage.setItem('userInfo', JSON.stringify(data))
      localStorage.setItem("isAuthenticated", "true")
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  
  export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_DETAILS_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`${USER_SERVER}/${id}`, config)
  
      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: message,
      })
    }
  }
  
  export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_UPDATE_PROFILE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.put(`${USER_SERVER}/update_profile/${user._id}`, user, config)
  
      dispatch({
        type: USER_UPDATE_PROFILE_SUCCESS,
        payload: data,
      })
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
      localStorage.setItem('userInfo', JSON.stringify(data))
      localStorage.setItem("isAuthenticated", "true")
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload: message,
      })
    }
  }


  export const getUserInfo = (slug) => async (dispatch) => {
    try {
      dispatch({
        type: USER_INFO_REQUEST,
      })
  
      const { data } = await axios.get(`${USER_SERVER}/slug/${slug}`)
  
      dispatch({
        type: USER_INFO_SUCCESS,
        payload: data,
      })
  
    } catch (error) {
      dispatch({
        type: USER_INFO_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
