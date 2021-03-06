import axios from "axios";

export function request1(config, success, failure) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })

  instance(config)
    .then(res => {
    success(res)
  }).catch(err => {
    failure(err)
  })
}

export function request2(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })

  instance(config.baseConfig)
    .then(res => {
      config.success(res)
    }).catch(err => {
      config.failure(err)
  })
}

export function request3(config) {
  return new Promise((resolve, reject) => {
    // 1.创建axios实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000,
    })

    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
    })
}

export function request4(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })

  // 2.axios 拦截器
  instance.interceptors.request.use(config => {
    console.log("request success")
    return config
  }, err => {
    console.log("request failure")
  })

  instance.interceptors.response.use(data => {
    console.log("response success")
    return data.data
  }, error => {
    console.log("response failure")
  })

  return instance(config)
}
