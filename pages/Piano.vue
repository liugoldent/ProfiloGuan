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
        <p id="Interval">和弦</p>
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
        <p id="Degree">音程</p>
      </div>
    </div>
    <!-- 底下的button -->
    <div id="PianoButton">
      <transition name="fade">
        <div id="DegreeButton" v-if="SwitchValue">
          <div class="ButtonComp">
            <transition mode="out-in">
              <el-button
                @click="playSound('ShiftLeft')"
                v-if="ShowObj.ShowShiftLeft"
                :disabled="DisableObj.DisableShiftLeft"
                round
                >小二度</el-button
              >
            </transition>
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
            <transition mode="out-in">
              <el-button
                @click="playSound('KeyZ')"
                v-if="ShowObj.ShowKeyZ"
                :disabled="DisableObj.DisableKeyZ"
                round
                >大二度</el-button
              ></transition
            >
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
            <transition mode="out-in">
              <el-button
                @click="playSound('KeyX')"
                v-if="ShowObj.ShowKeyX"
                :disabled="DisableObj.DisableKeyX"
                round
                >小三度</el-button
              ></transition
            >
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
            <transition mode="out-in">
              <el-button
                @click="playSound('KeyC')"
                v-if="ShowObj.ShowKeyC"
                :disabled="DisableObj.DisableKeyC"
                round
                >大三度</el-button
              >
            </transition>
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
            <transition mode="out-in">
              <el-button
                @click="playSound('KeyV')"
                v-if="ShowObj.ShowKeyV"
                :disabled="DisableObj.DisableKeyV"
                round
                >完全四度</el-button
              ></transition
            >
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
            <transition mode="out-in">
              <el-button
                @click="playSound('KeyB')"
                v-if="ShowObj.ShowKeyB"
                :disabled="DisableObj.DisableKeyB"
                round
                >增四度</el-button
              ></transition
            >
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
            <transition mode="out-in">
              <el-button
                @click="playSound('KeyN')"
                v-if="ShowObj.ShowKeyN"
                :disabled="DisableObj.DisableKeyN"
                round
                >完全五度</el-button
              ></transition
            >
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
            <transition mode="out-in">
              <el-button
                @click="playSound('KeyM')"
                v-if="ShowObj.ShowKeyM"
                :disabled="DisableObj.DisableKeyM"
                round
                >小六度</el-button
              ></transition
            >
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
            <transition mode="out-in">
              <el-button
                @click="playSound('Comma')"
                v-if="ShowObj.ShowComma"
                :disabled="DisableObj.DisableComma"
                round
                >大六度</el-button
              ></transition
            >
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
            <transition mode="out-in">
              <el-button
                @click="playSound('Period')"
                v-if="ShowObj.ShowPeriod"
                :disabled="DisableObj.DisablePeriod"
                round
                >小七度</el-button
              ></transition
            >
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
            <transition mode="out-in">
              <el-button
                @click="playSound('Slash')"
                v-if="ShowObj.ShowSlash"
                :disabled="DisableObj.DisableSlash"
                round
                >大七度</el-button
              ></transition
            >
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
            <transition mode="out-in">
              <el-button
                @click="playSound('ShiftRight')"
                v-if="ShowObj.ShowShiftRight"
                :disabled="DisableObj.DisableShiftRight"
                round
                >完全八度</el-button
              ></transition
            >
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
        <div id="IntervalButton" v-if="!SwitchValue">
          <div class="ButtonComp">
            <transition mode="out-in">
              <el-button
                @click="playSound('Digit5')"
                v-if="ShowObj.ShowDigit5"
                :disabled="DisableObj.DisableDigit5"
                round
                >C和弦</el-button
              ></transition
            >
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
            <transition mode="out-in">
              <el-button
                @click="playSound('Digit6')"
                v-if="ShowObj.ShowDigit6"
                :disabled="DisableObj.DisableDigit6"
                round
                >F和弦</el-button
              ></transition
            >
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
            <transition mode="out-in">
              <el-button
                @click="playSound('Digit7')"
                v-if="ShowObj.ShowDigit7"
                :disabled="DisableObj.DisableDigit7"
                round
                >G和弦</el-button
              ></transition
            >
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
  </div>
</template>

<script>
import $ from 'jquery'
import Guide from '../components/Guide'

