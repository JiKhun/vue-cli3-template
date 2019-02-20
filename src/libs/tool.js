import qs from 'qs';

export const $formatFormData = (data) => {
    let result = {
        'request': JSON.stringify(data.request),
        'param': JSON.stringify(data.param)
    };
    return qs.stringify(result);
};