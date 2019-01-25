<template>
    <div class="loading">
        <section>
            <div class="loader loader-7">
                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name:"Loading"
}
</script>

<style lang='stylus' scoped>
.loading
    position fixed
    top 4rem
    left 1.8rem
    z-index 999

@font-face {
    font-family: 'icomoon';
    src: url('~styles/fonts/icomoon.eot');
    src: url('~styles/fonts/icomoon.eot') format('embedded-opentype'),
        url('~styles/fonts/icomoon.woff') format('woff'),
        url('~styles/fonts/icomoon.ttf') format('truetype'),
        url('~styles/fonts/icomoon.svg') format('svg');
    font-weight: normal;
    font-style: normal;
}
[class^="icon-"],
[class*=" icon-"] {
    font-family: 'icomoon';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.loader {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 75px;
    display: inline-block;
    vertical-align: middle;
}

.loader-star {
    position: absolute;
    top: calc(50% - 12px);
}

.loader-7 .line {
    width: 8px;
    position: absolute;
    border-radius: 5px;
    bottom: 0;
    background: -webkit-gradient(linear, left top, left bottom, from(#e9cb1e), to(#f01010));
    background: -webkit-linear-gradient(top, #e9cb1e, #f01010);
    background: linear-gradient(to bottom, #e9cb1e, #f01010);
}

.loader-7 .line1 {
    left: 0;
    -webkit-animation: line-grow 0.5s ease alternate infinite;
    animation: line-grow 0.5s ease alternate infinite;
}

.loader-7 .line2 {
    left: 20px;
    -webkit-animation: line-grow 0.5s 0.2s ease alternate infinite;
    animation: line-grow 0.5s 0.2s ease alternate infinite;
}

.loader-7 .line3 {
    left: 40px;
    -webkit-animation: line-grow 0.5s 0.4s ease alternate infinite;
    animation: line-grow 0.5s 0.4s ease alternate infinite;
}

@-webkit-keyframes line-grow {
    0% {
        height: 0;
    }

    100% {
        height: 75%;
    }
}
</style>
