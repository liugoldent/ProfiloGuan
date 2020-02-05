<template>
  <!-- Histogram -->
  <div id="Echarts">
    <div id="FourHistogramChart"></div>
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'

export default {
  name: 'FourMetronome',
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
      scaleData: [
        {
          name: '1',
          value: 25,
          index: 1
        },
        {
          name: '2',
          value: 25,
          index: 2
        },
        {
          name: '3',
          value: 25,
          index: 3
        },
        {
          name: '4',
          value: 25,
          index: 4
        }
      ],
      BeatStatus: 1,
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
        this.ChangeEchartsData()
      }
    }
  },
  created() {},
  mounted() {
    this.echartsInit(this.BeatStatus)
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
     * @description 圖表初始化
     */
    echartsInit(BeatStatus) {
      // 找到容器
      const myChart = this.$echarts.init(
        document.getElementById('FourHistogramChart')
      )
      const scaleData = this.scaleData
      const rich = {
        white: {
          color: '#ddd',
          align: 'center',
          padding: [5, 0]
        }
      }
      const placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      }
      const data = []
      for (let i = 0; i < scaleData.length; i++) {
        data.push(
          {
            // name: scaleData[i].name,
            index: scaleData[i].index,
            value: scaleData[i].value,
            itemStyle: {
              normal: {
                borderWidth: 10,
                shadowBlur: 30,
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                  {
                    offset: 0,
                    color: '#000000'
                  },
                  {
                    offset: 1,
                    color: '#000000'
                  }
                ]),
                shadowColor: '#000000'
              }
            }
          },
          {
            value: 4,
            name: '',
            itemStyle: placeHolderStyle
          }
        )
      }
      this.ChangeColorIndex(data)
      const seriesObj = [
        {
          name: '',
          type: 'pie',
          clockWise: false,
          radius: [295, 300],
          startAngle: 6,
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                formatter(params) {
                  return params.name
                },
                rich
              },
              labelLine: {
                show: false
              }
            }
          },
          data
        }
      ]
      // 开始渲染
      myChart.setOption({
        backgroundColor: '#000000',
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        toolbox: {
          show: false
        },
        series: seriesObj,
        textStyle: {
          fontSize: 18
        }
      })
      // RWD
      window.onresize = function() {
        myChart.resize()
      }
    },
    /**
     * @description 改變圖表顏色，步驟一，抓出真正環狀的data
     */
    ChangeColorIndex(AllData) {
      for (let i = 0; i < AllData.length; i++) {
        if (AllData[i].index != null) {
          this.ChangeColorThings(AllData[i])
        }
      }
    },
    /**
     * @description 改變圖表顏色，步驟二，得到真正有顏色的區塊，並改變顏色
     */
    ChangeColorThings(Data) {
      if (this.BeatStatus >= Data.index) {
        Data.itemStyle.normal.borderColor.colorStops[0].color = '#7777eb'
        Data.itemStyle.normal.borderColor.colorStops[1].color = '#70ffac'
        Data.itemStyle.normal.shadowColor = 'rgba(142, 152, 241, 0.6)'
      }
    },
    /**
     * @description 動態改變環形
     */
    ChangeEchartsData() {
      setTimeout(() => {
        if (!this.play) {
          this.BeatStatus++
          this.$emit('beatplay', this.time)
          this.echartsInit(this.BeatStatus)
          if (this.BeatStatus === 4) {
            this.Reset()
          } else {
            this.ChangeEchartsData()
          }
        }
      }, this.time)
    },
    /**
     * @Description 重置環形
     */
    Reset() {
      setTimeout(() => {
        this.BeatStatus = 1
        this.$emit('beatplay', this.time)
        this.echartsInit(this.BeatStatus)
        this.ChangeEchartsData()
      }, this.time)
    }
  }
}
</script>

<style lang="scss" scoped>
#FourHistogramChart {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
