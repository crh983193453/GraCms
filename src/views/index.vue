
<template>
  <div>
    <div class="boxGroup">
      <div class="firstBox">
        <div class="data_box">
          1
        </div>
        <div class="data_box">
          1
        </div>
        <div class="data_box">
          1
        </div>
        <div class="data_box">
          1
        </div>
      </div>
      <div class="boxs">
        <pull-box @click="choose"></pull-box>
        <div class="plot" id="first"></div>
      </div>
      <div class="boxs">
        <pull-box @click="choose"></pull-box>
        <div class="plot" id="sencond"></div>
      </div>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/pie");
require("echarts/lib/chart/line");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/visualMap");
import pullBox from "../components/pullBox.vue";
export default {
  components: { pullBox },
  data() {
    return {};
  },
  methods: {
    choose(e) {
      console.log(e);
    },
    firs() {
      let chart = echarts.init(document.getElementById("first"));
      chart.setOption({
        backgroundColor: "#fff",
        title: {
          text: "近七天统计",
          left: "center",
          top: 20,
          textStyle: {
            color: "black",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}人 ({d}%)",
        },

        visualMap: {
          show: false,
          min: 0,
          max: 500,
          inRange: {
            color: ["rgba(86, 177, 252, 0.8)"],
            // colorLightness: [0, 1],
          },
        },
        series: [
          {
            name: "统计",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 20, name: "病假 " },
              { value: 30, name: "事假" },
              { value: 15, name: "公假" },
              { value: 40, name: "其他" },
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(0, 0, 0, 1)",
            },
            labelLine: {
              lineStyle: {
                color: "rgba(0,0,0,1)",
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
            itemStyle: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0,0,0,0.3)",
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function() {
              return Math.random() * 200;
            },
          },
        ],
      });
    },
    sencond() {
      let chart = echarts.init(document.getElementById("sencond"));
      chart.setOption({
        tooltip:{
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        title: {
          text: "近七天总人数统计",
          left: "center",
          top: 20,
          textStyle: {
            color: "black",
          },
        },
        visualMap: {
          show: false,
          min: 0,
          max: 500,
          inRange: {
            color: ["rgba(86, 177, 252, 0.8)"],
            // colorLightness: [0, 1],
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["第1天", "第2天", "第3天", "第4天", "第5天", "第6天", "第7天"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [56, 36, 8, 102, 75, 36, 93],
            type: "line",
            areaStyle: {},
          },
        ],
      });
    },
  },
  mounted() {
    this.firs();
    this.sencond();
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: block;
}
.boxGroup {
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  overflow-y: hidden;
  white-space: nowrap;
}
.firstBox {
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 0.5rem;
  justify-items: center;
  align-items: center;
  overflow-y: hidden;
  margin: 1rem 1rem 0.8rem 4rem;
  width: 155rem;
  height: 40rem;
  border-radius: 1rem 1rem 1rem 1rem;
  box-shadow: 0 2px 1.2rem 0 rgba(0, 0, 0, 0.1);
}
.boxs {
  position: relative;
  margin: 1rem 1rem 0.8rem 4rem;
  width: 75rem;
  height: 40rem;
  border-radius: 1rem 1rem 1rem 1rem;
  overflow-y: hidden;
  box-shadow: 0 2px 1.2rem 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  .plot {
    width: 75rem;
    height: 40rem;
  }
  pull-box {
    position: absolute;
    left: 0;
    width: 10rem;
    height: 4rem;
  }
}
</style>
