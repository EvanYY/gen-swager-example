import axios, { Method } from 'axios'
import qs from 'qs'

type Recordable<T extends any = any> = Record<string, T>

interface FetchService {
  post(url: string, data?: any): Promise<any>
  get(url: string, param?: any): Promise<any>
  request(config: FetchRequest): Promise<any>
}
interface FetchRequest {
  method: Method
  url: string
  params: any
  payload: any
  headers?: any
}

// axios 配置
function getInstance(serverPath: string) {
  const http = axios.create({
    baseURL: serverPath,
    timeout: 180000,
    withCredentials: true,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    paramsSerializer: function(params) {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    },
  })
  // request拦截器
  http.interceptors.request.use(
    (config: any) => {
      return config
    },
    (error: any) => {
      Promise.reject(error)
    }
  )
  // respone拦截器
  http.interceptors.response.use(
    (res: any) => {
      return Promise.resolve(res)
    },
    (error: any) => {
      // if (error.response && `${error.response.status}` === '401') {
      // } else {
      // }
      return Promise.reject(error)
    }
  )
  return http
}

class HttpClient implements FetchService {
  private $apiPath = ''
  constructor(apiPath: string) {
    this.$apiPath = apiPath
  }
  public getAxios() {
    return getInstance(this.$apiPath)
  }
  public async request(config: FetchRequest) {
    const result = await getInstance(this.$apiPath).request({
      url: config.url,
      method: config.method,
      params: config.params,
      data: config.payload,
      headers: config.headers,
    })
    return result.data
  }
  public async post(url: string, data?: any) {
    const result = await getInstance(this.$apiPath).post(url, data)
    return result.data
  }
  public async get(url: string, param?: any) {
    const ajax = getInstance(this.$apiPath)
    const result = await ajax({
      url,
      method: 'get',
      params: param,
      withCredentials: true,
      // headers: { 'Content-Type': 'text/plain' },
    })
    return result.data
  }
  public async uploadFile<T = any>(
    url: string,
    params: {
      data?: Recordable
      name?: string
      file: File | Blob
      filename?: string
    }
  ) {
    const formData = new window.FormData()

    if (params.data) {
      Object.keys(params.data).forEach((key) => {
        if (!params.data) return
        const value = params.data[key]
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item)
          })
          return
        }

        formData.append(key, params.data[key])
      })
    }

    formData.append(params.name || 'file', params.file, params.filename)

    const ajax = getInstance(this.$apiPath)
    const result = await ajax.request<T>({
      url,
      method: 'POST',
      data: formData,
      headers: {
        'Content-type': 'multipart/form-data;charset=UTF-8',
      },
    })
    return result.data
  }
}

export { HttpClient, FetchService }
