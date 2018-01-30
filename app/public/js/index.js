import qs from 'qs'
export function hashQuerySearch(key, val) {
    const hash = window.location.hash.split('?'),
      search = hash[1],
      route = hash[0],
      query = qs.parse(search)
  
    if (arguments.length >= 2) {
      query[key] = JSON.stringify(val)
      return window.location.hash = `${route}${_.isEmpty(query) ? '' : '?'}${qs.stringify(query)}`
    }
  
    if (arguments.length === 1) {
      return query[key]
    }
  
    if (arguments.length === 0) {
      return query
    }
  }