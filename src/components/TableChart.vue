<template>
  <div class="table-container">
    <GChart type="Table" :data="chartData" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "TableChart",
  components: {
    GChart,
  },
  props: {
    msg: String,
    chartData: Array,
  },
};
</script>

<style>
.table-container {
  display: flex;
  justify-content: center;
  margin: 2rem 1rem;
}
table.google-visualization-table-table {
  border-style: hidden;
  font-family: Nunito, Avenir, Helvetica, Arial, sans-serif;
}
table.google-visualization-table-table,
th.google-visualization-table-th,
td.google-visualization-table-td {
  border-collapse: collapse;
}
.google-visualization-table th.gradient {
  background-color: rgb(68, 110, 142);
  background-image: none;
  color: white;
  padding: 0.2rem;
}
tr.google-visualization-table-tr-odd {
  background-color: #ffff;
}
th.google-visualization-table-tr,
td.google-visualization-table-td {
  border: 1px solid gainsboro;
  min-width: 200px;
}

</style>
