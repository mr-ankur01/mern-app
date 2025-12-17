import axios from "axios";

export const loginUser = async (data) => {
  try {
    const res = await axios.post("/api/auth/login", data);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export const signUser = async (data) => {
  try {
    const res = await axios.post("/api/auth/sign", data);

    return res.data;
  } catch (err) {
    return err.response.data;
  }
};
