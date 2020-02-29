import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_DATA_SORT, SHOW_ITEM, ADD_TO_TABLE, TABLE_SEARCH } from "../actions/actionTypes"

const initialState = {
  data: [],
  isLoading: false,
  error: false,
  sort: 'asc',
  sortField: 'id',
  item: null,
  search: ""
}

const dataListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case FETCH_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }
    case FETCH_DATA_SORT: {
      return {
        ...state,
        data: action.payload.data,
        sort: action.payload.sort,
        sortField: action.payload.sortField
      }
    }
    case SHOW_ITEM: {
      return {
        ...state,
        item: action.payload
      }
    }
    case ADD_TO_TABLE: {
      return {
        ...state,
        data: [action.item, ...state.data]
      }
    }
    case TABLE_SEARCH: {
      return {
        ...state,
        search: action.payload
      }
    }
    default: return state
  }
}

export default dataListReducer;