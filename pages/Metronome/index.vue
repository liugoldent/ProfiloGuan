<template>
  <div class="All">
    <div id="container">
      <!-- Guide -->
      <div id="Guide">
        <Guide />
      </div>
      <!-- Move -->
      <div id="Echarts">
        <ThreeHistogram
          v-if="ThreeStatus"
          @beatplay="BeatVoice($event)"
          :speed="Speed"
          :play="Play"
        />
        <FourHistogram
          v-if="!ThreeStatus"
          @beatplay="BeatVoice($event)"
          :speed="Speed"
          :play="Play"
        />
      </div>
      <div id="SpeedControl">
        <el-slider
          v-model="Speed"
          :step="4"
          :min="40"
          :max="180"
          vertical
          class="elslider"
          height="70vh"
        >
        </el-slider>
        <el-button
          v-if="Play"
          @click="ChangePlayStatus"
          class="CaretButton"
          icon="el-icon-video-play"
          circle
          size="mini"
        ></el-button>
        <el-button
          v-if="!Play"
          @click="ChangePlayStatus"
          class="CaretButton"
          icon="el-icon-video-pause"
          circle
          size="mini"
        ></el-button>
        <!-- 3/4 拍 & 4/4拍 的切換 -->
        <div class="SwitchbuttonDiv">
          <el-radio-group v-model="SwitchBeat" @change="ChangeBeat" size="mini">
            <el-radio-button id="ThreeSlashFlour" label="3/4"></el-radio-button>
            <el-radio-button id="FourSlashFour" label="4/4"></el-radio-button>
          </el-radio-group>
        </div>
        <audio
          id="Beat"
          src="~/static/BeatSound/Beat.mp3"
          class="MusicAudio"
          type="audio/mpeg"
        ></audio>
      </div>
    </div>
  </div>
</template>

<script>
import ThreeHistogram from './ThreeHistogram'
import FourHistogram from './FourHistogram'
import Guide from '~/components/Guide'
export default {
  name: 'Metronome',
  components: {
    Guide,
    ThreeHistogram,
    FourHistogram
  },
  props: {},
  data() {
    return {
      Speed: 0,
      Play: true,
      SwitchBeat: '3/4',
      ThreeStatus: true,
      MusicUrl: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    /**
     * @description 開啟關閉播放鍵
     */
    ChangePlayStatus() {
      this.Play = !this.Play
    },
    /**
     * @description 切換 3/4 拍 or 4/4 拍
     */
    ChangeBeat() {
      this.Play = true
      this.ThreeStatus = !this.ThreeStatus
    },
    /**
     * 置入節拍器的聲音
     */
    BeatVoice(Time) {
      if (!this.play) {
        const audio = document.getElementById('Beat')
        audio.play()
        setTimeout(() => {
          audio.currentTime = 0
          audio.pause()
        }, 330)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC&display=swap');
$Whitekeyboardwidth: 7vw;
$WhitekeyboardHeight: 50vh;
$KeyBoardMarginTop: 18vh;
$KeyBoardMarginLeft: 13.5vw;
.All {
  height: 100vh;
}
/*最外層 Div 的設定 */
#container {
  background-color: black;
  height: 100vh;
  width: 100vw;
  position: relative;
}
.Echarts {
  width: 100vw;
}
/** 速度控制 */
#SpeedControl {
  position: absolute;
  top: 8vh;
  right: 8vw;
  height: 85vh;
  text-align: center;
}
.elslider {
  display: flex;
  align-items: center;
  justify-content: center;
}
/** 按鈕樣式 */
.CaretButton {
  position: relative;
  background-color: black;
  border: none;
  margin-top: 2vh;
  font-size: 5vh;
}
/**3/4拍 4/4拍的切換 */
.SwitchbuttonDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 2vh;
}
/**讓Audio消失 */
.MusicAudio {
  display: none;
}
</style>
