<template>
  <div class="container">
    <div id="Guide">
      <Guide />
    </div>
    <div id="HomeBg">
      <div id="content">
        <div id="UpperPhoto">
          <el-carousel
            id="carousel1"
            indicator-position="outside"
            class="col-md-3"
          >
            <el-carousel-item v-for="(item, index) in Imag1Array" :key="item">
              <button id="ImgButton" @click="ImgIndex(item, index)">
                <el-image
                  :src="item"
                  :preview-src-list="BigImg"
                  fit="contain"
                />
              </button>
            </el-carousel-item>
          </el-carousel>
          <el-carousel
            id="carousel2"
            indicator-position="outside"
            class="col-md-3"
          >
            <el-carousel-item v-for="(item, index) in Imag2Array" :key="item">
              <button id="ImgButton" @click="ImgIndex(item, index)">
                <el-image :src="item" fit="contain" />
              </button>
            </el-carousel-item>
          </el-carousel>
          <el-carousel
            id="carousel3"
            indicator-position="outside"
            class="col-md-3"
          >
            <el-carousel-item v-for="(item, index) in Imag3Array" :key="item">
              <button id="ImgButton" @click="ImgIndex(item, index)">
                <el-image :src="item" fit="contain" />
              </button>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div id="LowerPhoto">
          <el-carousel
            id="carousel4"
            indicator-position="outside"
            class="col-md-3"
          >
            <el-carousel-item v-for="(item, index) in Imag4Array" :key="item">
              <button id="ImgButton" @click="ImgIndex(item, index)">
                <el-image :src="item" fit="contain" />
              </button>
            </el-carousel-item>
          </el-carousel>
          <el-carousel
            id="carousel5"
            indicator-position="outside"
            class="col-md-3"
          >
            <el-carousel-item v-for="(item, index) in Imag5Array" :key="item">
              <button id="ImgButton" @click="ImgIndex(item, index)">
                <el-image :src="item" fit="contain" />
              </button>
            </el-carousel-item>
          </el-carousel>
          <el-carousel
            id="carousel6"
            indicator-position="outside"
            class="col-md-3"
          >
            <el-carousel-item v-for="(item, index) in Imag6Array" :key="item">
              <button id="ImgButton" @click="ImgIndex(item, index)">
                <el-image :src="item" fit="contain" />
              </button>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div v-if="VisibleImg">
      <img @click="dialogVisible()" :src="BigImg" class="jump_img" />
    </div>
  </div>
</template>

<script>
import Guide from '../components/Guide'
import PhotoLink from '~/static/Photo.json'
export default {
  name: 'Movie',
  components: {
    Guide
  },
  props: {},
  data() {
    return {
      PhotoData: {},
      Imag1Array: [],
      Imag2Array: [],
      Imag3Array: [],
      Imag4Array: [],
      Imag5Array: [],
      Imag6Array: [],

      VisibleImg: false,
      BigImg: ''
    }
  },

  computed: {},
  watch: {},
  asyncData({ params }) {
    return { PhotoLink }
  },
  created() {},
  mounted() {
    try {
      if (PhotoLink != null) {
        this.Imag1Array = Object.values(PhotoLink.First)
        this.Imag2Array = Object.values(PhotoLink.Second)
        this.Imag3Array = Object.values(PhotoLink.Third)
        this.Imag4Array = Object.values(PhotoLink.Four)
        this.Imag5Array = Object.values(PhotoLink.Five)
        this.Imag6Array = Object.values(PhotoLink.Six)
      }
    } catch (e) {
      console.error(e.message)
    }
  },
  methods: {
    ImgIndex(item, Index) {
      this.VisibleImg = !this.VisibleImg
      this.BigImg = item
      console.log('Index', item)
    },
    dialogVisible() {
      console.log('1', 1)
      this.VisibleImg = false
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
  width: 90vw;
}
#UpperPhoto {
  width: 90vw;
  height: 50vh;
}
#LowerPhoto {
  @extend #UpperPhoto;
}
/** 卡片外觀與排列 */
#carousel1 {
  width: 25vw;
  top: 5vh;
  left: 3.75vw;
}
#carousel2 {
  position: absolute;
  width: 25vw;
  top: 5vh;
  left: 32.5vw;
}
#carousel3 {
  width: 25vw;
  position: absolute;
  top: 5vh;
  right: 3.75vw;
}

#carousel4 {
  @extend #carousel1;
}
#carousel5 {
  @extend #carousel2;
  top: 55vh;
}
#carousel6 {
  @extend #carousel3;
  top: 55vh;
}

#ImgButton {
  border: none;
  background-color: black;
}
.jump_img {
  position: absolute;
  z-index: 99999;
  width: 50%;
  height: auto;
  top: 40%;
  left: 50%;
  margin: -20% 0 0 -40%;
}
</style>
