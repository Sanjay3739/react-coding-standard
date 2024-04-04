import axios from "axios";
import { handleApiError } from "../ErrorHandling/errorHandling";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const ForgotApi = async (email: string) => {
  try {
    const response = await axios.post(`${baseUrl}/forgot-password`, { email });
    return response.data;
  } catch (error: any) {
    handleApiError(error);
  }
};