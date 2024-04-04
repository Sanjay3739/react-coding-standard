import axios from "axios";
import { handleApiError } from "../ErrorHandling/errorHandling";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const RegisterApi = async (userName: string, phone: string, email: string, password: string,) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, { userName, phone, email, password });
    return response.data;
  } catch (error: any) {
    handleApiError(error);
  }
};