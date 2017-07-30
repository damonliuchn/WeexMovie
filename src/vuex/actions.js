import { fetch } from './fetch'

const LOAD_MORE_STEP = 10

export function FETCH_LIST_DATA ({ commit, dispatch, state }, { type }) {
  return fetch()
      .then(items =>
          commit('SET_LIST', { type, items })
      )
}