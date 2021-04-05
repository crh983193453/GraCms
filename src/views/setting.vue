<template>
  <div>
    <el-collapse
      v-for="(item, index) in fy"
      :key="index"
      v-model="activeNames"
      @change="handleChange"
    >
      <el-collapse-item :title="item.name" :name="index">
        <div
          class="contents"
          v-for="(items, indexs) in item.class"
          :key="indexs"
        >
          <div class="front">
            {{ items }}
          </div>
          <el-tooltip
            class="item"
            effect="dark"
            content="确定不再考虑考虑吗QAQ"
            placement="bottom"
          >
            <el-button
              type="danger"
              style="margin-right: 2%"
              icon="el-icon-delete"
              circle
              @click="del(index,indexs)"
            ></el-button>
          </el-tooltip>
        </div>
        <div>
          <el-tooltip
            class="item"
            effect="dark"
            content="又要有新伙伴了吗 ヾ(❀╹◡╹)ﾉ~ "
            placement="bottom"
          >
          <el-button
            type="primary"
            icon="el-icon-plus"
            circle
            @click="add(index)"
          ></el-button>
          </el-tooltip>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-tooltip
      class="item"
      effect="dark"
      content="点击我添加新分院哦！"
      placement="bottom"
    >
      <el-button
        style="margin-top: 2rem"
        type="primary"
        icon="el-icon-plus"
        circle
        @click="addFy()"
      ></el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      fy: [{ name: "人工智能分院", class: ["软件181"] }],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    add(index) {
      this.$prompt("请输入班级名称", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          console.log(value);
          this.$message({
            type: "success",
            message: "添加成功",
          });
          this.fy[index].class.push(value);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    addFy() {
      this.$prompt("请输入新分院名称", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          console.log(value);
          this.$message({
            type: "success",
            message: "添加成功",
          });
          let param = {
            name: value,
            class: [],
          };
          this.fy.push(param);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    del(index) {
      this.$confirm("确认删除此班级？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.fy.splice(index)
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.contents {
  display: flex;
  align-items: center;
  margin: 2rem 0;
  .front {
    flex: 1;
    font-size: 1.9rem;
  }
}
.el-collapse-item{
  .el-collapse-item__header{
    font-size: 2rem;
  }
}
</style>