<template>
  <div class="All">
    <div id="Guide">
      <Guide />
    </div>
    <!-- 鍵盤按鍵 -->
    <div id="PianoBg">
      <div id="WhitePianoKey">
        <el-tooltip class="item" effect="light" content="Fa" placement="bottom">
          <div class="RightBlack">
            <p class="whiteFont">
              A<audio
                id="KeyA"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="#Fa" placement="top">
          <div class="BlackKeyBoard">
            <p class="BlackFont">
              W
              <audio
                id="KeyW"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="light"
          content="Sol"
          placement="bottom"
        >
          <div class="Middle">
            <p class="whiteFont">
              S
              <audio
                id="KeyS"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="#Sol" placement="top">
          <div class="BlackKeyBoard">
            <p class="BlackFont">
              E<audio
                id="KeyE"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="La" placement="bottom">
          <div class="Middle">
            <p class="whiteFont">
              D<audio
                id="KeyD"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="#La" placement="top">
          <div class="BlackKeyBoard">
            <p class="BlackFont">
              R<audio
                id="KeyR"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="Si" placement="bottom">
          <div class="LeftBlack">
            <p class="whiteFont">
              F<audio
                id="KeyF"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>

        <el-tooltip class="item" effect="light" content="Do" placement="bottom">
          <div class="RightBlack">
            <p class="whiteFont">
              G
              <audio
                id="KeyG"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="#Do" placement="top">
          <div class="BlackKeyBoard">
            <p class="BlackFont">
              U<audio
                id="KeyU"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="Re" placement="bottom">
          <div class="Middle">
            <p class="whiteFont">
              J<audio
                id="KeyJ"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="#Re" placement="top">
          <div class="BlackKeyBoard">
            <p class="BlackFont">
              I<audio
                id="KeyI"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="Mi" placement="bottom">
          <div class="LeftBlack">
            <p class="whiteFont">
              K<audio
                id="KeyK"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="Fa" placement="bottom">
          <div class="RightBlack">
            <p class="whiteFont">
              L<audio
                id="KeyL"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="#Fa" placement="top">
          <div class="BlackKeyBoard">
            <p class="BlackFont">
              O<audio
                id="KeyO"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="light"
          content="Sol"
          placement="bottom"
        >
          <div class="Middle">
            <p class="whiteFont">
              ;<audio
                id="Semicolon"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="#Sol" placement="top">
          <div class="BlackKeyBoard">
            <p class="BlackFont">
              P<audio
                id="KeyP"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="La" placement="bottom">
          <div class="LeftBlack">
            <p class="whiteFont">
              '<audio
                id="Quote"
                :src="MusicUrl"
                class="MusicAudio"
                type="audio/mpeg"
              ></audio>
            </p>
          </div>
        </el-tooltip>
      </div>
    </div>
    <!-- 高低音button -->
    <div class="buttonposition">
      <el-tooltip class="item" effect="dark" content="高八度" placement="top">
        <button @click="ChangeHighLow('Higher')" class="iconbuttonup">
          <i class="custom-icon el-icon-arrow-up"></i>
        </button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="中音域" placement="left">
        <button @click="ChangeHighLow('Central')" class="iconbuttonCentral">
          <i class="custom-icon el-icon-minus"></i>
        </button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="低八度"
        placement="bottom"
      >
        <button @click="ChangeHighLow('Lower')" class="iconbuttondown">
          <i class="custom-icon el-icon-arrow-down"></i>
        </button>
      </el-tooltip>
    </div>
    <!-- 音程與度數的切換 -->
    <div class="SwitchbuttonDiv">
      <div class="SwitchText">
        <p id="Interval">音程</p>
      </div>
      <div class="SwitchText">
        <el-switch
          v-model="SwitchValue"
          :width="50"
          @change="ChangeStatus"
          active-color="#2980B9"
          inactive-color="#9B59B6"
        ></el-switch>
      </div>
      <div class="SwitchText">
        <p id="Degree">度數</p>
      </div>
    </div>
    <div id="PianoButton">
      <PianoButton
        ref="PianoButton"
        :degreestatus="SwitchValue"
        :soundrange="Range"
        @DownFunction="DownFunction"
        @UpFunction="UpFunction"
      />
    </div>
  </div>
