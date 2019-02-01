import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        // 设置属性
        playState: false,
        playListState:false,
        HomeDataLoadingCompleted:true,
        PlayListDataLoadingCompleted:true,
        RollTime:false,
        defaultIndex:0,
        getMusicList:{},
        gitMusicSrc:{},
        MusicPlaying:{},
        stareTime:'',
        endTime:''
        
    },
    getters: {
        // 获取属性的状态
        playState: state => state.playState,
        playListState: state => state.playListState,
        HomeDataLoadingCompleted: state => state.HomeDataLoadingCompleted,
        PlayListDataLoadingCompleted: state => state.PlayListDataLoadingCompleted,
        getMusicList: state => state.getMusicList,
        getRollTime: state => state.RollTime,
        gitMusicSrc: state => state.gitMusicSrc,
        MusicPlaying: state => state.MusicPlaying,
        defaultIndex: state => state.defaultIndex,
        stareTime: state => state.stareTime,
        endTime: state => state.endTime,
        

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
        setgetMusicList(state, data) {
            state.getMusicList = data
        },
        setRollTime(state, data) {
            state.RollTime = data
        },
        setgitMusicSrc(state, data) {
            state.gitMusicSrc = data
        },
        setMusicPlaying(state, data) {
            state.MusicPlaying = data
        },
        setdefaultIndex(state, data) {
            state.defaultIndex = data
        },
        setstareTime(state, data) {
            state.stareTime = data
        },
        setendTime(state, data) {
            state.endTime = data
        },
    },
    actions: {
        // 应用mutations
        
    }
})