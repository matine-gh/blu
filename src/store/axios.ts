import axios from "axios";

const axiosInterceptorInstance = axios.create({
    baseURL: 'http://127.0.0.1:3300',
});

axiosInterceptorInstance.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error);
    }
);

export default axiosInterceptorInstance;