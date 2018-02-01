
import * as mutationsName from './mutations-name'
const mutationsFun = {
    [mutationsName.SET_LIST](state, {type, items}) {
        var key = "type"+type
        state[key] = items
        console.log("ssssss1 total:" + key + "------")
    },
    [mutationsName.SET_SEARCH_RESULT](state, {keyWord, items}) {
        state.searchResult = items
        console.log("ssssss1 total:" + key + "------" + state.searchResult.length)
    }
}
export  default mutationsFun
