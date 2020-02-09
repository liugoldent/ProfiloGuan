<template>
  <div class="buttonposition">
    <el-tooltip class="item" effect="dark" content="高八度" placement="top">
      <button @click="ChangeHighLow('Higher')" class="iconbuttonup">
        <NuxtLink to="/PianoHigher">
          <i class="custom-icon el-icon-arrow-up"></i>
        </NuxtLink>
      </button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="中音域" placement="left">
      <button @click="ChangeHighLow('Central')" class="iconbuttonCentral">
        <NuxtLink to="/Piano">
          <i class="custom-icon el-icon-minus"></i>
        </NuxtLink>
      </button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="低八度" placement="bottom">
      <button @click="ChangeHighLow('Lower')" class="iconbuttondown">
        <NuxtLink to="/PianoLower">
          <i class="custom-icon el-icon-arrow-down"></i>
        </NuxtLink>
      </button>
    </el-tooltip>
    <h1 id="Showrange">{{ range }}</h1>
  </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap');
/**icon 的 div style */
.buttonposition {
  position: absolute;
  top: 30vh;
  right: 5vw;
}
.iconbuttonup {
  width: 3vw;
  height: 5vh;
  background-color: black;
  position: absolute;
  right: 0px;
  margin-right: 2vw;
  transition-duration: 1s;
}
.iconbuttonup:hover {
  cursor: pointer;
  // transform: translateY(-2vh);
}
.custom-icon {
  font-size: 3vh;
  color: white;
}
.iconbuttondown {
  @extend .iconbuttonup;
  top: 12vh;
}
.iconbuttondown:hover {
  cursor: pointer;
  // transform: translateY(2vh);
}

.iconbuttonCentral {
  @extend .iconbuttonup;
  top: 6vh;
}
.iconbuttonCentral:hover {
  cursor: pointer;
  // transform: translateX(2vh);
}
#Showrange {
  text-align: center;
  margin-top: -23vh;
  color: yellow;
  z-index: 2;
  font-size: 50px;
  font-family: 'Kaushan Script', cursive;
}
</style>
<script>
import $ from 'jquery'

export default {
  name: 'Guide',
  props: {
    range: {
      type: String,
      default: 'Central'
    }
  },
  data() {
    return {
      lowerURL: '',
      higherURL: '',
      CentralURL: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.RangeBgColor(this.Range)
  },
  methods: {
    /**
     * @description 更改高低音
     */
    ChangeHighLow(Range) {
      this.Range = Range
      this.RangeBgColor(Range)
    },
    /**
     * @description 調整點擊的高低音背景顏色
     */
    RangeBgColor(Range) {
      if (Range === 'Central') {
        $('.iconbuttonCentral').css('background-color', 'rgb(39, 6, 158)')
        $('.iconbuttondown').css('background-color', 'black')
        $('.iconbuttonup').css('background-color', 'black')
      } else if (Range === 'Lower') {
        $('.iconbuttondown').css('background-color', 'rgb(39, 6, 158)')
        $('.iconbuttonCentral').css('background-color', 'black')
        $('.iconbuttonup').css('background-color', 'black')
      } else if (Range === 'Higher') {
        $('.iconbuttonup').css('background-color', 'rgb(39, 6, 158)')
        $('.iconbuttonCentral').css('background-color', 'black')
        $('.iconbuttondown').css('background-color', 'black')
      }
    }
  }
}
</script>
