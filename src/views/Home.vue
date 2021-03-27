<template>
  <el-container class="el-headers">
    <el-header style="height:6rem">
      <Headers userName="hhhhhhhhhhhhhhh" :optionList="list" @child="receive"></Headers>
    </el-header>
    <el-container>
      <el-aside class="nav" width="20rem">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <router-link to="/home/index">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>
          <router-link to="/home/studentApply">
            <el-menu-item index="2">
              <i class="el-icon-edit"></i>
              <span slot="title">考勤管理</span>
            </el-menu-item>
          </router-link>
          <router-link to="/home/classManage">
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">班级管理</span>
            </el-menu-item>
          </router-link>
          <router-link to="/home/userManage">
            <el-menu-item index="5">
              <i class="el-icon-user"></i>
              <span>用户管理</span>
            </el-menu-item>
          </router-link>
          <router-link to="/home/fileManage">
            <el-menu-item index="6">
              <i class="el-icon-folder-opened"></i>
              <span>文件管理</span>
            </el-menu-item>
          </router-link>
          <router-link to="/home/setting">
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Headers from "@/components/header.vue";
export default {
  components: {
    Headers,
  },
  data() {
    return {
      list:['退出']
    };
  },
  methods: {
    receive(payload) {
      this.$Message.alert(payload, {
        confirmButtonText: "确定",
        callback: function() {
          console.log("ok");
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  display: block;
}
.el-container {
  height: 100%;
}
.el-menu {
  border-right: none;
  a {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
}
.nav {
  height: 100%;
  background-color: #545c64;
}
.el-header {
  background-color: #ffffff;
  box-shadow: 0px 0px 12px 0px rgba(214, 214, 214, 0.3);
  padding: 0 0;
  height: 6rem;
}
</style>
