const stream = weex.require('stream')
const baseURL = 'http://10.12.78.121:7777/ibaiou'

export function fetch(path) {
    return new Promise((resolve, reject) => {
        stream.fetch({
            method: 'GET',
            //url: `${baseURL}/${path}`,
            url: baseURL + '/' + path,
            type: 'json'
        }, (response) => {
            console.log('----------> response.status: ' + response.status)
            if (response.status == 200) {
                resolve(response.data)

            }
            else {
                reject(response)
            }
        }, () => {
        })
    })
}

export function fetchItems2(ids) {
    return Promise.all(ids.map(id => fetchItem(id)))
}

export function fetchItems() {
    return fetch('api/artical/list/index.php')
}

export function fetchBanners() {
    return fetch('api/banner/index.php')
}

export function fetchMeetings() {
    return fetch('api/meeting/list/index.php')
}
