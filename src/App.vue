<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/cars.svg" />
    <h1>Cars</h1>
    <br />
    
    <br />
    <SelectionInput
      label="Choose a car:"
      :selected="selectedCar"
      :values="cars"
      v-on:change-value="(value) => changeValue('selectedCar', value)"
    />

    <SelectionInput
      label="Choose a sensor:"
      :selected="selectedSensor"
      :values="availableSensors"
      v-on:change-value="(value) => changeValue('selectedSensor', value)"
    />

    <LineChart :chartData="data" />
  </div>
</template>

<script>
import LineChart from "./components/LineChart.vue";
import SelectionInput from "./components/SelectionInput.vue";
import ApiClient from "./services/ApiClient";

export default {
  name: "App",
  components: {
    LineChart,
    SelectionInput,
  },
  data() {
    return {
      loading: true,
      availableSensors: [
        { name: "Speed", id: "speed" },
        { name: "Accelerometer", id: "accel" },
        { name: "Engine", id: "engine" },
        { name: "Temperature", id: "temperature" },
      ],
      cars: [],
      data: null,
      selectedCar: null,
      selectedSensor: null,
    };
  },
  created() {
    this.fetchCars();
  },
  methods: {
    changeValue(fieldName, value) {
      console.log(value);
      this[fieldName] = value;
      if (this.selectedSensor && this.selectedCar) {
        this.fetchSensorData(this.selectedSensor, this.selectedCar);
      }
    },
    async fetchCars() {
      this.loading = true;
      this.cars = await ApiClient.instance.getCars();
      this.loading = false;
    },
    async fetchSensorData(sensorName, carId) {
      this.loading = true;
      let data = await ApiClient.instance.getSensorDate(sensorName, carId);
      console.log("data");
      console.log(data);
      if (data.length > 0) {
        this.data = [["Time", sensorName]];
        data.map((x) => this.data.push([x.createDate, x.value]));
        console.log(this.data);
      } else {
        this.data = null;
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  height: 200px;
}
</style>
