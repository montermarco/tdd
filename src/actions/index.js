import axios from 'axios';

export const getSecretWord = () => {
  return axios.get('http://localhost:3000')
    .then(response => response.data);
};