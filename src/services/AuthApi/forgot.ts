import axios from "axios";
import { handleApiError } from "../ErrorHandling/errorHandling";

// Define base URL from environment variables
const baseUrl = process.env.REACT_APP_API_URL;

// Function to register user
export const ForgotApi = async (email: string) => {
  try {
    const response = await axios.post(`${baseUrl}/forgot-password`, { email }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.data) {
      return response.data;
    }
  } catch (error: any) {
    handleApiError(error);
    throw error;
  }
};
