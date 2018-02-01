
import * as mutationsName from './mutations-name'
const mutationsFun = {
    [mutationsName.SET_LIST](state, {type, items}) {
        var key = "type"+type
        state[key] = items
        console.log("ssssss1 total:" + key + "------")
    }
}
export  default mutationsFun
