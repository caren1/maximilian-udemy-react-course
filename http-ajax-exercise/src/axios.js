import axios from 'axios';

// this creates an instance of axios object
// it allows to control in detail the different set up we need for our requests, specific to our component needs

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
