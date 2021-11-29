<template>
  <div class="data-table">
    <table>
      <tr>
        <th v-for="value in data[0]" :value="value" :key="value">
          {{ value }}
        </th>
      </tr>
      <tr v-for="row in data.slice(1)" :value="row" :key="row">
        <td v-for="value in row" :value="value" :key="row + value">
          {{ value }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  components: {},
  props: {
    data: Array,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.data-table {
  display: flex;
  justify-content: center;
  margin: 2rem 1rem;
}
table {
  border-style: hidden;
}
table,
th,
td {
  border-collapse: collapse;
}
th,
td {
  border: 1px solid gainsboro;
  min-width: 300px;
}
th {
  border-bottom: 1px solid grey;
}
</style>
