import {fetch,search} from './fetch'
import * as mutationsName from './mutations-name'

export function fetchList({commit, dispatch, state}, {type,page}) {
    return fetch(type,page).then(
        items =>
            commit(mutationsName.SET_LIST, {type,page, items})
    )
}



export function searchList({commit, dispatch, state}, {keyWord,page}) {
    return search(keyWord,page).then(
        items =>
            commit(mutationsName.SET_SEARCH_RESULT, {keyWord, page,items})
    )
}