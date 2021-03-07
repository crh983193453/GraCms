<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="入学日期" width="180">
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
      <el-table-column label="总请节数">
        <template slot-scope="scope">
          {{ scope.row.totalNum }}节
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="showKqPop(scope.row)"
            >个人考勤总览</el-button
          >
          <!-- <el-button
            size="mini" 
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          > -->
        </template>
      </el-table-column>
    </el-table>
    <Modal :isShow.sync="showKqPops">
      <div v-if="showKqPops">
        <div class="infos">
          <div class="infoBox">
            <div class="desc">
              已请事假:
            </div>
            <div class="desc">
              已请病假:
            </div>
            <div class="desc">
              已请公假:
            </div>
            <div>
              <el-button type="primary" @click="showKqPops=false">确认</el-button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import modal from '../components/modal.vue';
export default {
  components:{
    modal
  },
  data() {
    return {
      showKqPops:false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          fy:"人工智能分院",
          bj:"软件181",
          totalNum:"18",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    showKqPop(){
      this.showKqPops=true
    }
  },
};
</script>
<style lang="scss">
.infos{
  position: absolute;
  top: 40%;
  left: 20%;
  width: 80rem;
  padding: 3.2rem;
  border-radius: 0.8rem;
  background: #fff;
  z-index: 99;
  .infoBox{
    .desc{
      width: 100%;
      height: 8.8rem;
      line-height: 8.8rem;
      font-size: 2.4rem;
    }
  }
}
</style>