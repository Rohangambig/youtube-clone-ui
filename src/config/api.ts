import axios from 'axios';

const api = axios.create({
    baseURL:'/api',
    withCredentials:true
});

api.interceptors.request.use((response) =>
    {
        return response;
    }
    ,async (err) =>{

    try {
        if(err.response.status === 401){
        await api.post(
            '/auth/refresh'
        );

        return api(err.config);
    }}
    catch(refreshError) {
        window.location.href = '/login'
        return Promise.reject(refreshError);
    }
    
    window.location.href = '/login';
    return Promise.reject(err);

})
export default api;