<template>
  <div id="app">
    <transition name="fade">
      <div id="DegreeButton" v-if="degreestatus">
        <div class="ButtonComp">
          <el-button @click="playSound('S2')" round>小二度</el-button>
          <p class="DegreeP">
            Left Shift<audio
              id="ShiftLeft"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
        <div class="ButtonComp">
          <el-button @click="playSound('B2')" round>大二度</el-button>
          <p class="DegreeP">
            Z
            <audio
              id="KeyZ"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
        <div class="ButtonComp">
          <el-button @click="playSound('S3')" round>小三度</el-button>
          <p class="DegreeP">
            X
            <audio
              id="KeyX"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
        <div class="ButtonComp">
          <el-button @click="playSound('B3')" round>大三度</el-button>
          <p class="DegreeP">
            C<audio
              id="KeyC"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
        <div class="ButtonComp">
          <el-button @click="playSound('F4')" round>完全四度</el-button>
          <p class="DegreeP">
            V
            <audio
              id="KeyV"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
        <div class="ButtonComp">
          <el-button @click="playSound('Add4')" round>增四度</el-button>
          <p class="DegreeP">
            B
            <audio
              id="KeyB"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
        <div class="ButtonComp">
          <el-button @click="playSound('F5')" round>完全五度</el-button>
          <p class="DegreeP">
            N<audio
              id="KeyN"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
        <div class="ButtonComp">
          <el-button @click="playSound('S6')" round>小六度</el-button>
          <p class="DegreeP">
            M<audio
              id="KeyM"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
        <div class="ButtonComp">
          <el-button @click="playSound('B6')" round>大六度</el-button>
          <p class="DegreeP">
            &lt;
            <audio
              id="Comma"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
        <div class="ButtonComp">
          <el-button @click="playSound('S7')" round>小七度</el-button>
          <p class="DegreeP">
            &gt;
            <audio
              id="Period"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
        <div class="ButtonComp">
          <el-button @click="playSound('B7')" round>大七度</el-button>
          <p class="DegreeP">
            /
            <audio
              id="Slash"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
        <div class="ButtonComp">
          <el-button @click="playSound('F8')" round>完全八度</el-button>
          <p class="DegreeP">
            Right Shift
            <audio
              id="ShiftRight"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div id="IntervalButton" v-if="!degreestatus">
        <div class="ButtonComp">
          <el-button @click="playSound('CInterval')" round>C和弦</el-button>
          <p class="DegreeP">
            5
            <audio
              id="Digit5"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
        <div class="ButtonComp">
          <el-button @click="playSound('FInterval')" round>F和弦</el-button>
          <p class="DegreeP">
            6
            <audio
              id="Digit6"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
        <div class="ButtonComp">
          <el-button @click="playSound('GInterval')" round>G和弦</el-button>
          <p class="DegreeP">
            7
            <audio
              id="Digit7"
              :src="MusicUrl"
              class="MusicAudio"
              type="audio/mpeg"
            ></audio>
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import $ from 'jQuery'

