import axios from 'axios';
import config from '@/config';
import { $formatFormData } from '@/libs/tool';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // token 验证
        // const token = store.state.token;
        // token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default ({
    post (url, data = {}, header) {
        let config = {};
        header && (config.headers = { 'Content-Type': header });
        return new Promise((resolve, reject) => {
            axios.post(url, $formatFormData(data), config)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    get (url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, { params })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
});