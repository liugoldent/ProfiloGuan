<template>
  <div class="container">
    <div id="Guide">
      <Guide />
    </div>
    <div id="HomeBg">
      <div id="content">
        <div id="CircleBg" />
        <div id="contentText">
          <h1 class="title">Guan-Ting Liu</h1>
          <h2 class="subtitle">PORTFOLIO</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Guide from '@/components/Guide'
export default {
  components: {
    Guide
  },
  data() {
    return {
      files: [
        {
          picture: '../static/Home.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC&display=swap');
$CircleBgSize: 500px;
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Playfair Display SC', serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #fcfcfc;
  letter-spacing: 1px;
}

.subtitle {
  font-family: 'Playfair Display SC', serif;
  font-weight: 300;
  font-size: 42px;
  color: #fcfcfc;
  word-spacing: 5px;
  padding-bottom: 15px;
}

#HomeBg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url('~assets/Home.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
  width: 100vw;
  animation: Imgmove 120s linear infinite;
  background-repeat: repeat-y;
}
@keyframes Imgmove {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 0% 200%;
  }
}

#content {
  margin: 0px auto;
  position: relative;
}
#CircleBg {
  margin: 0px auto;
  width: $CircleBgSize;
  height: $CircleBgSize;
  border-radius: 999em;
  background-color: rgb(39, 6, 158);
  opacity: 0.4;
  top: 50%;
  transform: translate(0%, 30%);
}

#contentText {
  position: relative;
  top: 50%;
  transform: translate(0%, -85%);
}
</style>
