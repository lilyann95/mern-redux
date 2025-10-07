import { login } from "../../api/auth";

const loginFn = async (userData) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("You don't have acccess.");
    }
    const res = await login(userData);
    return res.data;
  } catch (error) {
    console.error(
      `Error logging in. Please try again later. ${error.response}`
    );
  }
};

export default loginFn;
