<template>
  <!-- Histogram -->
  <div id="Echarts">
    <div id="Skill"></div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  components: {},
  props: {},
  data() {
    return {
      SelfData: [
        { value: 400, name: 'Vue' },
        { value: 360, name: 'HTML、CSS、Sass、Git' },
        { value: 320, name: 'API' },
        { value: 280, name: 'Bootstrap、jQuery' },
        { value: 240, name: 'Nuxt、Node.js' },
        { value: 200, name: 'Jest' }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.echartsInit()
  },
  methods: {
    /**
     * @description 圖表初始化
     */
    echartsInit() {
      // 找到容器
      const myChart = this.$echarts.init(document.getElementById('Skill'))
      // 开始渲染
      myChart.setOption({
        backgroundColor: '#000000',

        title: {
          left: 'center',
          top: 30,
          textStyle: {
            color: '#ccc'
          }
        },

        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: 'Skill',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: this.SelfData.sort(function(a, b) {
              return a.value - b.value
            }),
            roseType: 'radius',
            label: {
              textStyle: {
                fontSize: 25,
                fontStyle: 'oblique',
                fontWeight: 'bolder'
              },
              color: 'rgba(251, 238, 230, 0.9)'
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(251, 238, 230, 0.9)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay(idx) {
              return Math.random() * 200
            }
          }
        ]
      })
      // RWD
      window.onresize = function() {
        myChart.resize()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#Skill {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
