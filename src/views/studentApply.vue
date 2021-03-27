
<template>
  <div class="bodys">
    <div class="dataScreen">
      <el-date-picker
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      <el-button type="primary">查询</el-button>
    </div>
    <div class="tables">
      <el-table :data="tableData" border style="width: 130rem">
        <el-table-column prop="leaveApprove.createDate" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="sponsor" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="leaveApprove.reason" label="理由" width="120">
        </el-table-column>
        <el-table-column prop="reason" label="分院" width="120">
        </el-table-column>
        <el-table-column prop="reason" label="班级" width="120">
        </el-table-column>
        <el-table-column prop="reason" label="班主任" width="120">
        </el-table-column>
        <el-table-column prop="leaveApprove.createDate" label="开始时间" width="120">
        </el-table-column>
        <el-table-column prop="leaveApprove.endTime" label="结束时间" width="120">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="120">
        </el-table-column>
        <el-table-column prop="administrator" label="审批人" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              @click="maskClick(scope.row, scope.$index)"
              type="text"
              size="small"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
    <el-dialog title="查看" :visible.sync="showMask" top="10vh">
      <div class="lines">
        <div class="desc">申请人：</div>
        <span>
          {{ preview.name }}
        </span>
      </div>
      <div class="lines">
        <div class="desc">事由：</div>
        <span>{{ preview.reason }}</span>
      </div>
      <div class="lines">
        <div class="desc">请假时间：</div>
        <span> {{ preview.startTime }} 至 {{ preview.endTime }} </span>
      </div>
      <div class="lines">
        <div class="desc">补充说明:</div>
        <span>
          说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明
        </span>
      </div>
      <div class="lines">
        <div class="desc">补充图片:</div>
        <div class="imgList">
          <img @click="imgMasks" src="../static/img/4.jpg" alt="" />
        </div>
      </div>
      <div class="lines" style="justify-content: center">
        <div class="buttons" @click="agree">同意</div>
        <div class="buttons" style="background: #f56c6c" @click="refuse">
          拒绝
        </div>
      </div>
    </el-dialog>
    <Mask :isShow.sync="imgMask">
      <img src="../static/img/2.jpg" alt="" />
    </Mask>
  </div>
</template> 
<script>
import {api} from "../api/api.js"
import Mask from "../components/mask.vue";
export default {
  components: {
    Mask,
  },
  data() {
    return {
      imgMask: false,
      showMask: false,
      preview: "",
      index: "",
      tableData: [],
    };
  },
  created(){
    this.getLists()
  },
  methods: {
    async getLists(){
      const resultList = await api.approve('1','0','0','10')
      console.log(resultList)
      resultList.data.data.forEach((ele)=>{
        ele.createDate=new Date(ele.createDate)
        ele.approveStatus==1?'未审批':'已审批'
        this.tableData.push(ele)
      })
    },
    maskClick(e, index) {
      this.preview = e;
      this.index = index;
      this.showMask = !this.showMask;
    },
    imgMasks() {
      this.imgMask = !this.imgMask;
    },
    agree() {
      this.$message.success("已同意");
      this.showMask = !this.showMask;
      this.tableData[this.index].status = "已同意";
    },
    refuse() {
      this.$message.error("已拒绝");
      this.showMask = !this.showMask;
      this.tableData[this.index].status = "已拒绝";
    },
  },
};
</script>

<style lang="scss" scoped>
.bodys {
  position: absolute;
}
.dataScreen {
  position: relative;
  left: 10rem;
  top: 5rem;
}
.tables {
  position: relative;
  top: 10rem;
  left: 10rem;
  width: 130rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}
.footer {
  // position: relative;
  margin-top: 2rem;
  left: 21rem;
  float: right;
}
</style>