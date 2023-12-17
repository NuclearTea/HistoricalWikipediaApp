import { createSlice } from '@reduxjs/toolkit';

type CounterState = {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({name: 'counter', initialState, reducers: {
// increment
    incrementCounter(state) {
        state.value++;
    },
// decrement
    decrementCounter(state) {
        state.value--;
    },
// reset
    resetCounter(state) {
        state.value = 0
    }
}});

export const {incrementCounter} = counterSlice.actions;

export default counterSlice.reducer;