import { register } from "../../api/auth";

const registerFn = async (userData) => {
  try {
    const response = await register(userData);
    return response.data;
  } catch (error) {
    console.error(
      `Error registering the user. Please try again later.${error.response}`
    );
  }
};

export default registerFn;
