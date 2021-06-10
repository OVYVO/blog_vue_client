import axios from 'axios'
import qs from 'qs'
import { showLoading, hideLoading } from './loading'
import { ElMessage } from 'element-plus'

const noop = () => {}

export function createApi({
  createOptions = {},
  setHeaders = noop
} = {}) {
  const instance = axios.create(createOptions)
  instance.interceptors.request.use(
    config => {
      const { data = {} } = config
      if (typeof data !== "string") {
        config.data = qs.stringify(data)
      }
      const headers = setHeaders(config) || {};
      for (let key in headers) {
        const value = headers[key];
        config.headers[key] = value;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    res => {
      const { errCode } = res.data
      if (errCode == 0) {
        return Promise.reject(res);
      } else if (errCode == 200) {
        return res
      } else if (errCode == 404) {
        window.location.reload()
      }
    },
    error => {
      return Promise.reject(error);
    }
  )

  return async (options, { shouldLoading = true } = {}) => {
    if (shouldLoading) { showLoading() }
    try {
      const response = await instance(options);
      const { data = {} } = response;
      hideLoading()
      return data;
    } catch (res) {
      const { message = '' } = res.data
      const errorMessage = `${message}`
      if (shouldLoading) { hideLoading() }
      ElMessage.error(errorMessage)
      return Promise.reject(errorMessage);
    }
  }
}