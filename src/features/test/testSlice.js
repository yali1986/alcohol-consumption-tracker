import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gender: "",
    age: "", 
    answers: Array(10).fill(null),
    result: null
};
const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        setGender(state, action) {
            state.gender = action.payload;
        },
        setAge(state, action) {
            state.age = action.payload;
        },
        setAnswer(state, action) {
            const { index, value } = action.payload;
            state.answers[index] = value;
        },
        setResult(state, action) {
            state.result = action.payload;
        },
        resetTest() {
         return initialState
        }
    }
});
export const { 
    setGender, 
    setAge, 
    setAnswer, 
    setResult, 
    resetTest, 
} = testSlice.actions;

export default testSlice.reducer;