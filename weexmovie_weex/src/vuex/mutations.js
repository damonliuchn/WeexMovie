
export function SET_LIST(state, {type, items}) {
    state.lists[type] = items
}

export function APPEND_LIST(state, {type, items}) {
    console.log('----------> SET_LIST: '+ state.lists[type].length +"--"+items.length)
    state.lists[type]=state.lists[type].concat(items)
    console.log('----------> SET_LIST: '+ state.lists[type].length)
}

export function SET_BANNER(state, {banners}) {
    state.banners = banners
}

// export function SET_ITEMS(state, {items}) {
//     items.forEach(item => {
//         if (item) {
//             Vue.set(state.items, item.id, item)
//         }
//     })
// }
//
// export function SET_USER(state, {user}) {
//     Vue.set(state.users, user.id, user)
// }
