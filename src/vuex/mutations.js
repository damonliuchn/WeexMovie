import * as mutationsName from './mutations-name'
const mutationsFun = {
    [mutationsName.SET_LIST](state, {type, items}) {
        state.users = items
        console.log("ssssss total:" + items.length)
    }
}
export  default mutationsFun
