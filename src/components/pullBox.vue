<template>
  <div class="contentBox" @click="showList">
    <span>{{period==''?'请选择':period}}</span>
    <i class="el-icon-arrow-down" :style="isShow?'transform: rotate(180deg)':''"></i>
    <transition name="pull">
      <div class="settingBox" v-show="isShow">
        <div
          class="options"
          v-for="(item, index) in optionList"
          :key="index"
          @click.self="choose(item)"
        >
          {{ item }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    optionList: {
      type: Array,
      default: (value) => {
        if (value) return [value];
        else return ["7天", "14天"];
      },
    },
  },
  data() {
    return {
      isShow: false,
      period:'',
    };
  },
  methods: {
    showList() {
      this.isShow = !this.isShow;
    },
    choose(value) {
      this.period=value
      this.$emit("click", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.contentBox {
  position: absolute;
  width: 20rem;
  line-height: 4rem;
  background: #fff;
  z-index: 99;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.1);
  span{
    font-size: 1.3rem;
  }
  .el-icon-arrow-down{
      margin-left: 1rem;
      transform: rotate(0);
      transition: 0.5s;
  }
}
.settingBox {
  position: absolute;
  width: 100%;
  overflow: auto;
  max-height: 40rem;
  .options {
    cursor: pointer;
    padding: 0.5rem 0;
    text-align: center;
    font-size: 1.5rem;
    line-height: 3rem;
    background: #fff;
  }
  .options:hover {
    background-color: #BBDCFE;
    transition: .6s;
  }
}
.pull-enter {
  // transform: translateY(-5rem);
  opacity: 0;
}
.pull-enter-active {
  transition: 0.8s;
}
.pull-leave {
}
.pull-leave-active {
  // transform: translateY(-10rem);
  opacity: 0;
  transition: 0.8s;
}
</style>