<template>
  <!-- Histogram -->
  <div id="">
    <div id="Guide">
      <Guide />
    </div>
    <div class="content">
      <div id="AboutSkill" v-if="ExpSkill"></div>
      <div id="AboutExp" v-if="!ExpSkill"></div>
    </div>
    <button class="ExpSkillIcon">
      <i class="custom-icon el-icon-arrow-right"></i>
    </button>
  </div>
</template>

<script>
import Guide from '../components/Guide'

export default {
  name: 'FourMetronome',
  components: {
    Guide
  },
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
      ],
      ExpSkill: true
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
      const myChart = this.$echarts.init(document.getElementById('AboutSkill'))
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
#AboutSkill {
  width: 100vw;
  height: 100vh;
  position: relative;
}

/** 切換經歷與技能的button */
.ExpSkillIcon {
  z-index: 2;
  top: 50vh;
  right: 10vw;
  position: absolute;
  border: 0;
  background-color: transparent;
  outline: none;
}

/** 切換經歷與技能的icon */
.custom-icon {
  font-size: 4rem;
  color: white;
  animation: living 3s linear infinite;
}
@keyframes living {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7; /*圆形放大的同时，透明度逐渐减小为0*/
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.custom-icon:hover {
  cursor: pointer;
  color: #00ffdc;
}
</style>
