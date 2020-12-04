import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-application-default-rtdb.firebaseio.com/'
});

export default instance;