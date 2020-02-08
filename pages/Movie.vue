<template>
  <div class="container">
    <div id="Guide">
      <Guide />
    </div>
    <div id="HomeBg">
      <div id="content">
        <div class="demo-input-suffix">
          <el-select
            v-model="SortStyle"
            placeholder="請選擇"
            style="width:15vw"
          >
            <el-option
              v-for="item in SortIndex"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{
                item.value
              }}</span>
            </el-option>
          </el-select>
          <el-input
            v-model="inputMovieSearch"
            placeholder="Input Keywords"
            class="SearchInput"
            style="width:15vw"
          >
          </el-input>
          <el-button
            @click="SearchMovieApi"
            icon="el-icon-search"
            class="SearchIcon"
            circle
          ></el-button>
        </div>
        <div id="MovieChart"></div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" title="提示" width="15%" top="15%">
      <span>{{ PleaseInputKey }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" type="primary"
          >確定</el-button
        >
      </span>
    </el-dialog>
    <el-drawer
      id="DrawerOver"
      :visible.sync="ShowDrawer"
      :with-header="false"
      title=""
      custom-class="AddOver"
    >
      <el-card shadow="always" class="Card">
        [ original_title ] : {{ InnerDrawerShowData.original_title }}
      </el-card>
      <el-card shadow="always" class="Card">
        <img :src="ImgSrc" alt="No Image" />
      </el-card>
      <el-card shadow="always" class="Card">
        [ popularity ] : {{ InnerDrawerShowData.popularity }}
      </el-card>
      <el-card shadow="always" class="Card">
        [ vote_count ] : {{ InnerDrawerShowData.vote_count }}
      </el-card>
      <el-card shadow="always" class="Card">
        [ adult ] : {{ InnerDrawerShowData.adult }}
      </el-card>
      <el-card shadow="always" class="Card">
        [ original_language ] : {{ InnerDrawerShowData.original_language }}
      </el-card>
      <el-card shadow="always" class="Card">
        [ vote_average ] : {{ InnerDrawerShowData.vote_average }}
      </el-card>
      <el-card shadow="always" class="Card">
        [ release_date ] : {{ InnerDrawerShowData.release_date }}
      </el-card>
    </el-drawer>
  </div>
</template>

<script>
import $ from 'jquery'
import Vue from 'vue'
import Notifications from 'vue-notification/dist/ssr.js'
import axios from 'axios'
import Guide from '../components/Guide'
Vue.use(Notifications)

export default {
  name: 'Movie',
  components: {
    Guide
  },
  props: {},
  data() {
    return {
      inputMovieSearch: '',
      UnderData: ['請', '搜尋', '電影', '的', '名', '稱'],
      UpperData: [123, 60, 25, 18, 12, 9],
      dialogVisible: false,
      PleaseInputKey: '請輸入關鍵字',
      AllData: {},
      ShowDrawer: false,
      DrawerData: [],
      InnerDrawerShowData: {},
      ImgSrc: '',
      SortStyle: 'popularity',
      SortIndex: [
        { value: 'popularity', label: '知名度' },
        { value: 'vote_count', label: '提及數' },
        { value: 'vote_average', label: '提及率' }
      ]
    }
  },
  computed: {},
  watch: {},
  asyncData({ req, params }) {
    // We can return a Promise instead of calling the callback
    // return axios
    //   .get(
    //     'https://api.themoviedb.org/3/search/movie?api_key=2c8b6de6aaf1d1abfd4e366fb29c5a0c&query=harry'
    //   )
    //   .then((res) => {
    //     return { Data: res.data }
    //   })
  },
  created() {},
  mounted() {
    this.echartsInit()
  },
  methods: {
    /**
     * @description 圖表初始化
     */
    echartsInit() {
      const self = this
      // 找到容器
      const myChart = this.$echarts.init(document.getElementById('MovieChart'))

      // 开始渲染
      myChart.setOption({
        backgroundColor: '#000000',
        grid: {
          left: '10%',
          top: '10%',
          bottom: '10%',
          right: '8%'
        },
        xAxis: {
          data: this.UnderData,
          offset: -200,
          position: 'top',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 129, 109, 0.1)',
              width: 1
            }
          },
          axisLabel: {
            textStyle: {
              color: '#999',
              fontSize: 14
            },
            rotate: 35
          }
        },
        yAxis: [
          {
            splitNumber: 2,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 129, 109, 0.1)',
                width: 1
              }
            },
            axisLabel: {
              textStyle: {
                color: '#999'
              }
            },
            splitArea: {
              areaStyle: {
                color: 'rgba(255,255,255,.5)'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255, 129, 109, 0.1)',
                width: 0.5,
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol:
              'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            label: {
              show: true,
              position: 'bottom',
              distance: 15,
              color: '#DB5E6A',
              fontWeight: 'bolder',
              fontSize: 20
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(232, 94, 106, .8)' //  0%  处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(232, 94, 106, .1)' //  100%  处的颜色
                    }
                  ],
                  global: false //  缺省为  false
                }
              },
              emphasis: {
                opacity: 1
              }
            },
            data: this.UpperData,
            z: 10
          }
        ]
      })
      // RWD
      window.onresize = function() {
        myChart.resize()
      }
      myChart.on('click', function(params) {
        self.EchartClickEvent(params)
      })
    },
    /**
     * @description 點擊資料，抽屜要顯示的function
     */
    EchartClickEvent(Event) {
      const EventIndex = this.DrawerData.findIndex(
        (data) => data.original_title === Event.name
      )
      if (EventIndex === -1) {
        this.ShowDrawer = false
      } else {
        this.ImgSrc = `https://image.tmdb.org/t/p/w300${this.DrawerData[EventIndex].poster_path}`
        this.InnerDrawerShowData = this.DrawerData[EventIndex]
        this.ShowDrawer = true
        $('.el-drawer.rtl').css('overflow', 'auto')
      }
    },
    /**
     * @description 打TMDB API
     */
    SearchMovieApi() {
      const self = this
      if (this.inputMovieSearch !== '') {
        const ApiKey = '2c8b6de6aaf1d1abfd4e366fb29c5a0c'
        return axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${this.inputMovieSearch}`
          )
          .then((res) => {
            self.DealData(res.data.results)
            return { AllData: res.data }
          })
      } else {
        this.dialogVisible = true
      }
    },
    /**
     * @description 處理要顯示的Data
     */
    async DealData(Data) {
      const self = this
      if (Data.length > 0) {
        this.UnderData = []
        this.UpperData = []
        let ShowArray = Data.slice(0, 6)
        ShowArray = await self.SortData(ShowArray)
        for (let i = 0; i < ShowArray.length; i++) {
          let Data = ShowArray[i]
          this.UpperData[i] = Data[`${self.SortStyle}`]
          this.UnderData[i] = ShowArray[i].original_title
          Data = {}
        }
        this.echartsInit()
      } else {
        this.PleaseInputKey = '您輸入的關鍵字，找不到資料'
        this.dialogVisible = true
      }
    },
    /**
     * @description 對Data做排序
     */
    SortData(Data) {
      const self = this
      Data.sort(function(a, b) {
        return b[`${self.SortStyle}`] - a[`${self.SortStyle}`]
      })
      this.DrawerData = Data
      return Data
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC&display=swap');
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#HomeBg {
  background-color: black;
  height: 100vh;
  width: 100vw;
  animation: Imgmove 120s linear infinite;
  background-repeat: repeat-y;
}
/**所有內容 */
#content {
  margin: 0px auto;
  position: relative;
}
/**搜尋框的內容 */
.demo-input-suffix {
  display: flex;
  position: absolute;
  top: 1vw;
  left: 38vw;
  width: 30vw;
  z-index: 1;
  justify-content: flex-start;
  opacity: 0.2;
}
.demo-input-suffix:hover {
  opacity: 1;
}

.SearchInput {
  margin-right: 1vw;
  float: left;
}
.SearchIcon {
  float: right;
}
/** Movie圖表 */
#MovieChart {
  width: 100vw;
  height: 100vh;
  position: relative;
}

/** 抽屜打開來，裡面的資料*/
.Card {
  margin-top: 10px;
  background-color: white;
}
</style>
