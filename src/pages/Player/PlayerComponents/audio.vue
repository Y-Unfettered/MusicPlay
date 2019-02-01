<template>
    <div class="audioBox">
        <!-- 音频播放控件 -->
        <div class="Icon-box">
            <div class="ProgressBar">
                <div class="startTime">
                    <p>{{ audio.currentTime | formatSecond}}</p>
                </div>
                <div class="slider" @touchstart="handleTouchStart">
                    <div class="slider-track"></div>
                    <div class="slider-fill" :style="'width:'+sliderTime+'%'"></div>
                    <div class="slider-thumb" :style="'left:'+sliderTime+'%'">
                        <div class="slider-heart"></div>
                    </div>
                </div>
                <div class="endTime">
                    <p>{{audio.maxTime | formatSecond}}</p>
                </div>
                
            </div>
        </div>
        <div class="Controller">
            <ul>
                <li class="iconfont">&#xe62e;</li>
                <li class="iconfont" @click="backIndex">&#xe631;</li>
                <li class="iconfont" v-if="this.$store.state.playState" @click="startPlayOrPause">&#xe62c;</li>
                <li class="iconfont" v-else  @click="startPlayOrPause">&#xe62d;</li>
                <li class="iconfont" @click="nextIndex">&#xe632;</li>
                <li class="iconfont" @click="changeListState()">&#xe615;</li>
            </ul>
        </div>
        <!-- 此处的ref属性，可以很方便的在vue组件中通过 this.$refs.audio获取该dom元素 -->
        <audio ref="audio" @pause="onPause" @play="onPlay" autoplay @timeupdate="onTimeupdate" @loadedmetadata="onLoadedmetadata" :src="this.$store.state.gitMusicSrc"
            controls="controls" style="display:none;"></audio>
    </div>
</template>

