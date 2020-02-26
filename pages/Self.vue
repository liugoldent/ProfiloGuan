<template>
  <!-- Histogram -->
  <div id>
    <div id="Guide">
      <Guide />
    </div>
    <div class="content">
      <Skill v-if="ExpSkill" />
      <Exp ref="expcomponent" v-if="!ExpSkill" />
    </div>
    <button @click="CheckoutSkillExp" class="ExpSkillIcon">
      <i v-if="ExpSkill" class="custom-icon el-icon-arrow-right"></i>
      <i v-if="!ExpSkill" class="custom-icon el-icon-arrow-left"></i>
    </button>
    <div id="secretDialog" v-if="!ExpSkill">
      <el-input
        id="secretInput"
        v-model="SECRET"
        placeholder="請輸入四位數密碼"
        show-password
      ></el-input>
      <el-button
        id="secreticon"
        @click="GoShowExp"
        icon="el-icon-position"
        circle
      ></el-button>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Guide from '../components/Guide'
import Skill from './Self/Skill'
import Exp from './Self/Exp'
export default {
  name: 'FourMetronome',
  components: {
    Guide,
    Skill,
    Exp
  },
  props: {},
  data() {
    return {
      ExpSkill: true,
      ExpFilter: false,
      SECRET: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    /**
     * @description 切換經歷或技能
     */
    CheckoutSkillExp() {
      this.ExpSkill = !this.ExpSkill
    },
    /**
     * @description 輸入密碼要做的事
     */
    GoShowExp() {
      if (this.SECRET.length === 4) {
        $('#secretDialog').hide()
        this.$refs.expcomponent.RecoverFilter()
      } else {
        this.$alert('<strong>請輸入 <i>4個字</i> 密碼</strong>', '注意', {
          dangerouslyUseHTMLString: true
        })
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
#AboutExpLiquid {
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
/** 密碼彈出視窗 */
#secretDialog {
  position: absolute;
  display: flex;
  top: 45vh;
  left: 40vw;
  color: rgba(0, 0, 0, 0);
}
</style>
