import axios from "axios";
import { handleApiError } from "../ErrorHandling/errorHandling";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const ResetApi = async (email: string, password: string, ConfirmPassword: string) => {
  try {
    const response = await axios.post(`${baseUrl}/reset-password`, { email, password, ConfirmPassword });
    return response.data;
  } catch (error: any) {
    handleApiError(error);
  }
};