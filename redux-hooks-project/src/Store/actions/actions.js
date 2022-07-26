import {
  ADD_CLOTHE,
  GET_CLOTH,
  UPDATE_CLOTH,
  DELETE_CLOTH,
LOGIN
} from "./types";
import Service from "../Services/Service";
import Auth from "../Services/Auth";
export const createClothes = (name, type, age, price) => async (dispatch) => {
   
  try {  
    const res = await Service.create({
      name,
      type,

      age,
      price,
    });
    dispatch({
      type: ADD_CLOTHE,
      payload: res.data.clothes,
    });
    return Promise.resolve(res.data.clothes);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const getClothes = () => async (dispatch) => {
  try {
    const res = await Service.getAll();
    dispatch({
      type: GET_CLOTH,
      payload: res.data.clothes,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateClothes = (id, data) => async (dispatch) => {
  try {
    const res = await Service.update(id, data);
    dispatch({
      type: UPDATE_CLOTH,
      payload: data,
    });
    return Promise.resolve(res.data.clothes);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const deleteClothes = (id) => async (dispatch) => {
  try {
    await Service.remove(id);
    dispatch({
      type: DELETE_CLOTH,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const findClothsByName = (name) => async (dispatch) => {
  try {
    const res = await Service.findByName(name);
    dispatch({
      type: GET_CLOTH,
      payload: res.data.clothes,
    });
  } catch (err) {
    console.log(err);
  }
};

export const Login = ( email, password) => async (dispatch) => {
  try {
    const res = await Auth.Login({
      email,
      password,
      
    });
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
    return Promise.resolve(res.data);
    
  } catch (err) {
    return Promise.reject(err);
  }
};
