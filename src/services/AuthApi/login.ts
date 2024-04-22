import axios from "axios";
import { LoginFormData } from "../state";

// Define base URL from environment variables
const baseUrl = process.env.REACT_APP_API_URL;

// Function to register user
export const LoginApi = async (formData: LoginFormData) => {
  try {
    const response = await axios.post(
      `${baseUrl}/login`,
      formData,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    if (response.data) {
      return response.data;
    } 
   
  } catch (error: any) {
    console.error("error", error);
    throw error;
  }
};

