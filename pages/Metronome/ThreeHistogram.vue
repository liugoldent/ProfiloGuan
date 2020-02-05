<template>
  <!-- Histogram -->
  <div id="Echarts">
    <div id="ThreeHistogramChart"></div>
  </div>
</template>

<script>
export default {
  name: 'ThreeMetronome',
  components: {},
  props: {
    speed: {
      type: Number,
      default: 60
    },
    play: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      EndPointData: [
        {
          value: 100,
          symbolPosition: 'end'
        },
        {
          value: 0,
          symbolPosition: 'end'
        },
        {
          value: 0,
          symbolPosition: 'end'
        }
      ],
      StartPointData: [100, 0, 0],
      time: 1500
    }
  },
  computed: {},
  watch: {
    speed(nval) {
      this.CalculateTime(nval)
    },
    play(nval) {
      if (!nval) {
        this.TwoSlashThree()
      }
    }
  },
  created() {},
  mounted() {
    this.echartsInit()
    this.CalculateTime()
  },
  methods: {
    /**
     * @description 初步計算時間
     */
    CalculateTime(nval) {
      nval = nval || this.speed
      const Magnification = nval / 40
      this.time = 1500 * (1 / Magnification)
    },
    /**
     * @description 初始化圖表
     */
    echartsInit() {
      // 找到容器
      const myChart = this.$echarts.init(
        document.getElementById('ThreeHistogramChart')
      )
      // 开始渲染
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ['', '', ''],
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: '#e54035'
            }
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [
          // 終點樣式
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [100, 45],
            symbolOffset: [0, -20],
            z: 12,
            itemStyle: {
              normal: {
                color: '#14b1eb'
              }
            },
            data: this.EndPointData
          },
          // 柱狀圖1
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [100, 45],
            symbolOffset: [0, 20],
            z: 12,
            itemStyle: {
              normal: {
                color: '#14b1eb'
              }
            },
            data: [1, 2, 3]
          },
          // 柱狀圖2
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [150, 75],
            symbolOffset: [0, 37],
            z: 11,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#14b1eb',
                borderWidth: 5
              }
            },
            data: [1, 2, 3]
          },
          // 柱狀圖3
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [200, 100],
            symbolOffset: [0, 50],
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#14b1eb',
                borderType: 'dashed',
                borderWidth: 5
              }
            },
            data: [1, 2, 3]
          },
          // 起點樣式
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#14b1eb',
                opacity: 0.7
              }
            },
            silent: true,
            barWidth: 100,
            barGap: '-100%', // Make series be overlap
            data: this.StartPointData
          }
        ]
      })
      // RWD
      window.onresize = function() {
        myChart.resize()
      }
    },
    /**
     * @description 更改圖表的高度，主要function(預設1/3拍)
     */
    ChangeEchartsData() {
      if (!this.play) {
        this.StartPointData = [100, 0, 0]
        this.DealEndPointData(this.StartPointData)
        setTimeout(() => {
          this.TwoSlashThree()
        }, this.time)
      } else {
        this.echartsInit()
      }
    },
    /**
     * @description 更改圖表的高度，主要2/3拍
     */
    TwoSlashThree() {
      if (!this.play) {
        this.StartPointData = [0, 100, 0]
        this.DealEndPointData(this.StartPointData)
        setTimeout(() => {
          this.ThreeSlashThree()
        }, this.time)
      } else {
        this.echartsInit()
      }
    },
    /**
     * @description 更改圖表的高度，主要3/3拍
     */
    ThreeSlashThree() {
      if (!this.play) {
        this.StartPointData = [0, 0, 100]
        this.DealEndPointData(this.StartPointData)
        setTimeout(() => {
          this.ChangeEchartsData()
        }, this.time)
      } else {
        this.echartsInit()
      }
    },
    /**
     * @description 處理結束的資料
     * @input 開始資料
     */
    DealEndPointData(StartPointData) {
      for (let i = 0; i < StartPointData.length; i++) {
        this.EndPointData[i].value = StartPointData[i]
      }
      this.$emit('beatplay', this.time)
      this.echartsInit()
    }
  }
}
</script>

<style lang="scss" scoped>
#ThreeHistogramChart {
  top: 2vh;
  width: 95vw;
  height: 90vh;
  position: relative;
  margin: 0px auto;
  margin-right: 5vw;
}
</style>
