<template>
  <div>
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
            <span slot="title">{{ $t('title.music') }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <nuxt-link to="/Piano">{{ $t('piano.piano') }}</nuxt-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <nuxt-link to="/Metronome">{{ $t('piano.Metronome') }}</nuxt-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="2">
          <nuxt-link to="/Photo">
            <i class="el-icon-camera"></i>
            <span slot="title">{{ $t('title.photo') }}</span>
          </nuxt-link>
        </el-menu-item>

        <el-menu-item index="3">
          <nuxt-link to="/Self">
            <i class="el-icon-s-custom"></i>
            <span slot="title">{{ $t('title.aboutMe') }}</span>
          </nuxt-link>
        </el-menu-item>

        <el-menu-item index="4">
          <nuxt-link to="/Movie">
            <i class="el-icon-video-camera"></i>
            <span slot="title">{{ $t('title.movie') }}</span>
          </nuxt-link>
        </el-menu-item>

        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">{{ $t('title.contact') }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">
              <a href="https://github.com/liugoldent" style="color:blue">
                <font-awesome-icon
                  :icon="['fab', 'github-square']"
                  class="icon alt"
                />
                <span slot="title">Github</span>
              </a>
            </el-menu-item>
            <el-menu-item index="5-2">
              <a
                href="https://www.linkedin.com/in/guan-ting-liu-2016a1109/"
                style="color:blue"
              >
                <font-awesome-icon
                  :icon="['fab', 'linkedin']"
                  class="icon alt"
                />
                <span slot="title">Linkedin</span>
              </a>
            </el-menu-item>
            <el-menu-item index="5-3">
              <a href="mailto:liugoldent@gmail.com" style="color:blue">
                <font-awesome-icon
                  :icon="['fas', 'envelope-square']"
                  class="icon alt"
                />
                <span slot="title">Email</span>
              </a>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="6">
          <nuxt-link to="/">
            <i class="el-icon-s-home"></i>
            <span slot="title">{{ $t('title.home') }}</span>
          </nuxt-link>
        </el-menu-item>
      </el-menu>

      <el-menu
        :collapse="isCollapse"
        default-active="1-5-1"
        class="el-menu-vertical globalicon"
      >
        <el-submenu index="1">
          <template slot="title">
            <font-awesome-icon
              :icon="['fas', 'language']"
              class="GlobalIcon icon alt"
            />
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-2">
              <span slot="title" @click="ChangeLanguage('tw')">中文</span>
            </el-menu-item>
            <el-menu-item index="5-2">
              <span slot="title" @click="ChangeLanguage('en')">English</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
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

.globalicon {
  margin-top: 2vh;
}
.GlobalIcon {
  font-size: 18px;
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
    },
    ChangeLanguage(LangStatus) {
      this.$i18n.locale = LangStatus
    }
  }
}
</script>
