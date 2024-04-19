import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

export const ResetApi = async (
  email: string,
  password: string,
  ConfirmPassword: string,
  token: string | null
) => {
  try {
    const response = await axios.post(
      `${baseUrl}/reset-password`,
      { email, password, ConfirmPassword, token },
      {
        headers: {
          "Content-Type": "application/json",
        },
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
