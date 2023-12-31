// 1.方式一: 手动的切换不同的环境(不推荐)
// const BASE_URL = 'http://coderwhy.org/dev'
// const BASE_NAME = 'coderwhy'

// const BASE_URL = 'http://coderwhy.org/prod'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'http://coderwhy.org/test'
// const BASE_NAME = 'james'

// 2.根据process.env.NODE_ENV区分
// 开发环境: development
// 生成环境: production
// 测试环境: test

// process.env.NODE_ENV , 为项目当前所处环境， 进行判断
// 导出时，需要以{}包裹导出， 否则应该在初始定义时就用 export let BASE_PATH导出

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  // 需要改生产地址为目标地址
  BASE_URL = 'http://codercba.com:5000'
} else {
  BASE_URL = 'http://codercba.com:5000'
}
export { BASE_URL, TIME_OUT }
