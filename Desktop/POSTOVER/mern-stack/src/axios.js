import axios from 'axios';

const instance = axios.create(
    {baseURL:'https://mern-end.herokuapp.com'}
)

export default instance