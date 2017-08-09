const makeRequest = (method, url, args) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.timeout = 30000

    if (args && (method === 'POST' || method === 'PUT')) {
      let path = ''
      let argumentsCount = 0

      for (let key in args) {
        if (args.hasOwnProperty(key)) {
          if (argumentsCount++) {
            path += '&'
          }

          path += encodeURIComponent(key) + '=' + encodeURIComponent(args[key])
        }
      }

      xhr.open(method, url)
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.send(path)
    } else {
      xhr.open(method, url)
      xhr.send()
    }

    xhr.onload = () => {
      if (this.status >= 200 && this.status < 300) {
        return resolve(this.response)
      }

      reject(this.statusText)
    }

    xhr.onerror = () => {
      reject(this.statusText)
    }

    xhr.ontimeout = () => {
      xhr.abort()
    }
  })
}

export default makeRequest