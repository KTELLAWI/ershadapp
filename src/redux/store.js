const { configureStore } = require("@reduxjs/toolkit");
import userSlice from "../redux/features/userSlice";
import jopSavesSlice from "../redux/features/savedJopsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      jopSaves: jopSavesSlice,
    },
  });
};
