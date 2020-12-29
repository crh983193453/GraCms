<template>
  <div class="headers">
    <div class="logo">
      <img src="@/static/img/5.jpg" alt="" srcset="" />
    </div>
    <div class="userBox">
      <div class="avator">
        <img src="@/static/img/1.jpg" alt="" srcset="" />
      </div>
      <div class="userName" @click="show">
        <span>
          {{userName}}
        </span>
      </div>
        <i class="el-icon-caret-bottom"></i>
      <transition name="pull">
        <div class="settingBox" v-show="isShow">
          <div class="options" v-for="(item,index) in optionList" :key="index" @click="logOut">
            {{item}}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: "Admin",
    },
    optionList:{
      type:Array,
      default:(val)=>{
        console.log(val)
        return [val]
      }
    }
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    },
    logOut(){
      this.$router.push({name:'Login'})
    }
  },
};
</script>

<style lang="scss" scoped>
.headers {
  position: absolute;
  top: 0;
  left: 0;
  height: inherit;
  .logo {
    float: left;
    img {
      width: 20rem;
      height: 6rem;
    }
  }
  .userBox {
    position: relative;
    left: 150rem;
    display: flex;
    align-items: center;
    height: inherit;
    img {
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 50%;
    }
    .userName {
      margin-left: 1rem;
      width: 10rem;
      font-weight: 600;
      font-size: 2.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .userName:hover > span {
      cursor: pointer;
      color: #69aef5;
      
    }
  }
  .settingBox {
    width: 100%;
    top: 5rem;
    overflow: hidden;
    position: absolute;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .options{
      cursor: pointer;
      padding: 0.5rem 0;
      text-align: center;
      font-size: 1.5rem;
      line-height: 3rem;
    }
    .options:hover{
      background-color: hsla(210, 81%, 79%, 0.897);
      box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.5);
    }
  }
  .pull-enter{
    // transform: translateY(-5rem);
    opacity: 0;
  }
  .pull-enter-active{
    transition: 1s;
  }
  .pull-leave{

  }
  .pull-leave-active{
    // transform: translateY(-10rem);
    opacity: 0;
    transition: 1s;
  }
}
</style>