export default {
  name: 'PianoButton',
  component: {},
  props: {
    degreestatus: {
      type: Boolean,
      default: true
    },
    soundrange: {
      type: String,
      default: 'Central'
    }
  },
  data() {
    return {
      MusicUrl: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    const self = this
    document.onkeydown = function(e) {
      self.DownFunction(e)
    }
    document.onkeyup = function(e) {
      self.UpFunction(e)
    }
  },
  methods: {
    playSound(SoundType) {
      this.MouseFindUrl(SoundType)
    },
    /**
     * @description 按鍵彈起時做的事
     */
    UpFunction(Event) {
      console.log('this')
      const audio = document.getElementById(`${Event.code}`)
      if (audio == null) {
        return
      }
      const audioSRC = String(audio.src).includes('PianoSound')
      if (!audioSRC) {
        console.log('FatherUpFunction')
        this.$emit('DownFuUpFunctionnction', Event)
      } else {
        console.log('ChildUpFunction')

        this.MusicUrl = ''
        audio.currentTime = 0
        audio.pause()
      }
    },
    /**
     * @description 按鍵按下時做的事
     */
    async DownFunction(Event) {
      await this.KeyBoardFindUrl(Event.code)
      const audio = document.getElementById(`${Event.code}`)
      if (audio == null) {
        return
      }
      const audioSRC = String(audio.src).includes('PianoSound')
      if (!audioSRC) {
        this.$emit('DownFunction', Event)
      } else {
        audio.play()
      }
    },
    KeyDownMove(Event) {
      const EventParent = $(`#${Event}`)
        .parent()
        .parent()
      EventParent.css('color', 'blue')
    },
    /**
     * @description 決定發出哪個聲音的控制（滑鼠控制）
     */
    MouseFindUrl(SoundType) {
      const SounSource = this.degreestatus === true ? 'Degree' : 'Interval'
      const CodeUrl = {
        S2: `PianoSound/${SounSource}/${this.soundrange}/S2.mp3`,
        B2: `PianoSound/${SounSource}/${this.soundrange}/B2.mp3`,
        S3: `PianoSound/${SounSource}/${this.soundrange}/S3.mp3`,
        B3: `PianoSound/${SounSource}/${this.soundrange}/B3.mp3`,
        F4: `PianoSound/${SounSource}/${this.soundrange}/F4.mp3`,
        Add4: `PianoSound/${SounSource}/${this.soundrange}/Add4.mp3`,
        F5: `PianoSound/${SounSource}/${this.soundrange}/F5.mp3`,
        S6: `PianoSound/${SounSource}/${this.soundrange}/S6.mp3`,
        B6: `PianoSound/${SounSource}/${this.soundrange}/B6.mp3`,
        S7: `PianoSound/${SounSource}/${this.soundrange}/S7.mp3`,
        B7: `PianoSound/${SounSource}/${this.soundrange}/B7.mp3`,
        F8: `PianoSound/${SounSource}/${this.soundrange}/F8.mp3`,
        CInterval: `PianoSound/${SounSource}/${this.soundrange}/CInterval.mp3`,
        FInterval: `PianoSound/${SounSource}/${this.soundrange}/FInterval.mp3`,
        GInterval: `PianoSound/${SounSource}/${this.soundrange}/GInterval.mp3`
      }
      this.MusicUrl = CodeUrl[`${SoundType}`] || ''
      console.log('this.MusicUrl', this.MusicUrl)
    },
    /**
     * @description 決定發出哪個聲音的控制（滑鼠控制）
     */
    KeyBoardFindUrl(SoundType) {
      const SounSource = this.degreestatus === true ? 'Degree' : 'Interval'
      const CodeUrl = {
        ShiftLeft: `PianoSound/${SounSource}/${this.soundrange}/S2.mp3`,
        KeyZ: `PianoSound/${SounSource}/${this.soundrange}/B2.mp3`,
        KeyX: `PianoSound/${SounSource}/${this.soundrange}/S3.mp3`,
        KeyC: `PianoSound/${SounSource}/${this.soundrange}/B3.mp3`,
        KeyV: `PianoSound/${SounSource}/${this.soundrange}/F4.mp3`,
        KeyB: `PianoSound/${SounSource}/${this.soundrange}/Add4.mp3`,
        KeyN: `PianoSound/${SounSource}/${this.soundrange}/F5.mp3`,
        KeyM: `PianoSound/${SounSource}/${this.soundrange}/S6.mp3`,
        Comma: `PianoSound/${SounSource}/${this.soundrange}/B6.mp3`,
        Period: `PianoSound/${SounSource}/${this.soundrange}/S7.mp3`,
        Slash: `PianoSound/${SounSource}/${this.soundrange}/B7.mp3`,
        ShiftRight: `PianoSound/${SounSource}/${this.soundrange}/F8.mp3`,
        Digit5: `PianoSound/${SounSource}/${this.soundrange}/CInterval.mp3`,
        Digit6: `PianoSound/${SounSource}/${this.soundrange}/FInterval.mp3`,
        Digit7: `PianoSound/${SounSource}/${this.soundrange}/GInterval.mp3`
      }
      this.MusicUrl = CodeUrl[`${SoundType}`] || ''
    }
  }
}
</script>

<style lang="scss" scoped>
$Whitekeyboardwidth: 7vw;
$WhitekeyboardHeight: 50vh;
@import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC&display=swap');

#app {
  height: $WhitekeyboardHeight / 10;
}
/**度數的按鈕控制 */
#DegreeButton {
  position: relative;
  margin: 0px auto;
}
.ButtonComp {
  display: inline-block;
}
/**和弦的按鈕控制 */
#IntervalButton {
  position: relative;
  margin: 0px auto;
}
.MusicAudio {
  display: none;
}
/**控制Switch開關後的動畫 */
.fade-enter-active {
  transition: opacity 2.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/**提示文字 */
.DegreeP {
  position: relative;
  font-family: 'Playfair Display SC', serif;
  font-weight: bold;
  margin: 0px auto;
  top: 3vh;
  color: red;
  text-align: center;
}
</style>
