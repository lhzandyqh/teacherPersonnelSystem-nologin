import { param2Obj } from '@/utils'

const userMap = {
  // admin: {
  //   roles: ['admin'],
  //   token: 'admin',
  //   introduction: '我是超级管理员',
  //   avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  //   name: 'Super Admin'
  // },
  // editor: {
  //   roles: ['editor'],
  //   token: 'editor',
  //   introduction: '我是编辑',
  //   avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  //   name: 'Normal Editor'
  // }
  admin: {
    roles: ['人事处主管'],
    token: 'admin',
    introduction: '我是人事处主管',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    roles: ['教师'],
    token: 'editor',
    introduction: '我是教师',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  },
  editortwo: {
    roles: ['系部主管'],
    token: 'editortwo',
    introduction: '我是系部主管',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    console.log('mock调用getuserinfo')
    console.log(config.url)
    console.log(param2Obj(config.url))
    console.log(token)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
