import { createApi } from './createApi'

const request = createApi({
  setHeaders: () => {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };
    return headers
  },
  createOptions: {
    withCredentials: false //跨域请求时是否需要凭证
  }
});

export default request;