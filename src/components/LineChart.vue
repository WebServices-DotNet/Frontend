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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
