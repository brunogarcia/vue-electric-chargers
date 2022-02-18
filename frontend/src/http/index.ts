import axios from "axios";
import { Charger } from "@/types";

enum Endpoints {
  Chargers = "chargers",
}

/**
 * Fetch the chargers list
 *
 * @returns {Charger[]} Charger list
 */
async function fetchChargers(): Promise<Charger[]> {
  try {
    const { data } = await axios.get(Endpoints.Chargers);
    return data;
  } catch (error) {
    // TODO: send to error monitoring service (eg: Sentry)
    console.error(error);
    throw error;
  }
}

export default {
  fetchChargers,
};
