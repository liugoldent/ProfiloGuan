<template>
  <!-- Histogram -->
  <div id="Echarts">
    <div id="MainContent">
      <div id="Exp"></div>
      <el-card id="ExpIntro" class="box-card">
        <div slot="header" class="clearfix">
          <h1>{{ TimeEachStatus }}</h1>
        </div>
        <template v-if="ShowSmallWord[0]">
          <p>待人：誠實、為人著想、不利用巧語以達到目的</p>
          <br />
          <p>希望藉由多交流、溝通，以達到工作效率的提升處事</p>
          <br />
          <p>在面對難題時，先自行想過、再盡力找尋答案</p>
          <br />
          <p>
            生活態度：獨立自主、具高度抗壓性，不衝動做事。凡事以理性為出發點。
          </p>
        </template>
        <template v-if="ShowSmallWord[1]">
          <p>
            程式維護：秉持「事出必有因」，能夠迅速的從事件觸發點去找尋Bug的存在，並會透過VSCode
            / Chrome 瀏覽器的Debug模式，找出問題所在。
          </p>
          <br />
          <p>
            程式開發：理解SA文件，字句間的內涵，不懂就多問，或與上級討論，寧願多問做對的事，也不願未來有更多Bug產生。
            而在開發畫面上，若有想法，會主動向上提報，共同討論。
          </p>
          <br />
          <p>
            版本控制（Git）：曾擔任過專案中整合程式的一角，遇到程式衝突，能夠理性有條理的解決。
            重構與技能：下班後，常會思考自己的程式有哪邊能再更彈性，並更容易做出維護。另外每個月也會定些技能目標，努力向上。
          </p>
        </template>
        <template v-if="ShowSmallWord[2]">
          <p>在研究所期間，使用Linux系統，運作 Monte Carlo 模擬軟體。</p>
          <br />
          <p>
            並利用Matlab對模擬出來的數據做分析，藉此最佳化放射治療
            儀器的基礎構造。
          </p>
          <br />
          <p>
            另在就學期間，也透過每週的報告，訓練出自身對製作報告的速度與品質以及口述時的
            條理清晰。
          </p>
        </template>
        <template v-if="ShowSmallWord[3]">
          <p>
            在學期間，曾習得OrCad的操作，也對C語言有所涉略，並曾修過影像處理的課程，了
            解影像處理的基本知識。
          </p>
          <br />
          <p>
            而因在校旁出版社工讀的原因，了解理性溝通對於公司整體工作效率的提升非常重要，
            並曾使用過 illustrator 與 Lightroom
            等設計軟體，知道設計與產品美感的重要性。
          </p>
        </template>
      </el-card>
      <div id="ButtonGroup">
        <el-button @click="BackStatus(0)" round type="info">
          {{ TimeAllStatus[0] }}
        </el-button>
        <el-button @click="BackStatus(1)" round type="info">
          {{ TimeAllStatus[1] }}
        </el-button>
        <el-button @click="BackStatus(2)" round type="info">
          {{ TimeAllStatus[2] }}
        </el-button>
        <el-button @click="BackStatus(3)" round type="info">
          {{ TimeAllStatus[3] }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import 'echarts-liquidfill'

export default {
  name: 'Exp',
  components: {},
  props: {},
  data() {
    return {
      Liquiddata: [
        [0.6, 0.6, 0.6, 0.6],
        [0.5, 0.5, 0.5, 0.5],
        [0.4, 0.4, 0.4, 0.4],
        [0.3, 0.3, 0.3, 0.3]
      ],
      yearControler: ['', '2019-', '2015-2017', '2011-2015'],
      WaveColor: [
        ['#03FFDD', '#28D2BB', '#38B09F', '#419388'],
        ['#0369FE', '#1D6CDE', '#3170CB', '#3E6DB0'],
        ['#FE0F03', '#E22920', '#C63831', '#A8403B'],
        ['#F4FF02', '#DBE420', '#C2C933', '#AAAF3E']
      ],
      TimeAllStatus: ['個人特質', '經歷', '求學過程-研究所', '求學過程-大學'],
      TimeEachStatus: '',
      item: 0,
      ShowSmallWord: [true, false, false, false],
      IntervalStatus: '',
      SECRET: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // this.echartsLiquidInit()
    this.showDataInterval()
  },
  methods: {
    /**
     * @description 水球圖初始化
     */
    echartsLiquidInit(item) {
      const self = this
      // 找到容器
      const myChart = this.$echarts.init(document.getElementById('Exp'))
      // 开始渲染
      myChart.setOption({
        backgroundColor: '#000000',
        series: [
          {
            type: 'liquidFill',
            radius: '60%',
            data: this.Liquiddata[item],
            color: this.WaveColor[item],
            itemStyle: {
              opacity: 0.2
            },
            backgroundStyle: {
              borderWidth: 5,
              borderColor: 'rgb(255,0,255,0.9)',
              color: 'rgb(0, 255, 220 ,0.01)'
            },
            label: {
              normal: {
                formatter: self.yearControler[item],
                fontStyle: 'italic',
                textStyle: {
                  color: 'white',
                  fontSize: 50
                }
              }
            }
          }
        ]
      })
      // RWD
      window.onresize = function() {
        myChart.resize()
      }
    },
    /**
     * @description 控制顯示的字為何
     */
    showDataInterval() {
      const self = this
      self.echartsLiquidInit(self.item)
      self.TimeEachStatus = self.TimeAllStatus[self.item]
      self.showSmallWord(self.item)
      this.IntervalStatus = window.setInterval(function() {
        if (self.item === self.TimeAllStatus.length) {
          self.item = 0
        } else {
          self.item++
        }
        self.echartsLiquidInit(self.item)
        self.TimeEachStatus = self.TimeAllStatus[self.item]
        self.showSmallWord(self.item)
      }, 10000)
    },
    /**
     * @description 下面小字的替換
     */
    showSmallWord(item) {
      for (let i = 0; i < this.ShowSmallWord.length; i++) {
        if (i === item) {
          this.ShowSmallWord[i] = true
        } else {
          this.ShowSmallWord[i] = false
        }
      }
    },
    /**
     * @description 觸發點擊水球圖的事件
     */
    BackStatus(Data) {
      const self = this
      self.item = Data
      window.clearInterval(this.IntervalStatus)
      this.showDataInterval()
    },
    /**
     * @description 讓濾鏡的東西復原
     */
    RecoverFilter() {
      const Context = document.getElementById('Echarts')
      Context.style.filter = 'blur(0px)'
    }
  }
}
</script>

<style lang="scss" scoped>
#Echarts {
  background-color: black;
  width: 100vw;
  height: 100vh;
  filter: blur(10px);
}
#MainContent {
  z-index: 1;
}
/** 水球圖 位置 */
#Exp {
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: relative;
  left: -25vw;
}
/** 文字顯示部份*/
#ExpIntro {
  position: absolute;
  right: 20vw;
  top: 20vh;
}

.box-card {
  color: white;
  width: 30vw;
  opacity: 0.9;
  background-color: black;
}

/** 按鈕群組 */
#ButtonGroup {
  position: absolute;
  bottom: 10vh;
  left: 10vw;
}
</style>
