<template>
  <div id="app">
    <el-menu
      :collapse="isCollapse"
      @close="handleClose"
      @open="handleOpen"
      default-active="1-5-1"
      class="el-menu-vertical"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-headset"></i>
          <span slot="title">音樂</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <nuxt-link to="Piano">鋼琴</nuxt-link>
          </el-menu-item>
          <el-menu-item index="1-2"
            ><nuxt-link to="Metronome">節拍器</nuxt-link></el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <nuxt-link to="Photo">
          <i class="el-icon-camera"></i>
          <span slot="title">Photo</span>
        </nuxt-link>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-s-custom"></i>
        <span slot="title">About Me</span>
      </el-menu-item>
      <el-menu-item index="4">
        <nuxt-link to="Movie">
          <i class="el-icon-video-camera"></i>
          <span slot="title">Movie</span>
        </nuxt-link>
      </el-menu-item>
      <el-menu-item index="5">
        <nuxt-link to="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">Home</span>
        </nuxt-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

#app {
  top: 20vh;
  z-index: 1;
  position: absolute;
  opacity: 0.2;
}

#app:hover {
  opacity: 0.9;
  transform: scale(1.2, 1.2);
  transition: all 1s ease-out;
}
</style>
<script>
/* eslint-disable */
export default {
  name: 'Guide',
  props: {},
  data() {
    return {
      isCollapse: true,
      labelStatus: false,
      GuideStatus: '收合'
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleClose() {
      console.log('2')
    },
    handleOpen() {
      console.log('3')
    }
  }
}
</script>
