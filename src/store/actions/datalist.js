import axios from 'axios';
import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_DATA_SORT, SHOW_ITEM, ADD_TO_TABLE, TABLE_SEARCH } from './actionTypes';
import {orderBy} from 'lodash'


export const fetchData = (url) => {
  return async dispatch => {
    dispatch(fetchDataStart())
    try {
      const response = await axios.get(url)
      let data = [];
      data = response.data
      const sortedData = orderBy(data.concat(), 'id', 'asc')
      dispatch(fetchDataSuccess(sortedData))
    }
    catch (err) {
      dispatch(fetchDataError(err))
    }
  }
}

export const fetchDataStart = () => {
  return {
    type: FETCH_DATA_START
  }
}

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  }
}

export const fetchDataError = (err) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: err
  }
}
export const fetchDataSort = (data, sort, sortField) => {
  return {
    type: FETCH_DATA_SORT,
    payload: {
      data, sort, sortField
    }
  }
}

export const sortData = (data, sort, sortField) => {
  return dispatch => {
    const clonedData = data.concat()
    const sortType = sort === 'asc' ? 'desc' : 'asc'
    const orderedData = orderBy(clonedData, sortField, sortType)
    dispatch(fetchDataSort(orderedData, sortType, sortField))
  }
}

export const showItem = (item) => {
  return {
    type: SHOW_ITEM,
    payload: item
  }
}

export const addToTable = (item) => {
  return {
    type: ADD_TO_TABLE,
    item
  }
}

export const tableSearch = (value) => {
  return {
    type: TABLE_SEARCH,
    payload: value
  }
}

