import { AxiosError } from "axios";

export const handleApiError = (error: AxiosError) => {
  if (error.response && error.response.status === 422) {
    let errorMessage: string;
    if (typeof error.response.data === "string") {
      errorMessage = error.response.data;
    } else {
      errorMessage = JSON.stringify(error.response.data);
    }
    throw new Error(errorMessage);
  }
  throw new Error("An error occurred while processing your request.");
};
