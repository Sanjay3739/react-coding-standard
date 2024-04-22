import axios from "axios";

// Define base URL from environment variables
const baseUrl = process.env.REACT_APP_API_URL;

// Function to register user
export const LogoutApi = async (token: string) => {
  try {
    const response = await axios.post(
      `${baseUrl}/logout`,
      { token },
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in LogoutApi:", error);
    throw error;
  }
};
