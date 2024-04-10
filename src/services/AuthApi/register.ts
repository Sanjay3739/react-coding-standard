import axios from "axios";
import { handleApiError } from "../ErrorHandling/errorHandling";
import { RegisterFormData } from "../state";

const baseUrl = process.env.REACT_APP_API_URL;

export const RegisterApi = async (formData: RegisterFormData) => {
  try {
    const response = await axios.post(
      `${baseUrl}/register`,
      formData,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response;
  } catch (error: any) {
    handleApiError(error);
  }
};
