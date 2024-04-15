import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const handleApiError = (error: AxiosError) => {
  if (error.response && error.response.status === 422) {
    let errorMessage: string;
    if (typeof error.response.data === "string") {
      errorMessage = error.response.data;
    } else {
      errorMessage = JSON.stringify(error.response.data);
    }
    console.error("API Error:", (error.response.data as any).message); // Log the error response
    toast.error((error.response.data as any).message); // Display generic error message in a toast
    throw new Error(errorMessage); // Throw the specific error message
  }
  console.error(
    "API Error:",
    "An error occurred while processing your request."
  ); // Log the generic error message
  toast.error("An error occurred while processing your request."); // Display generic error message in a toast
  throw new Error("An error occurred while processing your request.");
};