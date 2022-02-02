import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions // 이렇게쓰면 webstorm 기준 auto complate에 연동됨 action으로 나누면 안나타남


export default counterSlice.reducer