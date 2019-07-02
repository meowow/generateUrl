function sanitize (str) {
  if (typeof str === 'undefined' || str.length <= 0) return false

  return str
}

function generateUrl (domain, queryStringObj) {
  if (!queryStringObj || !domain) {
    throw Error('There are no query string object or domain')
  }

  let res = `${domain}/?`

  for (let key in queryStringObj) {
    let sanitizedValue = sanitize(queryStringObj[key])
    if (key && sanitizedValue) {
      res += `${key}=${sanitizedValue}&`
    }
  }

  return res.endsWith('&') ? res.substring(0, res.length - 1) : res
}

module.exports = generateUrl
