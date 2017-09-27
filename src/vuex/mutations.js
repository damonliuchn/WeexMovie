import * as mutationsName from './mutations-name'
const mutationsFun = {
    [mutationsName.SET_LIST](state, {type, items}) {
        state.users = items
        console.log("ssssss"+items.total)
    }
}
export  default mutationsFun
