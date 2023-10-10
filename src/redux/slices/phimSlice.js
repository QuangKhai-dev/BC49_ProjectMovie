import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { quanLyPhimServ } from '../../services/quanLyPhim';

const initialState = {
  arrPhim: [],
};
// tạo ra một phương thức thông qua thunk để xử lí bất đồng bộ trước khi gửi dữ liệu lên store
export const getAllMovieApi = createAsyncThunk(
  'phim/getAllMovieApi',
  async (_, thunkAPI) => {
    console.log(thunkAPI);
    const res = await quanLyPhimServ.getAllMovie();
    console.log(res);
    // khi return về một giá trị thì giá trị này sẽ được gửi lên store
    return res.data.content;
  }
);

const phimSlice = createSlice({
  name: 'phim',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getAllMovieApi.pending);
    builder.addCase(getAllMovieApi.fulfilled, (state, action) => {
      console.log(current(state));
      console.log(action);
      // payload là kết quả trả về của return khi sử dụng thunk
      state.arrPhim = action.payload;
    });
    // builder.addCase(getAllMovieApi.rejected);
  },
});

export const {} = phimSlice.actions;

export default phimSlice.reducer;
