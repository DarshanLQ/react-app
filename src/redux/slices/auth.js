import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userInfo: null,
  error: false,
  isLoading: false,
  isFree: true,
  isSubscribed: true,
  errorMessage: null,
  isCSR: false,
};

export const fetchUserInformation = createAsyncThunk(
  "users/fetchUserInformation",
  async (token, thunkAPI) => {
    if (!token) {
      return thunkAPI.rejectWithValue({
        errors: true,
        errorMessage: "No Token Provided, Please Sign In",
      });
    } else {
      setToken(token);
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/my_profile",
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      return response.data;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      localStorage.setItem("token", action.payload.token);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInformation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserInformation.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.errors) {
          state.error = true;
          state.errorMessage = action.payload.errorMessage;
          state.isCSR = false;
        } else {
          state.userInfo = action.payload.data;
          state.isFree = action.payload.analytics_free_limit_use_count > 0;
          state.isSubscribed = action.payload.analytics_subscribed;
          state.error = false;
          state.errorMessage = null;
          state.isCSR = action.payload.data.roles.includes("csr") ?? false;
        }
      })
      .addCase(fetchUserInformation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errorMessage = action.payload.errorMessage;
      });
  },
});

export const { getToken, setToken } = authSlice.actions;
export default authSlice.reducer;
