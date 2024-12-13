import { useMutation } from '@tanstack/react-query';

const useSignUpMutation = () => {
  // Define the sign-up API call
  const signUp = async (userData) => {
    const response = await fetch('/api/signup', { // Replace with your actual API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Sign-up failed');
    }

    return response.json();
  };

  // Use the mutation
  return useMutation(signUp);
};

export default useSignUpMutation;
