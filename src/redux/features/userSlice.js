import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  email: "",
  companyLogo: "",
  companyName: "",
  bio: "",
  address: "",
  contact: "",
  profilePicture: "",
  cv: "",
  jobTitle: "",
  education: "",
  role: "",
  skills: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state._id = action.payload._id;
      state.name = action.payload?.name || "";
      state.email = action.payload?.email || "";
      state.companyLogo = action.payload?.companyLogo || "";
      state.companyName = action.payload?.companyName || "";
      state.bio = action.payload?.bio || "";
      state.address = action.payload?.address || "";
      state.contact = action.payload.contact || "";
      state.profilePicture = action.payload.profilePicture || "";
      state.cv = action.payload.cv || "";
      state.role = action.payload.role || "";
      state.jobTitle = action.payload.jobTitle || "";
      state.education = action.payload.education || "";
      state.skills = action.payload.skills || "";

    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLogout: (state) => {
      state._id = "";
      state.name = "";
      state.email = "";
      state.companyLogo = "";
      state.companyName = "";
      state.bio = "";
      state.address = "";
      state.contact = "";
      state.profilePicture = "";
      state.cv = "";
      state.jobTitle = "";
      state.education = "";
      state.skills = "";
      state.role = "";
    },
  },
});

export const { setUser, setToken, setLogout } = userSlice.actions;
export default userSlice.reducer;
