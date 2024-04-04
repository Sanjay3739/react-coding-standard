import axios from "axios";
import { handleApiError } from "../ErrorHandling/errorHandling";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const LoginApi = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { email, password });
    return response.data;
  } catch (error: any) {
    handleApiError(error);
  }
};