</template>

<script>
import $ from 'jQuery'
import Guide from '../components/Guide'
import PianoButton from '../components/PianoButton'

export default {
  name: 'Piano',
  components: {
    Guide,
    PianoButton
  },
  props: {},
  data() {
    return {
      SwitchValue: true,
      MusicUrl: '',
      Range: 'Central'
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
    this.ChangeStatus()
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
     * @description 按鍵彈起時做的事
     */
    UpFunction(Event) {
      const self = this
      const audio = document.getElementById(`${Event.code}`)
      if (audio == null) {
        return
      }
      const audioSRC = String(audio.src).includes('PianoSound')
      if (!audioSRC) {
        self.$refs.PianoButton.UpFunction(Event)
      } else {
        this.MusicUrl = ''
        this.KeyUpMove(Event.code)
        audio.currentTime = 0
        audio.pause()
      }
    },
    /**
     * @description 按鍵按下時做的事
     */
    async DownFunction(Event) {
      const self = this
      await this.FindUrl(Event)
      const audio = document.getElementById(`${Event.code}`)
      if (audio == null) {
        return
      }
      const audioSRC = String(audio.src).includes('PianoSound')
      if (!audioSRC) {
        self.$refs.PianoButton.DownFunction(Event)
      } else {
        this.KeyDownMove(Event.code)
        audio.play()
      }
    },
    /**
     * @description 按鍵起來時，css改變的樣子
     */
    KeyUpMove(Event) {
      const CheckDivStyle = $(`#${Event}`)
        .parent()
        .is('.whiteFont')
      const DivStyle = $(`#${Event}`)
        .parent()
        .parent()
      if (CheckDivStyle) {
        DivStyle.css('background-color', 'white')
        DivStyle.css('opacity', '1')
      } else {
        DivStyle.css('background-color', 'black')
        DivStyle.css('opacity', '1')
      }
    },
    /**
     * @description 按鍵按下時，css改變的樣子
     */
    KeyDownMove(Event) {
      const CheckDivStyle = $(`#${Event}`)
        .parent()
        .is('.whiteFont')
      const DivStyle = $(`#${Event}`)
        .parent()
        .parent()
      if (CheckDivStyle) {
        DivStyle.css('background-color', '#2980B9')
        DivStyle.css('opacity', '0.8')
      } else {
        DivStyle.css('background-color', 'red')
        DivStyle.css('opacity', '0.5')
      }
    },
    /**
     * @description 決定發出哪個聲音的控制
     */
    FindUrl(Code) {
      const CodeUrl = {
        // A
        'KeyA': `PianoSound/Single/${this.Range}/LowFa.mp3`,
        // W
        'KeyW': `PianoSound/Single/${this.Range}/LowSharpFa.mp3`,
        // S
        'KeyS': `PianoSound/Single/${this.Range}/LowSol.mp3`,
        // E
        'KeyE': `PianoSound/Single/${this.Range}/LowSharpSol.mp3`,
        // D
        'KeyD': `PianoSound/Single/${this.Range}/LowLa.mp3`,
        // R
        '82': `PianoSound/Single/${this.Range}/LowSharpLa.mp3`,
        // F
        '70': `PianoSound/Single/${this.Range}/LowSi.mp3`,
        // G
        '71': `PianoSound/Single/${this.Range}/Do.mp3`,
        // U
        '85': `PianoSound/Single/${this.Range}/SharpDo.mp3`,
        // J
        '74': `PianoSound/Single/${this.Range}/Re.mp3`,
        // I
        '73': `PianoSound/Single/${this.Range}/SharpRe.mp3`,
        // K
        '75': `PianoSound/Single/${this.Range}/Mi.mp3`,
        // L
        '76': `PianoSound/Single/${this.Range}/Fa.mp3`,
        // O
        '79': `PianoSound/Single/${this.Range}/SharpFa.mp3`,
        // ;
        '186': `PianoSound/Single/${this.Range}/Sol.mp3`,
        // P
        '80': `PianoSound/Single/${this.Range}/SharpSol.mp3`,
        // '
        '222': `PianoSound/Single/${this.Range}/La.mp3`
      }
      this.MusicUrl = CodeUrl[Code.keyCode] || ''
    },
    ChangeStatus() {
      if (!this.SwitchValue) {
        $('#Interval').css('color', '#9B59B6')
        $('#Degree').css('color', 'black')
      } else {
        $('#Degree').css('color', '#2980B9')
        $('#Interval').css('color', 'black')
      }
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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC&display=swap');
$Whitekeyboardwidth: 7vw;
$WhitekeyboardHeight: 50vh;
$KeyBoardMarginTop: 18vh;
$KeyBoardMarginLeft: 13.5vw;
.All {
  height: 100vh;
}
/*所有的Piano 琴鍵 */
#PianoBg {
  background-color: black;
  height: 100vh;
  width: 100vw;
  position: relative;
}
/*白色Piano 琴鍵 */
#WhitePianoKey {
  border-style: solid;
  border-width: 1px;
  margin-top: $KeyBoardMarginTop;
  margin-left: $KeyBoardMarginLeft;
  position: absolute;
}
/*白色 Piano 琴鍵（右黑） */
.RightBlack {
  display: inline-block;
  position: relative;
  background-color: white;
  width: $Whitekeyboardwidth;
  height: $WhitekeyboardHeight;
  transition-duration: 2s;
  clip-path: polygon(
    0 0,
    75% 0,
    75% 70%,
    100% 70%,
    100% 100%,
    0 100%,
    0 55%,
    0 49%
  );
}
.RightBlack:hover {
  cursor: pointer;
  transform: translateY(2vh);
}
/*白色 Piano 琴鍵（左黑） */
.LeftBlack {
  @extend .RightBlack;
  clip-path: polygon(
    25% 0,
    25% 0,
    100% 0,
    100% 45%,
    100% 100%,
    0 100%,
    0 70%,
    25% 70%
  );
}
/*白色 Piano 琴鍵（中黑） */
.Middle {
  @extend .RightBlack;
  clip-path: polygon(
    25% 0,
    75% 0,
    75% 70%,
    100% 70%,
    100% 100%,
    0 100%,
    0 70%,
    25% 70%
  );
}
/** 黑鍵群組 */
.BlackKeyBoard {
  width: $Whitekeyboardwidth * 0.5;
  height: $WhitekeyboardHeight * 0.7;
  position: absolute;
  background-color: black;
  display: inline-block;
  margin-top: 0vh;
  margin-left: $Whitekeyboardwidth / -3.75;
  transition-duration: 1s;
}
.BlackKeyBoard:hover {
  background-color: red;
  opacity: 0.5;
  cursor: pointer;
  transform: translateY(-2vh);
}
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
  transform: translateY(-2vh);
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
  transform: translateY(2vh);
}

.iconbuttonCentral {
  @extend .iconbuttonup;
  top: 6vh;
}
.iconbuttonCentral:hover {
  cursor: pointer;
  transform: translateX(2vh);
}
/**黑鍵 白鍵 上的文字 */
.whiteFont {
  width: $Whitekeyboardwidth / 2;
  position: absolute;
  margin-left: $Whitekeyboardwidth / 4;
  margin-right: $Whitekeyboardwidth / 4;
  bottom: 2vh;
  font-family: 'Playfair Display SC', serif;
  font-size: 6vh;
  text-align: center;
}
.BlackFont {
  width: $Whitekeyboardwidth / 2;
  position: absolute;
  margin: 0px auto;
  top: 2vh;
  font-family: 'Playfair Display SC', serif;
  font-size: 6vh;
  text-align: center;
  color: white;
}
/**切換音程度數的按鈕 */
.SwitchbuttonDiv {
  display: flex;
  position: absolute;
  margin: 0px 41vw;
  top: $WhitekeyboardHeight + $KeyBoardMarginTop + 5vh;
}
.SwitchText {
  text-align: center;
  width: 8vh;
  margin-left: 1vw;
  margin-right: 1vw;
  font-size: 4vh;
  color: white;
  font-family: 'Playfair Display SC', serif;
}
/**播放音樂的Audio不要顯示 */
.MusicAudio {
  display: none;
}
#PianoButton {
  position: relative;
  top: -100vh + $WhitekeyboardHeight + $KeyBoardMarginTop + 5vh + 10vh;
  display: flex;
  justify-content: center;
}
</style>
