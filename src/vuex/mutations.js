
import * as mutationsName from './mutations-name'
const mutationsFun = {
    [mutationsName.SET_LIST](state, {type,page, items}) {
        var key = "type"+type
        if(page ==1 ){
            state[key] = items
        }else{
            state[key].push.apply(state[key], items);
        }
        console.log("ssssss1 total:" + key + "------" + state[key].length)
    },
    [mutationsName.SET_SEARCH_RESULT](state, {keyWord, page,items}) {
        if(page ==1 ){
            state.searchResult = items
        }else{
            state.searchResult.push.apply(state.searchResult, items);
        }
        console.log("ssssss1 total:" + key + "------" + state.searchResult.length)
    }
}
export  default mutationsFun
