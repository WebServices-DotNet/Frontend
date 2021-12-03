<template>
  <div class="mx-datepicker container">
    <div class="mx-input-wrapper">
      <button class="mx-input button" v-on:click="exportToCSV">
        Export to CSV
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownloadData",
  components: {},
  props: {
    data: Array,
  },
  methods: {
    exportToCSV() {
      let csvContent =
        "data:text/csv;charset=utf-8," +
        this.data.map((e) => e.join(",")).join("\n");

      var encodedUri = encodeURI(csvContent);
      window.open(encodedUri);
    },
  },
};
</script>

<style>
.mx-datepicker.container {
  align-self: center;
  margin-top: 2rem;
}

.button.mx-input {
  box-shadow: 0 0 16px lightgray;
  background-color: rgb(68, 110, 142);
  color: white;
  border: none;
}

.button.mx-input:hover {
  box-shadow: 0 0 16px grey;
  background-color: rgb(58, 95, 124);
  cursor: pointer;
}
</style>
