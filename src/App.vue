<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/cars.svg" />
    <h1>Cars</h1>
    <br />

    <br />
    <div class="form">
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
      <div class="input">
        <label>Start time: </label>
        <date-picker
          v-model="selectedTime"
          v-on:change="(value) => changeValue('selectedTime', value)"
          valueType="date"
          type="datetime"
        ></date-picker>
      </div>
      <LineChart :chartData="data" />
    </div>
  </div>
</template>

<script>
import LineChart from "./components/LineChart.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import SelectionInput from "./components/SelectionInput.vue";
import ApiClient from "./services/ApiClient";

export default {
  name: "App",
  components: {
    LineChart,
    SelectionInput,
    DatePicker,
  },
  data() {
    let selectedTime = new Date(Date.now());
    selectedTime.setMinutes(selectedTime.getMinutes() - 1);
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
      selectedTime: selectedTime,
      selectedCar: null,
      selectedSensor: "speed",
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
        this.fetchSensorData();
      }
    },

    async fetchCars() {
      this.loading = true;
      this.cars = await ApiClient.instance.getCars();
      this.selectedCar = this.cars[0].id;
      console.log(this.cars[0].id);
      this.fetchSensorData();
      this.loading = false;
    },

    getEndTime() {
      let endTime = new Date(this.selectedTime);
      endTime.setMinutes(this.selectedTime.getMinutes() + 1);
      return endTime;
    },

    async fetchSensorData() {
      this.loading = true;
      let data = await ApiClient.instance.getSensorDate(
        this.selectedSensor,
        this.selectedCar,
        this.selectedTime.toISOString(),
        this.getEndTime().toISOString()
      );
      console.log("data");
      console.log(data);
      if (data.length > 0) {
        this.data = [
          [
            "Time",
            this.availableSensors.find((x) => x.id === this.selectedSensor)
              .name,
          ],
        ];
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

.form {
}

img {
  height: 200px;
}
</style>
