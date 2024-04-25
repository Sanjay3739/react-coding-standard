import axios from "axios";

// Define base URL from environment variables
const baseUrl = process.env.REACT_APP_API_URL;

// Function to fetch user data
export const fetchUserDataApi = async (token: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}/user-data`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      }
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Error in fetchUserDataApi:", error);
    throw error;
  }
};
