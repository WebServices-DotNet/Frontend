<template>
  <div class="chart">
    <GChart type="LineChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "LineChart",
  components: {
    GChart,
  },
  props: {
    msg: String,
    chartData: Array,
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function

      chartOptions: {
        // title: "Company Performance",
        curveType: "function",
        height: 400,
      },
    };
  },
};
</script>