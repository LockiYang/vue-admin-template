export const pagesConfig = {
  pageSize: 20,
  pageSizes: [20, 50, 100, 500]
}

export const yonOptions = [
  { key: true, displayName: '是' },
  { key: false, displayName: '否' }
]

export const switchOptions = [
  { key: true, displayName: '启用' },
  { key: false, displayName: '禁用' }
]

export const imageBaseUrl = process.env.VUE_APP_BASE_API + '/api/v1/util/imge/'
export const imageUploadUrl = process.env.VUE_APP_BASE_API + '/api/v1/util/upload'
