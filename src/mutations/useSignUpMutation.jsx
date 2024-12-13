import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const signUp = async (userData) => {
  const { data } = await axios.post("/api/signup", userData); // Replace with actual endpoint
  return data;
};

const useSignUpMutation = () => {
  return useMutation(signUp);
};

export default useSignUpMutation;
