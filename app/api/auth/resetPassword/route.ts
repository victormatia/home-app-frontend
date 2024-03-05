import axios, { AxiosRequestConfig } from 'axios';

interface ResetPasswordProps {
  email: string
}

export const resetPassword = async ({ email } : ResetPasswordProps) => {
  const options: AxiosRequestConfig = {
    method: 'POST',
    url: 'https://dev-xxqg1s11rae0x4rz.us.auth0.com/dbconnections/change_password',
    headers: { 'content-type': 'application/json' },
    data: {
      client_id: '9c5ruxxi9CEcIoaVk5Js02oJ6Q7rqHPP',
      email: `${email}`,
      connection: 'Username-Password-Authentication',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

