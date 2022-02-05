import axios, { AxiosResponse } from "axios";
import { Charger } from "@/store/store.types";

/**
 * Fetch the chargers list
 *
 * @returns {Charger[]} Charger list
 */
async function fetchChargers(): Promise<AxiosResponse<Charger[]>> {
  try {
    const response = await axios.get("/chargers");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default {
  fetchChargers,
};
