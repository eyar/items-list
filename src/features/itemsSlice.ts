import { createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux';

interface iItemsState{
    items: Array<any>,
    isLoading: Boolean,
    error: null | String,
    current: null | any
}

const initialState: iItemsState = {
    items: [],
    isLoading: false,
    error: null,
    current: null
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    getItemsStart(state){
        state.isLoading = true
    },
    getItemsSuccess(state, { payload }) {
        state.isLoading = false
        state.error = null
        state.items = payload;
    },
    getItemsFailure(state, { payload }){
        state.error = payload
    },
    setCurrent(state, { payload }){
        state.current = state.items[payload-1]
    }
  }
})

export const {
    getItemsStart,
    getItemsSuccess,
    getItemsFailure,
    setCurrent
} = itemsSlice.actions;

export default itemsSlice.reducer;

export const fetchItems = () => async (dispatch: Dispatch) => {
    try {
        dispatch(getItemsStart());
        const users = await getItems();
        dispatch(getItemsSuccess(users));
    } catch (err) {
        dispatch(getItemsFailure(err.toString()));
    }
}

export async function getItems() {
    const data = await fetch('https://json-s.herokuapp.com/resources').then(res=>res.json());
    return data;
}