import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        // 设置属性
        playState: false,
    },
    getters: {
        // 获取属性的状态
        playState: state => state.playState,

    },
    mutations: {
        //改变状态
        setPlayState(state, data) {
            state.playState = data
        }
    },
    actions: {
        // 应用mutations
        
    }
})