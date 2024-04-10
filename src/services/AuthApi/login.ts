import axios from "axios";
import { handleApiError } from "../ErrorHandling/errorHandling";
import { LoginFormData } from "../state";

const baseUrl = process.env.REACT_APP_API_URL;

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
      return response;
    } 
   
  } catch (error: any) {
    console.error("error", error);
    handleApiError(error);
  }
};
