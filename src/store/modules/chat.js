import { getChatList, getRecordsById } from '@/api/chat'
import avatar from '@/assets/userAvatar.jpg'
import checkPermission from '@/utils/permission'

const state = {
  // 搜索值
  searchText: '',
  user: {
    name: '客服',
    avatar: avatar
  },
  // 对话好友列表
  chatlist: [],
  // 得知当前选择的是哪个对话
  selectedId: 0,
  // 与当前选中好友的聊天记录
  selectedMsgs: [],
  // 输入内容的草稿
  drafts: {},
  inputContent: ''
}

// state setter
const mutations = {
  setChatlist (state, value) {
    state.chatlist = value
  },
  setSearch (state, value) {
    state.searchText = value
  },
  setSelectedMsgs (state, value) {
    state.selectedMsgs = value
  },
  setSelectedId (state, value) {
    state.selectedId = value
  },
  setInputContent (state, value) {
    state.inputContent = value
  },
  loadMoreNewMsg (state, msgs) {
    // 将新加载的消息加到消息的头部
    state.selectedMsgs.unshift(...msgs)
  }
}

const getters = {
  searchedChatlist (state) {
    console.info(state.chatlist)
    return state.chatlist.filter(item =>
      item.user.alias &&
      item.user.alias.includes(state.searchText))
  },
  selectedChat (state) {
    console.info(state.selectedId)
    console.info(state.chatlist)
    console.info('selectedChat: ', state.chatlist.find(item => (item.subscribeId || item.chatId) === state.selectedId))
    return state.chatlist.find(item => (item.subscribeId || item.chatId) === state.selectedId)
  }
}

const actions = {
  search: ({ commit }, value) => {
    setTimeout(() => {
      commit('setSearch', value)
    }, 100)
  },
  selectSession: ({ commit }, value) => {
    commit('setSelectedId', value)
  },
  initChatList: ({ commit, dispatch }) => {
    const isAdmin = checkPermission(['MANAGER_SUPER_USER'])
    const params = {
      pageNum: 1,
      pageSize: 1000
    }
    getChatList(params, isAdmin).then(response => {
      commit('setChatlist', response.result)
    }).catch(e => {
      console.info(e)
    })
  },
  initChatHistory ({ commit }, id) {
    console.info('yyyy')
    const isAdmin = checkPermission(['MANAGER_SUPER_USER'])
    const params = {
      pageNum: 1,
      pageSize: 20,
      sort_createAt: 'desc',
      search_type_EQ: -1
    }
    if (isAdmin) {
      params.search_chatId_EQ = id
    } else {
      params.search_subscribeId_EQ = id
    }
    getRecordsById(params, isAdmin).then(response => {
      commit('setSelectedMsgs', response.result.reverse())
    }).catch(e => {
      console.info(e)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
