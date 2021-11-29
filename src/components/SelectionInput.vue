<template>
  <div class="input">
    <label>{{ label }} </label>
    <div class="mx-datepicker">
      <div class="mx-input-wrapper">
        <select class="mx-input" v-bind:value="selected" v-on:change="onChange">
          <option v-for="value in values" :value="value.id" :key="value.id">
            {{ value.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectionInput",
  props: {
    label: String,
    values: Array,
    selected: String,
  },
  data() {
    return {};
  },
  methods: {
    onChange: function (event) {
      console.log("onChange!!!!!!!!!!!");
      this.$emit("change-value", event.target.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
