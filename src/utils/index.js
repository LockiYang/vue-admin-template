/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

export function successNotify (that, msg) {
  that.$notify({
    title: '成功',
    message: msg,
    type: 'success',
    duration: 2000
  })
}

export function optionsToMap (options) {
  const result = {}
  for (const one of options) {
    result[one.key] = one.displayName
  }
  return result
}

export function commonFilter (val, options) {
  return optionsToMap(options)[val]
}

export function yonTypeFilter (val) {
  const yonOptions = [
    { key: true, displayName: '是' },
    { key: false, displayName: '否' }
  ]
  return optionsToMap(yonOptions)[val]
}

export function switchTypeFilter (val) {
  const yonOptions = [
    { key: true, displayName: '开启' },
    { key: false, displayName: '关闭' }
  ]
  return optionsToMap(yonOptions)[val]
}

export function toPercent (val) {
  if (typeof val === 'number') {
    if (isNaN(val) || val === Infinity || val === -Infinity) {
      return '-'
    } else {
      return (val * 100).toFixed(1) + '%'
    }
  } else {
    return '-'
  }
}
