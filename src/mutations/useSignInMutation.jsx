import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const signInUser = async (formData) => {
  const { data } = await axios.post(
    "https://your-api-url.com/api/signin", // Replace with your actual sign-in endpoint
    formData
  );
  return data; // The returned data should include a token or user info
};

const useSignInMutation = () => {
  return useMutation(signInUser);
};

export default useSignInMutation;
