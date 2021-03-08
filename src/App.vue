<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  created() {
    var doc = document.body.clientWidth;
    var rem = doc / 192;
    document.documentElement.style.fontSize = rem + "px";
  },
  methods: {
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  font-family: "Hiragino Sans GB";
}
* {
  padding: 0;
  margin: 0;
}
.mask{
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.3);
}
.lines{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
  margin: 2rem 0;
  font-size: 1.8rem;
  .desc{
    width: 10rem;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .imgList{
    display: grid;
    grid-template-columns: repeat(3,27rem);
    grid-template-rows: 27rem;
    row-gap: 1rem;
    column-gap: 1rem;
    img {
      cursor: pointer;
      width: 27rem;
      height: 27rem;
    }
  }
  .buttons{
    width: 20rem;
    height: 4.4rem;
    margin: 0 1rem;
    line-height: 4.4rem;
    background: #409EFF;
    cursor: pointer;
    color: #fff;
    text-align: center;
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  }
}
</style>