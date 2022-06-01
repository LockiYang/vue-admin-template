
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    nick: 'Admin',
    status: true,
    id: 1,
    token: 'admin-token'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
    nick: 'Editor',
    status: true,
    id: 2,
    token: 'editor-token'
  }
}

module.exports = [
  // user login
  {
    url: '/api/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      return { token }
    }
  },

  // get user info
  {
    url: '/api/user/info.*',
    type: 'get',
    response: config => {
      // const { token } = config.query
      const info = users['admin-token']

      return info
    }
  },

  // user logout
  {
    url: '/api/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
