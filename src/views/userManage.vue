<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="创建日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.name }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="所在分院">
        <template slot-scope="scope">
          {{ scope.row.fy }}
        </template>
      </el-table-column>
      <el-table-column label="所在班级">
        <template slot-scope="scope">
          {{ scope.row.bj }}
        </template>
      </el-table-column>
      <el-table-column label="用户权限">
        <template slot-scope="scope">
          {{ scope.row.power == 1 ? "管理员" : "用户" }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" @click="handelReSet(scope.$index, scope.row)"
            >重置密码</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="重置密码" :visible.sync="resetPwdPop" width="30%">
      <span>确认要重置密码吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetPwdPop = false">取 消</el-button>
        <el-button type="primary" @click="resetPwd">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="删除" :visible.sync="delUserPop" width="30%">
      <span>确认要删除该管理员吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delUserPop = false">取 消</el-button>
        <el-button type="primary" @click="delUser">确 定</el-button>
      </span>
    </el-dialog>
    <Modal :isShow.sync="editPop">
      <div v-if="editPop">
        <div class="infos">
          <div class="desc">
            所在分院:
            <Pull-box style="left:15rem;text-align:center;z-index:99" :optionList="fyList" @click="fyChoose"></Pull-box>
          </div>
          <div class="desc">
            所在班级:
            <Pull-box style="left:15rem;text-align:center;z-index:98" :optionList="bjList" @click="bjChoose"></Pull-box>
          </div>
          <div class="desc">
            权限设置:
            <Pull-box style="left:15rem;text-align:center;z-index:97" :optionList="powerList" @click="powerChoose"></Pull-box>
          </div>
          <el-button type="primary" @click="updateUser">修改</el-button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import modal from "../components/modal.vue";
import pullBox from "../components/pullBox.vue";
export default {
  components: {
    modal,
    pullBox
  },
  data() {
    return {
      dialogVisible: false,
      delUserPop: false,
      resetPwdPop: false,
      editPop: false,
      handelIndex: "",
      handelRow: "",
      fyList:["人工智能分院","经济管理分院","电子信息分院"],
      bjList:[1,2,3,4,5,6,7,7,8,67,767,6,76,7,67,67],
      powerList:['用户','管理员'],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          fy: "人工智能分院",
          bj: "软件181",
          power: "0",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      this.editPop=true
      this.handelIndex = index;
      this.handelRow = row;
    },
    handleDelete(index, row) {
      this.delUserPop = true;
      this.handelIndex = index;
      this.handelRow = row;
    },
    handelReSet(index, row) {
      this.resetPwdPop = true;
      this.handelIndex = index;
      this.handelRow = row;
    },
    resetPwd() {
      this.$message.success("重置密码成功");
      this.resetPwdPop = false;
    },
    delUser() {
      this.tableData.splice(this.handelIndex);
      this.$message.success("删除成功");
      this.delUserPop = false;
    },
    updateUser(){
      this.editPop=false
      this.$message.success("修改成功");
    },
    fyChoose(e){
      this.tableData[this.handelIndex].fy=e        
    },
    bjChoose(e){
      this.tableData[this.handelIndex].bj=e      
    },
    powerChoose(e){
      this.tableData[this.handelIndex].power= e=='管理员'?'1':'0'
    },
  },
};
</script>
<style lang="scss">
.infos {
  position: absolute;
  top: 40%;
  left: 20%;
  width: 80rem;
  padding: 3.2rem;
  border-radius: 0.8rem;
  background: #fff;
  z-index: 99;
  .desc {
    display: flex;
    align-items: center;
    width: 100%;
    height: 8.8rem;
    line-height: 8.8rem;
    font-size: 2.4rem;
  }
}
</style>