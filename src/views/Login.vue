<template>
  <div class="bg">
    <div class="form">
      <transition name="imgPush">
        <div class="mid" v-show="!isReg">
          <img src="../static/img/4.jpg" alt="" />
        </div>
      </transition>
      <transition name="push">
        <div class="left" v-show="!isReg">
          <h1>邮院勤工</h1>
          <div class="options">
            <div class="desc">
              <i class="el-icon-user"></i>
            </div>
            <el-input v-model="name" placeholder="请输入账号"></el-input>
          </div>
          <div class="options">
            <div class="desc">
              <i class="el-icon-lock"></i>
            </div>
            <el-input
              v-model="password"
              type="password"
              placeholder="请输入密码"
            ></el-input>
          </div>
          <div class="options">
            <div class="forget" @click="forget">忘记密码</div>
          </div>
          <div class="options">
            <el-button type="primary" @click="logins">登陆</el-button>
          </div>
          <div class="options">
            <span class="reg" @click="Qh"> 去注册 </span>
            <div class="desc">
              <i class="el-icon-caret-bottom"></i>
            </div>
          </div>
        </div>
      </transition>
      <transition name="push">
        <div class="left" v-show="isReg">
          <h1>邮院勤工</h1>
          <div class="options">
            <div class="desc">
              <i class="el-icon-user"></i>
            </div>
            <el-input v-model="name" placeholder="请输入账号"></el-input>
          </div>
          <div class="options">
            <div class="desc">
              <i class="el-icon-lock"></i>
            </div>
            <el-input
              v-model="password"
              type="password"
              placeholder="请输入密码"
            ></el-input>
          </div>
          <div class="options">
            <div class="desc">
              <i class="el-icon-lock"></i>
            </div>
            <el-input
              v-model="passwordAgain"
              type="password"
              placeholder="请再次输入密码"
            ></el-input>
          </div>
          <div class="options">
            <el-button type="primary" @click="register">注册</el-button>
          </div>
          <div class="options">
            <span class="reg" @click="Qh"> 去登陆 </span>
            <div class="desc">
              <i class="el-icon-caret-bottom"></i>
            </div>
          </div>
        </div>
      </transition>
      <transition name="imgPush">
        <div class="mid" v-show="isReg">
          <img src="../static/img/Navy.jpg" alt="" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {api} from "@/api/api.js";
export default {
  data() {
    return {
      isReg: true,
      name: "",
      password: "",
      passwordAgain: "",
    };
  },
  methods: {
    async logins(){
      let param={
        userAccount:this.name,
        userPassword:this.password
      }
      const result = await api.login(param)
      localStorage.setItem("session",result.data)
      this.$router.push({name:'Home'})
    },
    Qh() {
      this.isReg = !this.isReg;
    },
    async register() {
      if (this.isReg) {
        if (this.password != this.passwordAgain) {
          this.$messageBox.alert("两次密码输入不一致！", "错误", {
            confirmButtonText: "明白",
            callback: (res) => {
              console.log(res);
              this.$message.error("请重新输入");
            },
          });
          return;
        } else {
          let param={
            userAccount:this.name,
            userPassword:this.passwordAgain
          }
          const result = await api.register(param)
          localStorage.setItem("session",result.data)
          this.$router.push({name:'Home'})
        }
      } else {
        this.$message.success("登陆成功");
        this.$router.push({ name: "Home" });
      }
    },
    forget() {
      this.$messageBox.alert("已申请重置密码", "重置", {
        confirmButtonText: "明白",
        callback: () => {
          this.$message.success("操作成功");
        },
      });
    },
  },
};
</script>

<style lang="scss">
.bg {
  height: 100vh;
  background: url("../static/img/Navy.jpg");
  z-index: -1;
}
.form {
  display: flex;
  align-items: center;
  position: relative;
  left: 15%;
  top: 10%;
  padding: 2rem 4rem;
  width: 130rem;
  height: 70rem;
  background: #fff;
  border-radius: 1rem 1rem 1rem 1rem;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
  .left {
    width: 50rem;
    margin-right: 1rem;
    align-self: flex-start;
    flex-shrink: 0;
    text-align: center;
    margin-top: 10rem;
    h1 {
      font-size: 2rem;
    }
    i {
      font-size: 3rem;
    }
    .options {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin: 5rem 0;
      .el-input {
        margin-left: 2rem;
        width: 30rem;
      }
      .el-button {
        width: 30rem;
      }
      .el-button:hover {
        opacity: 0.6;
      }
      .reg {
        cursor: pointer;
        font-size: 2rem;
        font-weight: 600;
      }
      .desc {
        transform: rotate(0deg);
        transition: 0.3s;
      }
      .forget {
        cursor: pointer;
        font-size: 1.6rem;
      }
      .reg:hover + .desc {
        transform: rotate(-90deg);
        transition: 0.3s;
      }
    }
  }
  .mid {
    width: 80rem;
    height: 100%;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.4rem 0.4rem 0.4rem 0.4rem;
    }
  }
  .push-enter {
    position: absolute;
    transform: translateX(-100px);
    opacity: 0.5;
  }
  .push-enter-to {
    transition: 1.3s;
    opacity: 1;
  }
  .push-leave {
    opacity: 0;
  }
  .push-leave-to {
    position: absolute;
    transform: translateX(100px);
    transition: 1.3s;
    opacity: 0;
  }
  .imgPush-enter {
    position: absolute;
    transform: translateX(-100px);
    opacity: 0.5;
  }
  .imgPush-enter-to {
    transition: 1.3s;
    opacity: 1;
  }
  .imgPush-leave {
    opacity: 0;
  }
  .imgPush-leave-to {
    position: absolute;
    transform: translateX(500px);
    transition: 1.3s;
    opacity: 0;
  }
}
</style>
