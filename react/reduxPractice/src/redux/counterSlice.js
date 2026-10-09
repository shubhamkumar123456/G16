import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    obj:{name:"john",email:"john@gmail.com"},
    arr:[10, 20, 30, 40]
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    changeName:(state,action)=>{
        console.log(action)
        console.log(action.payload) // get data here in this key --> nick
        state.obj.name = action.payload
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, changeName } = counterSlice.actions

export default counterSlice.reducer