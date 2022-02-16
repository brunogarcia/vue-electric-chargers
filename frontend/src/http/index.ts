import axios, { AxiosResponse } from "axios";
import { Charger } from "@/types";

enum Endpoints {
  Chargers = "chargers",
}

/**
 * Fetch the chargers list
 *
 * @returns {Charger[]} Charger list
 */
async function fetchChargers(): Promise<AxiosResponse<Charger[]>> {
  try {
    const response = await axios.get(Endpoints.Chargers);
    return response.data;
  } catch (error) {
    // TODO: send to error monitoring service (eg: Sentry)
    console.error(error);
    throw error;
  }
}

export default {
  fetchChargers,
};
