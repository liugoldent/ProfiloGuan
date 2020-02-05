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
            height="300px"
            class="col-md-3"
          >
            <el-carousel-item v-for="(item, index) in ImgArray" :key="item">
              <button id="ImgButton" @click="ImgIndex(item, index)">
                <el-image :src="item" fit="contain" />
              </button>
            </el-carousel-item>
          </el-carousel>
          <el-carousel
            id="carousel2"
            indicator-position="outside"
            height="300px"
            class="col-md-3"
          >
            <el-carousel-item v-for="item in ImgArray" :key="item">
              <img :src="item" />
            </el-carousel-item>
          </el-carousel>
          <el-carousel
            id="carousel3"
            indicator-position="outside"
            height="300px"
            class="col-md-3"
          >
            <el-carousel-item v-for="item in ImgArray" :key="item">
              <img :src="item" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div id="LowerPhoto">
          <el-carousel
            id="carousel4"
            indicator-position="outside"
            height="300px"
            class="col-md-3"
          >
            <el-carousel-item v-for="item in ImgArray" :key="item">
              <img :src="item" />
            </el-carousel-item>
          </el-carousel>
          <el-carousel
            id="carousel5"
            indicator-position="outside"
            height="300px"
            class="col-md-3"
          >
            <el-carousel-item v-for="item in ImgArray" :key="item">
              <img :src="item" />
            </el-carousel-item>
          </el-carousel>
          <el-carousel
            id="carousel6"
            indicator-position="outside"
            height="300px"
            class="col-md-3"
          >
            <el-carousel-item v-for="item in ImgArray" :key="item">
              <img :src="item" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
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
      ImgArray: [
        'https://thumbs2.imgbox.com/07/fd/gRIvyezo_t.jpg',
        'https://thumbs2.imgbox.com/fc/5c/sG7CtSX9_t.jpg',
        'https://thumbs2.imgbox.com/3e/33/Yetyca7h_t.jpg',
        'https://thumbs2.imgbox.com/70/57/dGRoyejm_t.jpg'
      ],
      PhotoData: {}
    }
  },

  computed: {},
  watch: {},
  asyncData({ params }) {
    return { PhotoLink }
  },
  created() {},
  mounted() {
    console.log('params', PhotoLink)
  },
  methods: {
    ImgIndex(item, Index) {
      console.log('Index', item)
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
</style>
