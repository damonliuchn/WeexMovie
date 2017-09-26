import * as mutations from './mutations-types'
const mutationsFun = {
    [mutations.FUN_SET_LIST](state, {type, items}) {
        state.users = items
        console.log("ssssss"+items.total)
    }
}
export  default mutationsFun
