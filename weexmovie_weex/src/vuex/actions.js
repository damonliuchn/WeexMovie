import { fetchItems,fetchBanners } from './fetch'

const LOAD_MORE_STEP = 10

export function FETCH_LIST_DATA ({ commit, dispatch, state }, { type }) {
  return fetchItems().then(items => commit('SET_LIST', { type, items }))
}

export function FETCH_BANNER_DATA ({ commit, dispatch, state }, { }) {
  return fetchBanners().then(banners => commit('SET_BANNER', { banners }))
}

export function LOAD_MORE_ITEMS ({ commit, dispatch, state }, { type }) {
  return fetchItems().then(items => commit('APPEND_LIST', { type, items }))
}
// export function FETCH_ITEMS ({ commit, state }, { ids }) {
//   // only fetch items that we don't already have.
//   const newIds = ids.filter(id => !state.items[id])
//   return newIds.length
//     ? fetchItems(newIds).then(items => commit('SET_ITEMS', { items }))
//     : Promise.resolve()
// }
//
// export function FETCH_USER ({ commit, state }, { id }) {
//   return state.users[id]
//     ? Promise.resolve(state.users[id])
//     : fetchUser(id).then(user => commit('SET_USER', { user }))
// }
