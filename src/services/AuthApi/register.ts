import axios from "axios";
import { handleApiError } from "../ErrorHandling/errorHandling";
import { RegisterFormData } from "../state";

// Define base URL from environment variables
const baseUrl = process.env.REACT_APP_API_URL;

// Function to register user
export const RegisterApi = async (formData: RegisterFormData) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, formData, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.data) {
      return response;
    }
   
  } catch (error: any) {
    handleApiError(error);
    throw error; // Re-throw error for further handling by caller if needed
  }
};
