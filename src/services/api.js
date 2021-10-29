import axios from 'axios';

const api = axios.create({
    baseURL: 'https://back-apipets.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
})

export default api;
