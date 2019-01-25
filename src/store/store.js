import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        // 设置属性
        playState: false,
        playListState:false,
        HomeDataLoadingCompleted:true,
        PlayListDataLoadingCompleted:true
    },
    getters: {
        // 获取属性的状态
        playState: state => state.playState,
        playListState: state => state.playListState,
        HomeDataLoadingCompleted: state => state.HomeDataLoadingCompleted,
        PlayListDataLoadingCompleted: state => state.PlayListDataLoadingCompleted,
        

    },
    mutations: {
        //改变状态
        setPlayState(state, data) {
            state.playState = data
        },
        setplayListState(state, data) {
            state.playListState = data
        },
        setHomeDataLoadingCompleted(state, data) {
            state.HomeDataLoadingCompleted = data
        },
        setPlayListDataLoadingCompleted(state, data) {
            state.PlayListDataLoadingCompleted = data
        },
    },
    actions: {
        // 应用mutations
        
    }
})