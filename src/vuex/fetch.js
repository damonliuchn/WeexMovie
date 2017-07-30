//const stream = weex.requireModule('stream')

const baseURL = 'https://raw.githubusercontent.com/MasonLiuChn/MockData/master/MoviesExample.json'

export function fetch() {
    return new Promise((resolve, reject) => {
        // stream.fetch(
        //         {
        //             method: 'GET',
        //             //url: `${baseURL}/${path}`,
        //             url: baseURL,
        //             type: 'json'
        //          },
        //
        //         (response) => {
        //             console.log('----------> response.status: ' + response.status)
        //             if (response.status == 200) {
        //                 resolve(response.data)
        //             }
        //             else {
        //                 reject(response)
        //             }
        //         },
        //
        //         () => {}
        //     )
    })
}
