import axios from 'axios'

export function getBanner() {
    const url = '/banner'
    return axios.get(url)
}

export function getPersonalized() {
    const url = '/personalized'
    return axios.get(url)
}

export function getNewSong() {
    const url = '/top/album?offset=0&limit=6'
    return axios.get(url)
}

export function getFM() {
    const url = '/personalized/djprogram'
    return axios.get(url)
}

export function getSongList(id) {
    const url = `/playlist/detail?id=${id}`
    return axios.get(url)
}

export function getSole() {
    const url = '/personalized/privatecontent'
    return axios.get(url)
}
export function getMv() {
    const url = '/personalized/mv'
    return axios.get(url)
}
export function getSonglist(id) {
    const url = `/top/list?idx=${id}`
    return axios.get(url)
}

export function getMusicUrl(id) {
    const url = `/song/url?id=${id}`
    return axios.get(url)
}


export default class Song {
    constructor({ id, mid, singer, name, album, duration, image, url, aliaName }) {
        this.id = id
        this.singer = singer
        this.name = name
        this.album = album
        this.aliaName = aliaName
        this.image = image
    }
}

function singerName(arr) {
    let name = []
    name = arr.map((item) => {
        return item.name
    })
    return name.join('/')
}

export function createNewSong(music) {
    return new Song({
        id: music.id,
        singer: singerName(music.song.artists),
        name: music.name,
        album: music.song.album.name,
        image: music.song.album.picUrl
    })
}

