<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/cars.svg" />
    <h1>Happy Cars</h1>

    <div class="mx-changepanel container">
      <div class="mx-input-wrapper">
        <button class="mx-input button" v-on:click="changePanel">
          Get statistics
        </button>
      </div>
    </div>
    
    <DataPanel v-if="dataPanel"/>
    <Statistics v-else/>
  </div>
</template>

<script>
import DataPanel from "./components/DataPanel.vue";
import Statistics from "./components/Statistics.vue";

export default {
  name: "App",
  data() {
    return {
      dataPanel: true,
    };
  },
  components: {
    DataPanel,
    Statistics
  },
  methods: {
    changePanel() {
      this.dataPanel = !this.dataPanel;
    }
  }
};
</script>

<style>
#app {
  font-family: Nunito, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

label {
  width: calc(50% - 0.5rem);
  text-align: end;
  padding-right: 0.5rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  margin-bottom: 0;
  margin-top: 4rem;
}

.mx-changepanel.container {
  align-self: center;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.button.mx-input {
  box-shadow: 0 0 16px lightgray;
  background-color: rgb(68, 110, 142);
  padding-right: 10px;
  color: white;
  border: none;
}

.button.mx-input:hover {
  box-shadow: 0 0 16px grey;
  background-color: rgb(58, 95, 124);
  cursor: pointer;
}

#app > img {
  height: 200px;
}
</style>
