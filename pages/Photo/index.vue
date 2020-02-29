<template>
  <div class="container">
    <div id="Guide">
      <Guide />
    </div>
    <div id="HomeBg">
      <div id="content">
        <el-carousel
          id="carousel1"
          indicator-position="outside"
          class="col-md-3"
        >
          <el-carousel-item
            v-for="(item, index) in ShowImgArray1"
            :key="item"
            height="10vh"
          >
            <button id="ImgButton" @click="ImgIndex(item, index)">
              <el-image :src="item" :preview-src-list="BigImg" fit="contain" />
            </button>
          </el-carousel-item>
        </el-carousel>
        <el-carousel
          id="carousel2"
          indicator-position="outside"
          class="col-md-3"
        >
          <el-carousel-item
            v-for="(item, index) in ShowImgArray2"
            :key="item"
            height="10vh"
          >
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
          <el-carousel-item v-for="(item, index) in ShowImgArray3" :key="item">
            <button id="ImgButton" @click="ImgIndex(item, index)">
              <el-image :src="item" fit="contain" />
            </button>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="block">
        <el-pagination
          id="Pagination"
          :total="total"
          @current-change="PageChange($event)"
          background
          layout="prev, pager, next"
        >
        </el-pagination>
      </div>
    </div>
    <div v-if="VisibleImg">
      <img @click="dialogVisible()" :src="BigImg" class="jump_img" />
    </div>
  </div>
</template>

<script>
import Guide from '~/components/Guide'
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
      ShowImgArray1: [],
      ShowImgArray2: [],
      ShowImgArray3: [],

      VisibleImg: false,
      BigImg: '',
      total: 20
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
        this.ShowImgArray1 = this.Imag1Array
        this.ShowImgArray2 = this.Imag2Array
        this.ShowImgArray3 = this.Imag3Array
      }
    } catch (e) {
      console.error(e.message)
    }
  },
  methods: {
    ImgIndex(item, Index) {
      this.VisibleImg = !this.VisibleImg
      this.BigImg = item
    },
    dialogVisible() {
      this.VisibleImg = false
    },
    PageChange(Page) {
      if (Page === 1) {
        this.ShowImgArray1 = this.Imag1Array
        this.ShowImgArray2 = this.Imag2Array
        this.ShowImgArray3 = this.Imag3Array
      } else if (Page === 2) {
        this.ShowImgArray1 = this.Imag4Array
        this.ShowImgArray2 = this.Imag5Array
        this.ShowImgArray3 = this.Imag6Array
      }
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
.el-image {
  border: 2px;
  border-radius: 10px;
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
  top: 25vh;
  width: 90vw;
  height: 30vh;
}

/** 卡片外觀與排列 */
#carousel1 {
  width: 25vw;
  top: 40vh;
  left: 3.75vw;
}
#carousel2 {
  position: absolute;
  width: 25vw;
  top: 15vh;
  left: 32.5vw;
}
#carousel3 {
  width: 25vw;
  position: absolute;
  top: 40vh;
  right: 3.75vw;
}

#ImgButton {
  border: none;
  background-color: black;
}

/** 跳出的圖面置中 */
.jump_img {
  position: absolute;
  z-index: 99999;
  width: 45%;
  height: auto;
  top: 40%;
  left: 50%;
  margin: -18% -22.5%;
  border-style: outset;
  border-width: 9px;

  opacity: 1;
  animation: fade 1s linear;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/** 分頁樣式 */
#Pagination {
  position: absolute;
  bottom: 12vh;
  margin-right: 45vw;
  margin-left: 45vw;
}
</style>
