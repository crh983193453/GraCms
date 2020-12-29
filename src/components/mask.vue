<template>
  <transition name="out">
    <div class="mask" @click="noShow" v-if="isShow">
      <div class="preImg">
        <slot> </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    noShow(){
      this.$emit('update:isShow',!this.isShow)
    }
  },
};
</script>

<style lang="scss">
.mask {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.preImg {
  position: absolute;
  left: 48rem;
  top: 8rem;
  background: #fff;
  width: 100rem;
  height: 70rem;
  img{
    width:inherit;
    height: 100%;
  }
}
.out-enter {
  opacity: 0;
  transform: translateY(-1rem);
}
.out-enter-active {
  transition: 0.2s;
}
.out-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}
.out-leave-active {
  transition: 0.5s;
}
</style>