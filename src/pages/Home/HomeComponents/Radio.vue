<template>
  <div class="radio">
    <div class="radio-nav">主播电台 ></div>
    <div class="radio-items">
      <ul>
        <li v-for="item in radioData" :key="item.id">
          <div class="radio-item-img">
            <img :src="item.picUrl" alt>
            <div class="radio-item-name">{{item.program.mainSong.artists[0].name}}</div>
          </div>
          <div class="radio-item-introduce">
            <p>{{item.program.mainSong.name}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRadio",
  data() {
    return {
      radioData: [
        {
          id: 2058595982,
          type: 1,
          name: "今日朗读：杜拉斯《情人》",
          copywriter: '编辑推荐：她说："是我，你好。"',
          picUrl:
            "http://p2.music.126.net/HxtoQ9ltTwM8mhq0XkK0gg==/109951163745950792.jpg",
          canDislike: false,
          program: {
            mainSong: {
              name: "今日朗读：杜拉斯《情人》",
              id: 1335399039,
              position: 0,
              alias: [],
              status: 0,
              fee: 0,
              copyrightId: 0,
              disc: "",
              no: 0,
              artists: [
                {
                  name: "郑老师的话",
                  id: 0,
                  picId: 0,
                  img1v1Id: 0,
                  briefDesc: "",
                  picUrl:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  img1v1Url:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  albumSize: 0,
                  alias: [],
                  trans: "",
                  musicSize: 0
                }
              ],
              album: {
                name: "[DJ节目]郑老师的话的DJ节目 第51期",
                id: 0,
                type: null,
                size: 0,
                picId: 109951163745950780,
                blurPicUrl:
                  "http://p2.music.126.net/HxtoQ9ltTwM8mhq0XkK0gg==/109951163745950792.jpg",
                companyId: 0,
                pic: 109951163745950780,
                picUrl:
                  "http://p2.music.126.net/HxtoQ9ltTwM8mhq0XkK0gg==/109951163745950792.jpg",
                publishTime: 0,
                description: "",
                tags: "",
                company: null,
                briefDesc: "",
                artist: {
                  name: "郑老师的话",
                  id: 0,
                  picId: 0,
                  img1v1Id: 0,
                  briefDesc: "",
                  picUrl:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  img1v1Url:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  albumSize: 0,
                  alias: [],
                  trans: "",
                  musicSize: 0
                },
                songs: [],
                alias: [],
                status: 0,
                copyrightId: 0,
                commentThreadId: "R_AL_3_0",
                artists: [
                  {
                    name: "郑老师的话",
                    id: 0,
                    picId: 0,
                    img1v1Id: 0,
                    briefDesc: "",
                    picUrl:
                      "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    img1v1Url:
                      "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    albumSize: 0,
                    alias: [],
                    trans: "",
                    musicSize: 0
                  }
                ],
                subType: null,
                transName: null,
                picId_str: "109951163745950792"
              },
              starred: false,
              popularity: 15,
              score: 15,
              starredNum: 0,
              duration: 189809,
              playedNum: 0,
              dayPlays: 0,
              hearTime: 0,
              ringtone: null,
              crbt: null,
              audition: null,
              copyFrom: "",
              commentThreadId: "R_SO_4_1335399039",
              rtUrl: null,
              ftype: 0,
              rtUrls: [],
              copyright: 0,
              transName: null,
              sign: null,
              rtype: 0,
              rurl: null,
              mvid: 0,
              bMusic: {
                name: null,
                id: 3553131613,
                size: 2282729,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 96000,
                playTime: 189809,
                volumeDelta: 33313
              },
              mp3Url: null,
              hMusic: null,
              mMusic: null,
              lMusic: {
                name: null,
                id: 3553131613,
                size: 2282729,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 96000,
                playTime: 189809,
                volumeDelta: 33313
              }
            },
            songs: null,
            dj: {
              defaultAvatar: false,
              province: 110000,
              authStatus: 0,
              followed: false,
              avatarUrl:
                "http://p1.music.126.net/tufo_u4QdbougVQwFYRPTg==/2880720468934406.jpg",
              accountStatus: 0,
              gender: 1,
              city: 110101,
              birthday: -2209017600000,
              userId: 80746115,
              userType: 0,
              nickname: "郑老师的话",
              signature:
                "郑老师，中国传媒大学播音系博士，“罗辑思维”罗振宇老师的声音训练师，订阅号“郑老师的话”万人语言表达社群创建者。",
              description: "",
              detailDescription: "",
              avatarImgId: 2880720468934406,
              backgroundImgId: 2002210674180198,
              backgroundUrl:
                "http://p1.music.126.net/i0qi6mibX8gq2SaLF1bYbA==/2002210674180198.jpg",
              authority: 0,
              mutual: false,
              expertTags: null,
              experts: null,
              djStatus: 10,
              vipType: 0,
              remarkName: null,
              backgroundImgIdStr: "2002210674180198",
              avatarImgIdStr: "2880720468934406",
              brand: "郑老师的话"
            },
            blurCoverUrl:
              "http://music.163.com/api/dj/img/blur/109951163745950792",
            radio: {
              id: 2297004,
              dj: null,
              name: "郑老师的话",
              picUrl:
                "http://p2.music.126.net/aYmFv3hYC9N_ZtqnaSV-ZQ==/109951163653916525.jpg",
              desc:
                "郑老师，中国传媒大学播音系博士，“罗辑思维”罗振宇老师的声音训练师，万人语言表达社群创建者。\n\n这里是朗读朗诵、语言表达、播音主持等有声语言艺术爱好者汇聚的平台，在这里郑老师每天会为大家带来一篇朗读作品，作品后半部分为配乐供大家配乐朗读~我们希望用朗读为您开启美好的一天。欢迎大家点击五角星订阅电台哦～",
              subCount: 1522,
              programCount: 53,
              createTime: 1437145356017,
              categoryId: 6,
              category: "美文读物",
              radioFeeType: 0,
              feeScope: 0,
              buyed: false,
              videos: null,
              finished: false,
              underShelf: false,
              purchaseCount: 0,
              price: 0,
              originalPrice: 0,
              discountPrice: null,
              lastProgramCreateTime: 1548247931358,
              lastProgramName: null,
              lastProgramId: 2059171362,
              picId: 109951163653916530,
              rcmdText: "用一篇美文扫清一周的疲惫",
              hightQuality: false,
              whiteList: false,
              composeVideo: false
            },
            subscribedCount: 0,
            reward: false,
            mainTrackId: 1335399039,
            serialNum: 50,
            listenerCount: 14270,
            name: "今日朗读：杜拉斯《情人》",
            id: 2058595982,
            createTime: 1545991200000,
            description:
              '情人\n作者：玛格丽特·杜拉斯（法）\n朗读：郑老师\n配乐：speak softly love\n\n他给她打来电话:"是我。"\n她一听那声音，就听出是他。\n他说："我仅仅想听听你的声音。"\n她说："是我，你好。"',
            userId: 80746115,
            coverUrl:
              "http://p2.music.126.net/HxtoQ9ltTwM8mhq0XkK0gg==/109951163745950792.jpg",
            commentThreadId: "A_DJ_1_2058595982",
            channels: ["有声读物"],
            titbits: null,
            titbitImages: null,
            pubStatus: 1,
            trackCount: 0,
            bdAuditStatus: -1,
            programFeeType: 0,
            buyed: false,
            programDesc: null,
            h5Links: [],
            coverId: 109951163745950780,
            adjustedPlayCount: 14270,
            canReward: false,
            auditStatus: 0,
            publish: true,
            duration: 189809,
            isPublish: true
          },
          alg: "featured"
        },
        {
          id: 2059151822,
          type: 1,
          name: "一曲相思",
          copywriter: "编辑推荐：一曲相思入江水与山河",
          picUrl:
            "http://p2.music.126.net/525D3jGde2DnxTIw3asLag==/109951163198902068.jpg",
          canDislike: false,
          program: {
            mainSong: {
              name: "一曲相思",
              id: 1341527133,
              position: 0,
              alias: [],
              status: 0,
              fee: 0,
              copyrightId: 0,
              disc: "",
              no: 0,
              artists: [
                {
                  name: "钟金琪",
                  id: 0,
                  picId: 0,
                  img1v1Id: 0,
                  briefDesc: "",
                  picUrl:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  img1v1Url:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  albumSize: 0,
                  alias: [],
                  trans: "",
                  musicSize: 0
                }
              ],
              album: {
                name: "[DJ节目]钟金琪的DJ节目 第26期",
                id: 0,
                type: null,
                size: 0,
                picId: 109951163198902060,
                blurPicUrl:
                  "http://p2.music.126.net/525D3jGde2DnxTIw3asLag==/109951163198902068.jpg",
                companyId: 0,
                pic: 109951163198902060,
                picUrl:
                  "http://p2.music.126.net/525D3jGde2DnxTIw3asLag==/109951163198902068.jpg",
                publishTime: 0,
                description: "",
                tags: "",
                company: null,
                briefDesc: "",
                artist: {
                  name: "钟金琪",
                  id: 0,
                  picId: 0,
                  img1v1Id: 0,
                  briefDesc: "",
                  picUrl:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  img1v1Url:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  albumSize: 0,
                  alias: [],
                  trans: "",
                  musicSize: 0
                },
                songs: [],
                alias: [],
                status: 0,
                copyrightId: 0,
                commentThreadId: "R_AL_3_0",
                artists: [
                  {
                    name: "钟金琪",
                    id: 0,
                    picId: 0,
                    img1v1Id: 0,
                    briefDesc: "",
                    picUrl:
                      "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    img1v1Url:
                      "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    albumSize: 0,
                    alias: [],
                    trans: "",
                    musicSize: 0
                  }
                ],
                subType: null,
                transName: null,
                picId_str: "109951163198902068"
              },
              starred: false,
              popularity: 0,
              score: 0,
              starredNum: 0,
              duration: 96230,
              playedNum: 0,
              dayPlays: 0,
              hearTime: 0,
              ringtone: null,
              crbt: null,
              audition: null,
              copyFrom: "",
              commentThreadId: "R_SO_4_1341527133",
              rtUrl: null,
              ftype: 0,
              rtUrls: [],
              copyright: 0,
              transName: null,
              sign: null,
              rtype: 0,
              rurl: null,
              mvid: 0,
              bMusic: {
                name: null,
                id: 3610310141,
                size: 1541895,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 128000,
                playTime: 96230,
                volumeDelta: -23100
              },
              mp3Url: null,
              hMusic: {
                name: null,
                id: 3610310139,
                size: 3854672,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 320000,
                playTime: 96230,
                volumeDelta: -27500
              },
              mMusic: {
                name: null,
                id: 3610310140,
                size: 2312821,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 192000,
                playTime: 96230,
                volumeDelta: -24800
              },
              lMusic: {
                name: null,
                id: 3610310141,
                size: 1541895,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 128000,
                playTime: 96230,
                volumeDelta: -23100
              }
            },
            songs: null,
            dj: {
              defaultAvatar: false,
              province: 510000,
              authStatus: 1,
              followed: false,
              avatarUrl:
                "http://p1.music.126.net/-oC-O6LECJjZmjyysCRKuQ==/109951163396749994.jpg",
              accountStatus: 0,
              gender: 2,
              city: 510100,
              birthday: 1448035200000,
              userId: 269578232,
              userType: 4,
              nickname: "钟金琪",
              signature: "一个爱唱歌的18线网瘾少女-",
              description: "",
              detailDescription: "",
              avatarImgId: 109951163396750000,
              backgroundImgId: 109951163095651040,
              backgroundUrl:
                "http://p1.music.126.net/6vBHhxQCslM55EvydjhO0A==/109951163095651038.jpg",
              authority: 0,
              mutual: false,
              expertTags: null,
              experts: {
                "1": "音乐原创视频达人"
              },
              djStatus: 10,
              vipType: 0,
              remarkName: null,
              backgroundImgIdStr: "109951163095651038",
              avatarImgIdStr: "109951163396749994",
              avatarImgId_str: "109951163396749994",
              brand: "难道吉他恋爱了-钟金琪"
            },
            blurCoverUrl:
              "http://music.163.com/api/dj/img/blur/109951163198902068",
            radio: {
              id: 342007056,
              dj: null,
              name: "难道吉他恋爱了-钟金琪",
              picUrl:
                "http://p2.music.126.net/525D3jGde2DnxTIw3asLag==/109951163198902068.jpg",
              desc: "来自一个18线网瘾少女的翻唱 喜欢林JJ",
              subCount: 3344,
              programCount: 25,
              createTime: 1476173792127,
              categoryId: 2001,
              category: "创作|翻唱",
              radioFeeType: 0,
              feeScope: 0,
              buyed: false,
              videos: null,
              finished: false,
              underShelf: false,
              purchaseCount: 0,
              price: 0,
              originalPrice: 0,
              discountPrice: null,
              lastProgramCreateTime: 1548209420585,
              lastProgramName: null,
              lastProgramId: 2059151823,
              picId: 109951163198902060,
              rcmdText: "一个爱唱歌的林俊杰女票",
              hightQuality: false,
              whiteList: false,
              composeVideo: false
            },
            subscribedCount: 0,
            reward: false,
            mainTrackId: 1341527133,
            serialNum: 24,
            listenerCount: 7839,
            name: "一曲相思",
            id: 2059151822,
            createTime: 1548209418901,
            description:
              "这人间袅袅炊烟\n\n和风花雪月浪漫\n\n痴情人多半贪恋\n\n爱恨情仇都好看\n\n又让你痛不欲生\n\n又让你趁醉装疯\n\n终有天脱胎换骨\n\n直到哭着笑才懂\n\n欲问青天这人生有几何\n\n怕这去日苦多\n\n往事讨一杯相思喝\n\n倘若这回还像曾经执着\n\n心执念你一个\n\n那我可能是多情了\n\n浊酒一杯余生不悲不喜\n\n何惧爱恨别离\n\n一路纵马去斟酌\n\n一曲相思入江水与山河\n\n在油伞下走过\n\n悠然入梦却恍若昨",
            userId: 269578232,
            coverUrl:
              "http://p2.music.126.net/525D3jGde2DnxTIw3asLag==/109951163198902068.jpg",
            commentThreadId: "A_DJ_1_2059151822",
            channels: [],
            titbits: null,
            titbitImages: null,
            pubStatus: 1,
            trackCount: 0,
            bdAuditStatus: 2,
            programFeeType: 0,
            buyed: false,
            programDesc: null,
            h5Links: [],
            coverId: 109951163198902060,
            adjustedPlayCount: 7839,
            canReward: false,
            auditStatus: 0,
            publish: true,
            duration: 96230,
            isPublish: true
          },
          alg: "featured"
        },
        {
          id: 2058841006,
          type: 1,
          name: "ωοΙνеs",
          copywriter: "热门电台节目推荐",
          picUrl:
            "http://p2.music.126.net/H3eu2gtSqCGMssuVbkuZLQ==/19167786207654296.jpg",
          canDislike: true,
          program: {
            mainSong: {
              name: "ωοΙνеs",
              id: 1337742126,
              position: 0,
              alias: [],
              status: 0,
              fee: 0,
              copyrightId: 0,
              disc: "",
              no: 0,
              artists: [
                {
                  name: "KristianIKostov",
                  id: 0,
                  picId: 0,
                  img1v1Id: 0,
                  briefDesc: "",
                  picUrl:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  img1v1Url:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  albumSize: 0,
                  alias: [],
                  trans: "",
                  musicSize: 0
                }
              ],
              album: {
                name: "[DJ节目]KristianIKostov的DJ节目 第2期",
                id: 0,
                type: null,
                size: 0,
                picId: 109951163776845230,
                blurPicUrl:
                  "http://p2.music.126.net/jRkR3fsBv8ntFspOizZpPw==/109951163776845239.jpg",
                companyId: 0,
                pic: 109951163776845230,
                picUrl:
                  "http://p2.music.126.net/jRkR3fsBv8ntFspOizZpPw==/109951163776845239.jpg",
                publishTime: 0,
                description: "",
                tags: "",
                company: null,
                briefDesc: "",
                artist: {
                  name: "KristianIKostov",
                  id: 0,
                  picId: 0,
                  img1v1Id: 0,
                  briefDesc: "",
                  picUrl:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  img1v1Url:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  albumSize: 0,
                  alias: [],
                  trans: "",
                  musicSize: 0
                },
                songs: [],
                alias: [],
                status: 0,
                copyrightId: 0,
                commentThreadId: "R_AL_3_0",
                artists: [
                  {
                    name: "KristianIKostov",
                    id: 0,
                    picId: 0,
                    img1v1Id: 0,
                    briefDesc: "",
                    picUrl:
                      "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    img1v1Url:
                      "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    albumSize: 0,
                    alias: [],
                    trans: "",
                    musicSize: 0
                  }
                ],
                subType: null,
                transName: null,
                picId_str: "109951163776845239"
              },
              starred: false,
              popularity: 40,
              score: 40,
              starredNum: 0,
              duration: 170083,
              playedNum: 0,
              dayPlays: 0,
              hearTime: 0,
              ringtone: null,
              crbt: null,
              audition: null,
              copyFrom: "",
              commentThreadId: "R_SO_4_1337742126",
              rtUrl: null,
              ftype: 0,
              rtUrls: [],
              copyright: 0,
              transName: null,
              sign: null,
              rtype: 0,
              rurl: null,
              mvid: 0,
              bMusic: {
                name: null,
                id: 3569822366,
                size: 2721794,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 128000,
                playTime: 170083,
                volumeDelta: 0
              },
              mp3Url: null,
              hMusic: null,
              mMusic: null,
              lMusic: {
                name: null,
                id: 3569822366,
                size: 2721794,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 128000,
                playTime: 170083,
                volumeDelta: 0
              }
            },
            songs: null,
            dj: {
              defaultAvatar: false,
              province: 1000000,
              authStatus: 0,
              followed: false,
              avatarUrl:
                "http://p1.music.126.net/zJA8FtEqu0yp2WiFBlRKzg==/109951163802931704.jpg",
              accountStatus: 0,
              gender: 0,
              city: 1002000,
              birthday: -2209017600000,
              userId: 1568487690,
              userType: 0,
              nickname: "KristianIKostov",
              signature:
                "小K认证：是一个沙雕的小K电台主哈哈哈哈哈哈哈\n人在家中坐 K在床上躺\nover就这样🌚",
              description: "",
              detailDescription: "",
              avatarImgId: 109951163802931710,
              backgroundImgId: 109951163808950080,
              backgroundUrl:
                "http://p1.music.126.net/kfimJWsBGtLMJamoAEnT-w==/109951163808950084.jpg",
              authority: 0,
              mutual: false,
              expertTags: null,
              experts: null,
              djStatus: 10,
              vipType: 0,
              remarkName: null,
              backgroundImgIdStr: "109951163808950084",
              avatarImgIdStr: "109951163802931704",
              avatarImgId_str: "109951163802931704",
              brand: "KristianKostov"
            },
            blurCoverUrl:
              "http://music.163.com/api/dj/img/blur/19167786207654296",
            radio: {
              id: 792539501,
              dj: null,
              name: "KristianKostov",
              picUrl:
                "http://p2.music.126.net/5Y23VVSV6Mlv6jCV8cXxuQ==/19113910137899780.jpg",
              desc:
                "①有关小K 谢谢订阅 喜欢和支持！阿里嘎多！\n②ps:高三狗一枚 最近半年可能会比较忙【掩面】过了19年六月就好了【鞠躬】今天也会努力更新的XD\n③居然冲上了节目排行榜和电台排行榜还有主播排行榜啊啊啊啊啊承蒙喜爱受宠若惊emm\n2019继续抱着小K冲鸭！\n④我们都口号是！人在家中坐 K在床上躺 人在家中坐 K从天上来！\n【傻子电台主自娱自乐瞎编的看看就好🌚🌚】\n⑤关于节目名字 为了省去不必要的麻烦 节目的名字都是用俄文里和英语长的像的俄文当做名字 大家仔细看一下就能看出什么歌啦 wolves是电台里最早的一期节目 进入电台以后往下翻找到ωοΙνеs就行 带来不便 请多包涵 谢谢！",
              subCount: 8595,
              programCount: 28,
              createTime: 1546755432513,
              categoryId: 2001,
              category: "创作|翻唱",
              radioFeeType: 0,
              feeScope: 0,
              buyed: false,
              videos: null,
              finished: false,
              underShelf: false,
              purchaseCount: 0,
              price: 0,
              originalPrice: 0,
              discountPrice: null,
              lastProgramCreateTime: 1548098128002,
              lastProgramName: null,
              lastProgramId: 2059110334,
              picId: 19113910137899780,
              rcmdText: null,
              hightQuality: false,
              whiteList: false,
              composeVideo: false
            },
            subscribedCount: 0,
            reward: false,
            mainTrackId: 1337742126,
            serialNum: 1,
            listenerCount: 947984,
            name: "ωοΙνеs",
            id: 2058841006,
            createTime: 1546755852772,
            description: "低调赏乐",
            userId: 1568487690,
            coverUrl:
              "http://p2.music.126.net/H3eu2gtSqCGMssuVbkuZLQ==/19167786207654296.jpg",
            commentThreadId: "A_DJ_1_2058841006",
            channels: [],
            titbits: null,
            titbitImages: null,
            pubStatus: 1,
            trackCount: 0,
            bdAuditStatus: 2,
            programFeeType: 0,
            buyed: false,
            programDesc: null,
            h5Links: [],
            coverId: 19167786207654296,
            adjustedPlayCount: 947984,
            canReward: false,
            auditStatus: 0,
            publish: true,
            duration: 170083,
            isPublish: true
          },
          alg: "hot_server"
        },
        {
          id: 2058756276,
          type: 1,
          name: "新的开始",
          copywriter: "热门电台节目推荐",
          picUrl:
            "http://p2.music.126.net/JtbPAukMSMumdcXlir2tqA==/19061133579754519.jpg",
          canDislike: true,
          program: {
            mainSong: {
              name: "新的开始",
              id: 1336688370,
              position: 0,
              alias: [],
              status: 0,
              fee: 0,
              copyrightId: 0,
              disc: "",
              no: 0,
              artists: [
                {
                  name: "愉先生啊",
                  id: 0,
                  picId: 0,
                  img1v1Id: 0,
                  briefDesc: "",
                  picUrl:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  img1v1Url:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  albumSize: 0,
                  alias: [],
                  trans: "",
                  musicSize: 0
                }
              ],
              album: {
                name: "[DJ节目]愉先生啊的DJ节目 第32期",
                id: 0,
                type: null,
                size: 0,
                picId: 19061133579754520,
                blurPicUrl:
                  "http://p2.music.126.net/JtbPAukMSMumdcXlir2tqA==/19061133579754519.jpg",
                companyId: 0,
                pic: 19061133579754520,
                picUrl:
                  "http://p2.music.126.net/JtbPAukMSMumdcXlir2tqA==/19061133579754519.jpg",
                publishTime: 0,
                description: "",
                tags: "",
                company: null,
                briefDesc: "",
                artist: {
                  name: "愉先生啊",
                  id: 0,
                  picId: 0,
                  img1v1Id: 0,
                  briefDesc: "",
                  picUrl:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  img1v1Url:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  albumSize: 0,
                  alias: [],
                  trans: "",
                  musicSize: 0
                },
                songs: [],
                alias: [],
                status: 0,
                copyrightId: 0,
                commentThreadId: "R_AL_3_0",
                artists: [
                  {
                    name: "愉先生啊",
                    id: 0,
                    picId: 0,
                    img1v1Id: 0,
                    briefDesc: "",
                    picUrl:
                      "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    img1v1Url:
                      "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    albumSize: 0,
                    alias: [],
                    trans: "",
                    musicSize: 0
                  }
                ],
                subType: null,
                transName: null,
                picId_str: "19061133579754519"
              },
              starred: false,
              popularity: 20,
              score: 20,
              starredNum: 0,
              duration: 206184,
              playedNum: 0,
              dayPlays: 0,
              hearTime: 0,
              ringtone: null,
              crbt: null,
              audition: null,
              copyFrom: "",
              commentThreadId: "R_SO_4_1336688370",
              rtUrl: null,
              ftype: 0,
              rtUrls: [],
              copyright: 0,
              transName: null,
              sign: null,
              rtype: 0,
              rurl: null,
              mvid: 0,
              bMusic: {
                name: null,
                id: 3560191945,
                size: 3299831,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 128000,
                playTime: 206184,
                volumeDelta: 28501
              },
              mp3Url: null,
              hMusic: {
                name: null,
                id: 3560191943,
                size: 8249513,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 320000,
                playTime: 206184,
                volumeDelta: 25000
              },
              mMusic: {
                name: null,
                id: 3560191944,
                size: 4949725,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 192000,
                playTime: 206184,
                volumeDelta: 27400
              },
              lMusic: {
                name: null,
                id: 3560191945,
                size: 3299831,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 128000,
                playTime: 206184,
                volumeDelta: 28501
              }
            },
            songs: null,
            dj: {
              defaultAvatar: false,
              province: 500000,
              authStatus: 0,
              followed: false,
              avatarUrl:
                "http://p1.music.126.net/9qjC-6x3kySLYgXH6c41Qg==/109951163810203520.jpg",
              accountStatus: 0,
              gender: 1,
              city: 500101,
              birthday: -2209017600000,
              userId: 418107599,
              userType: 0,
              nickname: "愉先生啊",
              signature: "孤独是最本质最昂贵的自由",
              description: "",
              detailDescription: "",
              avatarImgId: 109951163810203520,
              backgroundImgId: 109951163798457710,
              backgroundUrl:
                "http://p1.music.126.net/hdodId3_x2HIIQTT037GYA==/109951163798457708.jpg",
              authority: 0,
              mutual: false,
              expertTags: null,
              experts: null,
              djStatus: 10,
              vipType: 11,
              remarkName: null,
              backgroundImgIdStr: "109951163798457708",
              avatarImgIdStr: "109951163810203520",
              avatarImgId_str: "109951163810203520",
              brand: "愉先生"
            },
            blurCoverUrl:
              "http://music.163.com/api/dj/img/blur/19061133579754519",
            radio: {
              id: 527305630,
              dj: null,
              name: "愉先生",
              picUrl:
                "http://p2.music.126.net/n6nQg5o3xMlADGQVZS-8dQ==/18740076186056612.jpg",
              desc: "你一个人听歌 当然孤独",
              subCount: 8873,
              programCount: 35,
              createTime: 1529039451294,
              categoryId: 2001,
              category: "创作|翻唱",
              radioFeeType: 0,
              feeScope: 0,
              buyed: false,
              videos: null,
              finished: false,
              underShelf: false,
              purchaseCount: 0,
              price: 0,
              originalPrice: 0,
              discountPrice: null,
              lastProgramCreateTime: 1548151100823,
              lastProgramName: null,
              lastProgramId: 2059148496,
              picId: 18740076186056612,
              rcmdText: null,
              hightQuality: false,
              whiteList: false,
              composeVideo: false
            },
            subscribedCount: 0,
            reward: false,
            mainTrackId: 1336688370,
            serialNum: 27,
            listenerCount: 528484,
            name: "新的开始",
            id: 2058756276,
            createTime: 1546336404412,
            description: "2019",
            userId: 418107599,
            coverUrl:
              "http://p2.music.126.net/JtbPAukMSMumdcXlir2tqA==/19061133579754519.jpg",
            commentThreadId: "A_DJ_1_2058756276",
            channels: [],
            titbits: null,
            titbitImages: null,
            pubStatus: 1,
            trackCount: 0,
            bdAuditStatus: 2,
            programFeeType: 0,
            buyed: false,
            programDesc: null,
            h5Links: [],
            coverId: 19061133579754520,
            adjustedPlayCount: 528484,
            canReward: false,
            auditStatus: 0,
            publish: true,
            duration: 206184,
            isPublish: true
          },
          alg: "hot_server"
        },
        {
          id: 2059138281,
          type: 1,
          name: "微信新功能：强制提醒，才是爱一个人最好的表现。",
          copywriter: "热门电台节目推荐",
          picUrl:
            "http://p2.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg",
          canDislike: true,
          program: {
            mainSong: {
              name: "微信新功能：强制提醒，才是爱一个人最好的表现。",
              id: 1341326545,
              position: 0,
              alias: [],
              status: 0,
              fee: 0,
              copyrightId: 0,
              disc: "",
              no: 0,
              artists: [
                {
                  name: "蕊希Erin",
                  id: 0,
                  picId: 0,
                  img1v1Id: 0,
                  briefDesc: "",
                  picUrl:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  img1v1Url:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  albumSize: 0,
                  alias: [],
                  trans: "",
                  musicSize: 0
                }
              ],
              album: {
                name: "[DJ节目]蕊希Erin的DJ节目 第416期",
                id: 0,
                type: null,
                size: 0,
                picId: 1418370012865049,
                blurPicUrl:
                  "http://p2.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg",
                companyId: 0,
                pic: 1418370012865049,
                picUrl:
                  "http://p2.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg",
                publishTime: 0,
                description: "",
                tags: "",
                company: null,
                briefDesc: "",
                artist: {
                  name: "蕊希Erin",
                  id: 0,
                  picId: 0,
                  img1v1Id: 0,
                  briefDesc: "",
                  picUrl:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  img1v1Url:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  albumSize: 0,
                  alias: [],
                  trans: "",
                  musicSize: 0
                },
                songs: [],
                alias: [],
                status: 0,
                copyrightId: 0,
                commentThreadId: "R_AL_3_0",
                artists: [
                  {
                    name: "蕊希Erin",
                    id: 0,
                    picId: 0,
                    img1v1Id: 0,
                    briefDesc: "",
                    picUrl:
                      "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    img1v1Url:
                      "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    albumSize: 0,
                    alias: [],
                    trans: "",
                    musicSize: 0
                  }
                ],
                subType: null,
                transName: null
              },
              starred: false,
              popularity: 20,
              score: 20,
              starredNum: 0,
              duration: 612801,
              playedNum: 0,
              dayPlays: 0,
              hearTime: 0,
              ringtone: null,
              crbt: null,
              audition: null,
              copyFrom: "",
              commentThreadId: "R_SO_4_1341326545",
              rtUrl: null,
              ftype: 0,
              rtUrls: [],
              copyright: 0,
              transName: null,
              sign: null,
              rtype: 0,
              rurl: null,
              mvid: 0,
              bMusic: {
                name: null,
                id: 3606413898,
                size: 9820413,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 128000,
                playTime: 612801,
                volumeDelta: 1279
              },
              mp3Url: null,
              hMusic: null,
              mMusic: {
                name: null,
                id: 3606413897,
                size: 14730597,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 192000,
                playTime: 612801,
                volumeDelta: 857
              },
              lMusic: {
                name: null,
                id: 3606413898,
                size: 9820413,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 128000,
                playTime: 612801,
                volumeDelta: 1279
              }
            },
            songs: null,
            dj: {
              defaultAvatar: false,
              province: 110000,
              authStatus: 1,
              followed: false,
              avatarUrl:
                "http://p1.music.126.net/eBJCpuKo9X7fi1FADYexlw==/19215065207433135.jpg",
              accountStatus: 0,
              gender: 2,
              city: 110101,
              birthday: 742147200000,
              userId: 49080266,
              userType: 1,
              nickname: "蕊希Erin",
              signature: "",
              description: "中央人民广播电台主持人",
              detailDescription: "中央人民广播电台主持人",
              avatarImgId: 19215065207433136,
              backgroundImgId: 2002210674180198,
              backgroundUrl:
                "http://p1.music.126.net/i0qi6mibX8gq2SaLF1bYbA==/2002210674180198.jpg",
              authority: 3,
              mutual: false,
              expertTags: null,
              experts: null,
              djStatus: 10,
              vipType: 0,
              remarkName: null,
              backgroundImgIdStr: "2002210674180198",
              avatarImgIdStr: "19215065207433135",
              avatarImgId_str: "19215065207433135",
              brand: "蕊希电台"
            },
            blurCoverUrl:
              "http://music.163.com/api/dj/img/blur/1418370012865049",
            radio: {
              id: 618058,
              dj: null,
              name: "蕊希电台",
              picUrl:
                "http://p2.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg",
              desc: "听她的声音，会上瘾",
              subCount: 2643242,
              programCount: 416,
              createTime: 1420378863977,
              categoryId: 3,
              category: "情感调频",
              radioFeeType: 0,
              feeScope: 0,
              buyed: false,
              videos: null,
              finished: false,
              underShelf: false,
              purchaseCount: 0,
              price: 0,
              originalPrice: 0,
              discountPrice: null,
              lastProgramCreateTime: 1548209602658,
              lastProgramName: null,
              lastProgramId: 2059159165,
              picId: 1418370012865049,
              rcmdText: "给深夜归家的人慰藉与感动",
              hightQuality: false,
              whiteList: false,
              composeVideo: false
            },
            subscribedCount: 0,
            reward: false,
            mainTrackId: 1341326545,
            serialNum: 415,
            listenerCount: 632153,
            name: "微信新功能：强制提醒，才是爱一个人最好的表现。",
            id: 2059138281,
            createTime: 1548123720680,
            description: "听她的声音，会上瘾。",
            userId: 49080266,
            coverUrl:
              "http://p2.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg",
            commentThreadId: "A_DJ_1_2059138281",
            channels: ["情感驿站"],
            titbits: null,
            titbitImages: null,
            pubStatus: 1,
            trackCount: 0,
            bdAuditStatus: -1,
            programFeeType: 0,
            buyed: false,
            programDesc: null,
            h5Links: [],
            coverId: 1418370012865049,
            adjustedPlayCount: 632153,
            canReward: false,
            auditStatus: 0,
            publish: true,
            duration: 612801,
            isPublish: true
          },
          alg: "hot_server"
        },
        {
          id: 2058771295,
          type: 1,
          name: "有可能的夜晚 隔壁老樊",
          copywriter: "热门电台节目推荐",
          picUrl:
            "http://p2.music.126.net/6EDdUgLAV8GL2fia6l7V9w==/19200771556485728.jpg",
          canDislike: true,
          program: {
            mainSong: {
              name: "有可能的夜晚 隔壁老樊",
              id: 1336929437,
              position: 0,
              alias: [],
              status: 0,
              fee: 0,
              copyrightId: 0,
              disc: "",
              no: 0,
              artists: [
                {
                  name: "Deathbear-",
                  id: 0,
                  picId: 0,
                  img1v1Id: 0,
                  briefDesc: "",
                  picUrl:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  img1v1Url:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  albumSize: 0,
                  alias: [],
                  trans: "",
                  musicSize: 0
                }
              ],
              album: {
                name: "[DJ节目]Deathbear-的DJ节目 第64期",
                id: 0,
                type: null,
                size: 0,
                picId: 19200771556485730,
                blurPicUrl:
                  "http://p2.music.126.net/6EDdUgLAV8GL2fia6l7V9w==/19200771556485728.jpg",
                companyId: 0,
                pic: 19200771556485730,
                picUrl:
                  "http://p2.music.126.net/6EDdUgLAV8GL2fia6l7V9w==/19200771556485728.jpg",
                publishTime: 0,
                description: "",
                tags: "",
                company: null,
                briefDesc: "",
                artist: {
                  name: "Deathbear-",
                  id: 0,
                  picId: 0,
                  img1v1Id: 0,
                  briefDesc: "",
                  picUrl:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  img1v1Url:
                    "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                  albumSize: 0,
                  alias: [],
                  trans: "",
                  musicSize: 0
                },
                songs: [],
                alias: [],
                status: 0,
                copyrightId: 0,
                commentThreadId: "R_AL_3_0",
                artists: [
                  {
                    name: "Deathbear-",
                    id: 0,
                    picId: 0,
                    img1v1Id: 0,
                    briefDesc: "",
                    picUrl:
                      "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    img1v1Url:
                      "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    albumSize: 0,
                    alias: [],
                    trans: "",
                    musicSize: 0
                  }
                ],
                subType: null,
                transName: null,
                picId_str: "19200771556485728"
              },
              starred: false,
              popularity: 25,
              score: 25,
              starredNum: 0,
              duration: 26775,
              playedNum: 0,
              dayPlays: 0,
              hearTime: 0,
              ringtone: null,
              crbt: null,
              audition: null,
              copyFrom: "",
              commentThreadId: "R_SO_4_1336929437",
              rtUrl: null,
              ftype: 0,
              rtUrls: [],
              copyright: 0,
              transName: null,
              sign: null,
              rtype: 0,
              rurl: null,
              mvid: 0,
              bMusic: {
                name: null,
                id: 3562465774,
                size: 428870,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 128000,
                playTime: 26775,
                volumeDelta: -23500
              },
              mp3Url: null,
              hMusic: null,
              mMusic: null,
              lMusic: {
                name: null,
                id: 3562465774,
                size: 428870,
                extension: "mp3",
                sr: 44100,
                dfsId: 0,
                bitrate: 128000,
                playTime: 26775,
                volumeDelta: -23500
              }
            },
            songs: null,
            dj: {
              defaultAvatar: false,
              province: 1000000,
              authStatus: 0,
              followed: false,
              avatarUrl:
                "http://p1.music.126.net/ZclT7EkN623bC_k2tKO49Q==/109951163807745745.jpg",
              accountStatus: 0,
              gender: 2,
              city: 1001300,
              birthday: 985081591000,
              userId: 396211107,
              userType: 0,
              nickname: "Deathbear-",
              signature: "Pursuit of freedom.",
              description: "",
              detailDescription: "",
              avatarImgId: 109951163807745740,
              backgroundImgId: 109951163807742350,
              backgroundUrl:
                "http://p1.music.126.net/iTif3ydkktTZ8qjoe29pKw==/109951163807742359.jpg",
              authority: 0,
              mutual: false,
              expertTags: null,
              experts: null,
              djStatus: 10,
              vipType: 0,
              remarkName: null,
              backgroundImgIdStr: "109951163807742359",
              avatarImgIdStr: "109951163807745745",
              avatarImgId_str: "109951163807745745",
              brand: "再见 你好 隔壁老樊"
            },
            blurCoverUrl:
              "http://music.163.com/api/dj/img/blur/19200771556485728",
            radio: {
              id: 527559682,
              dj: null,
              name: "再见 你好 隔壁老樊",
              picUrl:
                "http://p2.music.126.net/YGH8HSimRCf117KjVsY_Ww==/18869818556529297.jpg",
              desc: "关于老樊的电台小屋",
              subCount: 61791,
              programCount: 71,
              createTime: 1532928826439,
              categoryId: 2001,
              category: "创作|翻唱",
              radioFeeType: 0,
              feeScope: 0,
              buyed: false,
              videos: null,
              finished: false,
              underShelf: false,
              purchaseCount: 0,
              price: 0,
              originalPrice: 0,
              discountPrice: null,
              lastProgramCreateTime: 1548003188170,
              lastProgramName: null,
              lastProgramId: 2059119546,
              picId: 18869818556529296,
              rcmdText: "一把吉他，听他用嗓音为你讲故事",
              hightQuality: false,
              whiteList: false,
              composeVideo: false
            },
            subscribedCount: 0,
            reward: false,
            mainTrackId: 1336929437,
            serialNum: 62,
            listenerCount: 907908,
            name: "有可能的夜晚 隔壁老樊",
            id: 2058771295,
            createTime: 1546445861541,
            description: "抖音版",
            userId: 396211107,
            coverUrl:
              "http://p2.music.126.net/6EDdUgLAV8GL2fia6l7V9w==/19200771556485728.jpg",
            commentThreadId: "A_DJ_1_2058771295",
            channels: [],
            titbits: null,
            titbitImages: null,
            pubStatus: 1,
            trackCount: 0,
            bdAuditStatus: 1,
            programFeeType: 0,
            buyed: false,
            programDesc: null,
            h5Links: [],
            coverId: 19200771556485730,
            adjustedPlayCount: 907908,
            canReward: false,
            auditStatus: 0,
            publish: true,
            duration: 26775,
            isPublish: true
          },
          alg: "hot_server"
        }
      ]
    };
  }
};
</script>

<style lang='stylus' scoped>
.radio {
  width: 100%;
  height: 7.9rem;

  .radio-nav {
    width: 7.2rem;
    height: 0.9rem;
    text-indent: 0.23rem;
    color: rgba(80, 80, 80, 1);
    font-size: 0.32rem;
    line-height: 0.9rem;
    text-align: left;
  }

  .radio-items {
    width: 2.36rem;
    height: 3.38rem;

    ul {
      list-style: none;
      width: 7.2rem;
      margin-left: 0.1rem;

      li {
        float: left;
        margin-left: 0.04rem;
      }
    }

    .radio-item-img {
      width: 2.36rem;
      height: 2.36rem;
      background-color: rgba(238, 238, 238, 1);
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .radio-item-name {
        position: absolute;
        bottom: 0;
        left 0.1rem
        width: 2.36rem;
        height: 0.45rem;
        color: #fff;
        font-size: 0.25rem;
        text-align: left;
      }
    }

    .radio-item-introduce {
      width: 2.36rem;
      height: 1rem;
      overflow: hidden;

      p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
          padding: 6px 2px 0 6px;
          line-height: 1.2;
          font-size: 13px;
      }
    }
  }
}
</style>
