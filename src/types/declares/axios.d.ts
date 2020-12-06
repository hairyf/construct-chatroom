// 对axios模块进行补充说明
import { AxiosStatic } from 'axios'
declare module 'axios' {
  export interface AxiosRequestConfig {
    custom?: any
  }
  const axios: AxiosStatic
  export default axios
}
