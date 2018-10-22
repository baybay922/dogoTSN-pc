import VueX from 'vuex'
import Vue from 'vue'

Vue.use(VueX)

const store = new VueX.Store({
    state:{
        show:false,
        ind:0
    },
    mutations:{
        changeShow(state,payload){
            state.show = true
        },
        close(state){
            state.show = false
        },
        saveIndex(state,payload){
            state.ind = payload;
            console.log(state.ind)
        }
    }
})

export default store