export default {
  name: 'Piano',
  components: {
    Guide
  },
  props: {},
  data() {
    return {
      SwitchValue: true,
      MusicUrl: '',
      Range: 'Central',
      ButtonBelowArray: [
        'ShiftLeft',
        'KeyZ',
        'KeyX',
        'KeyC',
        'KeyV',
        'KeyB',
        'KeyN',
        'KeyM',
        'Comma',
        'Period',
        'Slash',
        'Digit5',
        'Digit6',
        'Digit7',
        'ShiftRight'
      ],
      playSoundHTML: {},
      ShowObj: {
        ShowShiftLeft: true,
        ShowKeyZ: true,
        ShowKeyX: true,
        ShowKeyC: true,
        ShowKeyV: true,
        ShowKeyB: true,
        ShowKeyN: true,
        ShowKeyM: true,
        ShowComma: true,
        ShowPeriod: true,
        ShowSlash: true,
        ShowShiftRight: true,
        ShowDigit5: true,
        ShowDigit6: true,
        ShowDigit7: true
      },
      DisableObj: {
        DisableShiftLeft: false,
        DisableKeyZ: false,
        DisableKeyX: false,
        DisableKeyC: false,
        DisableKeyV: false,
        DisableKeyB: false,
        DisableKeyN: false,
        DisableKeyM: false,
        DisableComma: false,
        DisablePeriod: false,
        DisableSlash: false,
        DisableShiftRight: false,
        DisableDigit5: false,
        DisableDigit6: false,
        DisableDigit7: false
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    HTMLAudioElement.prototype._play = HTMLAudioElement.prototype.play
    HTMLAudioElement.prototype._load = HTMLAudioElement.prototype.load
    HTMLAudioElement.prototype.play = function() {
      // 禁止load操作
      this._lockLoad = true
      this._play()
    }
    HTMLAudioElement.prototype.load = function() {
      this._lockLoad || this._load()
    }

    const self = this
    document.onkeydown = function(e) {
      self.DownFunction(e.code)
    }
    document.onkeyup = function(e) {
      self.UpFunction(e.code)
    }
    this.ChangeStatus()
    this.RangeBgColor(this.Range)
  },
  methods: {
    /**
     * @description 按下下方按鈕，讓音樂播放
     */
    playSound(SoundType) {
      this.DownFunction(SoundType)
      this.ChangeUpperColorButton(SoundType)
      this.ShowObj[`Show${SoundType}`] = false
      this.ButtonShow(SoundType)
      this.ButtonDisableFalse(SoundType)
    },
    /**
     * @description 按下下方按鈕後，讓上方的按鍵變顏色
     */
    ChangeUpperColorButton(SoundType) {
      const DoThings = this.BelowButtonChangeUpperColor(SoundType)
      for (let i = 0; i < DoThings.length; i++) {
        this.KeyDownMove(DoThings[i])
      }
      this.OriUpperColorButton(DoThings)
    },
    /**
     * @description 在幾秒後，讓上方的按鍵還原顏色
     */
    OriUpperColorButton(DoThings) {
      setTimeout(() => {
        for (let i = 0; i < DoThings.length; i++) {
          this.KeyUpMove(DoThings[i])
        }
      }, 2000)
    },
    /**
     * @description 因為playSound讓按鈕消失，這邊要再讓按鈕長回來
     */
    ButtonShow(SoundType) {
      setTimeout(() => {
        this.DisableObj[`Disable${SoundType}`] = true
        this.ShowObj[`Show${SoundType}`] = true
      })
    },
    /**
     * @description 因為playSound讓按鈕消失，這邊要再讓按鈕功能再回來
     */
    ButtonDisableFalse(SoundType) {
      setTimeout(() => {
        this.DisableObj[`Disable${SoundType}`] = false
      }, 10000)
    },
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
      const audio = document.getElementById(`${Event}`)
      if (audio == null) {
        return
      }
      this.MusicUrl = ''
      this.KeyUpMove(Event)
      if (this.ButtonBelowArray.includes(`${Event}`)) {
        this.ButtonCSSUpFunction(Event)
      } else {
        this.KeyUpMove(Event)
      }
    },
    /**
     * @description 按鍵按下時做的事
     */
    async DownFunction(Event) {
      await this.FindUrl(Event)
      const audio = document.getElementById(`${Event}`)
      if (audio == null) {
        return
      }
      if (this.ButtonBelowArray.includes(`${Event}`)) {
        this.ButtonCSSDownFunction(Event)
      } else {
        this.KeyDownMove(Event)
      }
      // audio.load()
      const AudioPromise = audio.play()

      if (AudioPromise !== undefined) {
        AudioPromise.then((_) => {
          // audio.pause()
          console.log('_', _)
        }).catch((error) => {
          console.log('error', error)
        })
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
     * @description 鋼琴鍵按鍵按下時，上方琴鍵css改變的樣子
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
     * @description 下方按鈕按下時，css改變的樣子function
     */
    ButtonCSSDownFunction(EventKey) {
      const EventKeyButton = $(`#${EventKey}`)
        .parent()
        .prev()
      EventKeyButton.css('background-color', 'red')
      EventKeyButton.css('opacity', '0.8')
      EventKeyButton.css('color', 'white')
    },
    /**
     * @description 下方按鈕彈起時，css改變的樣子function
     */
    ButtonCSSUpFunction(EventKey) {
      const EventKeyButton = $(`#${EventKey}`)
        .parent()
        .prev()
      EventKeyButton.css('background-color', 'white')
      EventKeyButton.css('opacity', '1')
      EventKeyButton.css('color', 'black')
    },
    /**
     * @description 決定發出哪個聲音的控制
     */
    FindUrl(Code) {
      const SoundType = this.SwitchValue ? 'Degree' : 'Interval'
      const CodeUrl = {
        KeyA: `PianoSound/Single/${this.Range}/LowFa.mp3`,
        KeyW: `PianoSound/Single/${this.Range}/LowSharpFa.mp3`,
        KeyS: `PianoSound/Single/${this.Range}/LowSol.mp3`,
        KeyE: `PianoSound/Single/${this.Range}/LowSharpSol.mp3`,
        KeyD: `PianoSound/Single/${this.Range}/LowLa.mp3`,
        KeyR: `PianoSound/Single/${this.Range}/LowSharpLa.mp3`,
        KeyF: `PianoSound/Single/${this.Range}/LowSi.mp3`,
        KeyG: `PianoSound/Single/${this.Range}/Do.mp3`,
        KeyU: `PianoSound/Single/${this.Range}/SharpDo.mp3`,
        KeyJ: `PianoSound/Single/${this.Range}/Re.mp3`,
        KeyI: `PianoSound/Single/${this.Range}/SharpRe.mp3`,
        KeyK: `PianoSound/Single/${this.Range}/Mi.mp3`,
        KeyL: `PianoSound/Single/${this.Range}/Fa.mp3`,
        KeyO: `PianoSound/Single/${this.Range}/SharpFa.mp3`,
        Semicolon: `PianoSound/Single/${this.Range}/Sol.mp3`,
        KeyP: `PianoSound/Single/${this.Range}/SharpSol.mp3`,
        Quote: `PianoSound/Single/${this.Range}/La.mp3`,
        ShiftLeft: `PianoSound/${SoundType}/${this.Range}/S2.mp3`,
        KeyZ: `PianoSound/${SoundType}/${this.Range}/B2.mp3`,
        KeyX: `PianoSound/${SoundType}/${this.Range}/S3.mp3`,
        KeyC: `PianoSound/${SoundType}/${this.Range}/B3.mp3`,
        KeyV: `PianoSound/${SoundType}/${this.Range}/F4.mp3`,
        KeyB: `PianoSound/${SoundType}/${this.Range}/Add4.mp3`,
        KeyN: `PianoSound/${SoundType}/${this.Range}/F5.mp3`,
        KeyM: `PianoSound/${SoundType}/${this.Range}/S6.mp3`,
        Comma: `PianoSound/${SoundType}/${this.Range}/B6.mp3`,
        Period: `PianoSound/${SoundType}/${this.Range}/S7.mp3`,
        Slash: `PianoSound/${SoundType}/${this.Range}/B7.mp3`,
        ShiftRight: `PianoSound/${SoundType}/${this.Range}/F8.mp3`,
        Digit5: `PianoSound/${SoundType}/${this.Range}/CInterval.mp3`,
        Digit6: `PianoSound/${SoundType}/${this.Range}/FInterval.mp3`,
        Digit7: `PianoSound/${SoundType}/${this.Range}/GInterval.mp3`
      }
      this.MusicUrl = CodeUrl[Code] || ''
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
    },
    /**
     * @description 按下下方按鈕後，更改上方按鍵的顏色
     */
    BelowButtonChangeUpperColor(SourceType) {
      const Type = {
        ShiftLeft: ['KeyG', 'KeyU'],
        KeyZ: ['KeyG', 'KeyJ'],
        KeyX: ['KeyG', 'KeyI'],
        KeyC: ['KeyG', 'KeyK'],
        KeyV: ['KeyG', 'KeyL'],
        KeyB: ['KeyG', 'KeyO'],
        KeyN: ['KeyG', 'Semicolon'],
        KeyM: ['KeyG', 'KeyP'],
        Comma: ['KeyG', 'Quote'],
        Period: ['KeyG', 'KeyR'],
        Slash: ['KeyG', 'KeyF'],
        ShiftRight: ['KeyG', 'KeyG'],
        Digit5: ['KeyG', 'KeyK', 'Semicolon'],
        Digit6: ['KeyJ', 'KeyL', 'Quote'],
        Digit7: ['KeyS', 'KeyF', 'KeyJ']
      }
      const KeyThings = [...Type[`${SourceType}`]]
      return KeyThings
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC&display=swap');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+HK&display=swap');
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
  font-size: 3vh;
  color: white;
  font-family: 'Noto Sans HK', sans-serif;
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

/**底下按鈕的樣式 */
#PianoButton {
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

.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 5s;
}
.v-enter-to {
  opacity: 1;
}
</style>
