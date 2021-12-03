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
    chartData: Array,
  },
  data() {
    return {
      chartOptions: {
        curveType: "function",
        height: 400,
      },
    };
  },
};
</script>