<script>
// 将整数转换成 时：分：秒的格式
function realFormatSecond(second) {
    var secondType = typeof second
    if (secondType === 'number' || secondType === 'string') {
        second = parseInt(second)
        var min = Math.floor(second / 60) % 60,
            second = second % 60
        return ('0' + min).slice(-2) + ':' + ('0' + second).slice(-2)
    } else {
        return '00:00'
    }
}
import axios from "axios";
import { getMusicUrl } from "API/GetData";
export default {
    data() {
        return {
            sliderTime: 0,
            audio: {
                // 音频当前播放时长
                currentTime: 0,
                // 音频最大播放时长
                maxTime: 0,
                minTime:0,
                step:0.1
            }
        }
    },
    methods: {
        // 控制音频的播放与暂停
        startPlayOrPause() {
            console.log(this.$store.state.playState)
            this.$store.state.playState = !this.$store.state.playState
            this.$store.commit("setPlayState",this.$store.state.playState)
            return this.$store.state.playState ? this.play() : this.pause()
        },
        // 播放音频
        play() {
            console.log('你的播放开启了')
            this.$refs.audio.play()
        },
        // 暂停音频
        pause() {
            this.$refs.audio.pause()
        },
        // 当音频播放
        onPlay() {
            console.log('检测到你播放中')
            this.$store.state.playState = true
            this.$store.commit("setPlayState",this.$store.state.playState)
        },
        // 当音频暂停
        onPause() {
            this.$store.state.playState = false
            this.$store.commit("setPlayState",this.$store.state.playState)
        },
        nextIndex(){
            if (this.$store.state.defaultIndex >= this.$store.state.getMusicList.length) {
                this.$store.state.defaultIndex = this.$store.state.getMusicList.length
                this.$store.commit("setdefaultIndex", this.$store.state.defaultIndex)
                this.upDataMusicPlaying()
                this.$refs.audio.play()
            } else {
                this.$store.state.defaultIndex += 1
                this.$store.commit("setdefaultIndex", this.$store.state.defaultIndex)
                this.upDataMusicPlaying()
                this.$refs.audio.play()
            }
        },
        backIndex(){
            if (this.$store.state.defaultIndex == 0) {
                this.$store.state.defaultIndex == 0
                this.$store.commit("setdefaultIndex", this.$store.state.defaultIndex)
                this.upDataMusicPlaying()
                this.$refs.audio.play()
            }else{
                this.$store.state.defaultIndex -= 1
                this.$store.commit("setdefaultIndex", this.$store.state.defaultIndex)
                this.upDataMusicPlaying()
                this.$refs.audio.play()
            }
        },
        upDataMusicPlaying(){
            var playing = this.$store.state.getMusicList[this.$store.state.defaultIndex];
            this.$store.commit("setMusicPlaying", playing);
            const id = this.$store.state.MusicPlaying.id;
            getMusicUrl(id).then(res => {
                res.data.data.forEach(element => {
                    this.$store.commit("setgitMusicSrc", element.url);
                });
            });
        },
        changeListState(){
            this.$store.state.playListState = !this.$store.state.playListState
            this.$store.commit("setplayListState",this.$store.state.playListState)
        },
        handleFocus() {
            console.log('focues')
        },
        // 当加载语音流元数据完成后，会触发该事件的回调函数
        // 语音元数据主要是语音的长度之类的数据
        onLoadedmetadata(res) {
            console.log('loadedmetadata')
            this.audio.maxTime = parseInt(res.target.duration)
        },
        // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
        // 当音频当前时间改变后，进度条也要改变
        onTimeupdate(res) {
            console.log('timeupdate')
            // console.log(res)
            // console.log(this.audio.maxTime)
            // console.log()
            this.audio.currentTime = res.target.currentTime
            this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
            this.automaticNext()
        },

        // 进度条格式化toolTip
        formatProcessToolTip(index = 0) {
            index = parseInt(this.audio.maxTime / 100 * index)
            return '进度条: ' + realFormatSecond(index)
        },

        handleTouchStart(e) {
            this.setValue(e.touches[0]);
            document.addEventListener('touchmove', this.handleTouchMove);
            document.addEventListener('touchup', this.handleTouchEnd);
            document.addEventListener('touchend', this.handleTouchEnd);
            document.addEventListener('touchcancel', this.handleTouchEnd);
            // e.preventDefault();
            // this.onDragStart(e);
        },
        handleTouchMove(e){
            // console.log(e.changedTouches[0])
            this.setValue(e.changedTouches[0]);
        },
        handleTouchEnd(e) {
            this.setValue(e.changedTouches[0]);
            document.removeEventListener('touchmove', this.handleTouchMove);
            document.removeEventListener('touchup', this.handleTouchEnd);
            document.removeEventListener('touchend', this.handleTouchEnd);
            document.removeEventListener('touchcancel', this.handleTouchEnd);
            // this.onDragStop(e);
        },
        // 从点击位置更新 value
        setValue(e) {
            const $el=this.$el;
            const {
                maxTime,
                minTime,
                step
            } = this.audio;
            let value = (e.clientX - $el.getBoundingClientRect().left) / $el.offsetWidth * (maxTime - minTime);
            value = Math.round(value / step) * step + minTime;
            value = parseFloat(value.toFixed(5));

            if (value > maxTime) {
                value = maxTime;
            } else if (value < minTime) {
                value = minTime;
            }
            this.$refs.audio.currentTime = value;
        },
        // 拖动进度条，改变当前时间，index是进度条改变时的回调函数的参数0-100之间，需要换算成实际时间
        changeCurrentTime(index) {
            console.log('拖动进度条')
            // this.audio.playing && this.pause();
            // console.log('拖动了',index,this.sliderTime,this.audio.maxTime,parseInt(index / 100 * this.audio.maxTime))
            // !this.audio.playing && this.play();
            this.$refs.audio.currentTime = parseInt(index / 100 * this.audio.maxTime)
            console.log(this.audio.maxTime)
            console.log(this.$refs.audio.currentTime)
        },
        automaticNext(){
            if (this.audio.maxTime - 1 == Math.ceil(this.$refs.audio.currentTime)) {
                setTimeout(() => {
                    console.log("自动下一首")
                    this.nextIndex()
                }, 2000);
            }
        }
    },
    filters: {
        // 使用组件过滤器来动态改变按钮的显示
        transPlayPause(value) {
            return value ? '暂停' : '播放'
        },
        // 将整数转化成时分秒
        formatSecond(second = 0) {
            return realFormatSecond(second)
        }
    }
}
</script>

<style lang='stylus' scoped>
.audioBox
    width 100%
    height 3.32rem
    position absolute
    bottom 0
    .Icon-box
        width 100%
        height 1rem
        color #fff
        .ProgressBar
            width 100%
            height 1rem
            padding-left .1rem
            .startTime
                float left  
                width 1rem
                height 1rem
                line-height 1rem  
                text-align center
            .slider
                width 5rem
                position: relative;
                height: .1rem;
                display: inline-block;
                align-items: center;
                cursor: default;
                user-select: none;
                outline: none;
                margin-top .35rem
                margin-left .2rem
                .slider-track
                    position: absolute;
                    height: .1rem;
                    left: 0;
                    right: 0;
                    top: 50%;
                    border-radius .1rem
                    background-color: #bec2c1;
                .slider-fill
                    position: absolute;
                    height: .1rem;
                    width: 100%;
                    background-color: #e92e35;
                    border-radius .1rem
                    left: 0;
                    top: 50%;
                .slider-thumb
                    position: absolute;
                    top: 50%;
                    width: .3rem;
                    height: .3rem;
                    background-color: #e92e35;
                    color: #e92e35;
                    border-radius: 50%;
                    transform: translate(-50%, -35%);
                    cursor: pointer;
                    .slider-heart
                        width .1rem
                        height .1rem
                        background-color #fff
                        border-radius: 50%;
                        color: #e92e35;
                        margin .1rem
                        cursor: pointer;
            .endTime
                width 1rem
                height 1rem
                line-height 1rem
                text-align center
                float right 
                margin-right .2rem
    .Controller
        width 100%
        height 2.32rem
        color #ccc
        ul
            width 100%
            padding-top .5rem
            li
                float left
                width 20%
                text-align center
                font-size 1rem
</style>