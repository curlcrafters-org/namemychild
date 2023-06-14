import axios, { AxiosResponse, AxiosError } from 'axios';

interface NameProps {
  gender: string;
  starts_with: string;
  origin: string;
  style: string;
  syllables: string;
  additional_info: string;
}

export const searchNames = async (body: NameProps): Promise<void> => {
  try {
    const response: AxiosResponse = await axios.post(
      'https://i8x9ft1q1m.execute-api.ap-south-1.amazonaws.com/dev/dev',
      body
    );
    const resp = { ...response.data };
    resp.body = JSON.parse(resp.body);
    // let newBody = resp.body.names.split('{')[1];
    // newBody = '{' + newBody;
    // const tempBody = JSON.parse(newBody);
    // resp.body = tempBody;
    console.log('Response', resp);
    return resp;
  } catch (error: any) {
    const axiosError: AxiosError = error;
    if (axiosError.response) {
      console.error(
        'Request failed with status code:',
        axiosError.response.status
      );
    } else {
      console.error('Request failed:', axiosError.message);
    }
  }
};
