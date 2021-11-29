import axios from "axios";

const REQUEST_TIMEOUT = 30000;

class ApiClient {
  static instance = new ApiClient();
  #axiosInstance;

  constructor() {
    console.log("ApiClient constructor");
    this.#axiosInstance = this.createInstance();
  }
  createInstance() {
    return axios.create({
      baseURL: process.env.VUE_APP_SERVER_URL || "",
      timeout: REQUEST_TIMEOUT,
    });
  }

  async getCars() {
    const result = await this.#axiosInstance.get("api/");
    if (result.data) {
      return result.data;
    }
    return [];
  }

  async getSensorDate(sensorName, carId) {
    const result = await this.#axiosInstance.get(`api/${carId}/${sensorName}?start=2021-11-28T22%3A52%3A36.686Z&end=2021-11-28T22%3A55%3A36.686Z`);
    if (result.data) {
      return result.data;
    }
    return [];
  }
}

export default ApiClient;
