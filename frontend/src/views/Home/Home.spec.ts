import { fireEvent } from "@testing-library/vue";
import { ChargerStyle } from "@/types";
import Home from "./Home.vue";

import renderComponent from "../../../tests/unit/helpers/renderComponent";

describe("Home.vue", () => {
  it("the filter ALL should be actived by default", async () => {
    const { getByTestId } = renderComponent(Home);

    const filterAll = getByTestId("all");
    const filterReady = getByTestId("ready");
    const filterCharging = getByTestId("charging");
    const filterError = getByTestId("error");

    await fireEvent.click(filterAll);

    expect((filterAll as HTMLLIElement).className).toBe(ChargerStyle.Active);
    expect((filterReady as HTMLLIElement).className).not.toBe(
      ChargerStyle.Active
    );
    expect((filterCharging as HTMLLIElement).className).not.toBe(
      ChargerStyle.Active
    );
    expect((filterError as HTMLLIElement).className).not.toBe(
      ChargerStyle.Active
    );
  });

  it("after clicking on the filter READY, this one should be activated", async () => {
    const { getByTestId } = renderComponent(Home);

    const filterAll = getByTestId("all");
    const filterReady = getByTestId("ready");
    const filterCharging = getByTestId("charging");
    const filterError = getByTestId("error");

    await fireEvent.click(filterReady);

    expect((filterAll as HTMLLIElement).className).not.toBe(
      ChargerStyle.Active
    );
    expect((filterReady as HTMLLIElement).className).toBe(ChargerStyle.Active);
    expect((filterCharging as HTMLLIElement).className).not.toBe(
      ChargerStyle.Active
    );
    expect((filterError as HTMLLIElement).className).not.toBe(
      ChargerStyle.Active
    );
  });

  it("after clicking on the filter CHARGING, this one should be activated", async () => {
    const { getByTestId } = renderComponent(Home);

    const filterAll = getByTestId("all");
    const filterReady = getByTestId("ready");
    const filterCharging = getByTestId("charging");
    const filterError = getByTestId("error");

    await fireEvent.click(filterCharging);

    expect((filterAll as HTMLLIElement).className).not.toBe(
      ChargerStyle.Active
    );
    expect((filterReady as HTMLLIElement).className).not.toBe(
      ChargerStyle.Active
    );
    expect((filterCharging as HTMLLIElement).className).toBe(
      ChargerStyle.Active
    );
    expect((filterError as HTMLLIElement).className).not.toBe(
      ChargerStyle.Active
    );
  });

  it("after clicking on the filter ERROR, this one should be activated", async () => {
    const { getByTestId } = renderComponent(Home);

    const filterAll = getByTestId("all");
    const filterReady = getByTestId("ready");
    const filterCharging = getByTestId("charging");
    const filterError = getByTestId("error");

    await fireEvent.click(filterError);

    expect((filterAll as HTMLLIElement).className).not.toBe(
      ChargerStyle.Active
    );
    expect((filterReady as HTMLLIElement).className).not.toBe(
      ChargerStyle.Active
    );
    expect((filterCharging as HTMLLIElement).className).not.toBe(
      ChargerStyle.Active
    );
    expect((filterError as HTMLLIElement).className).toBe(ChargerStyle.Active);
  });

  it("renders the chargers filted by READY status", async () => {
    // arrange
    const { getAllByTestId, getByText, getByTestId } = renderComponent(Home);
    const filterReady = getByTestId("ready");

    // act
    await fireEvent.click(filterReady);

    // assert
    const chargers = getAllByTestId("table-charger");
    const chargerSerialNumber = getByText(/SN-11249-1/);

    expect(chargers).toHaveLength(1);
    expect(chargerSerialNumber).toBeInTheDocument();
  });

  it("renders the chargers filted by CHARGING status", async () => {
    // arrange
    const { getAllByTestId, getByText, getByTestId } = renderComponent(Home);
    const filterCharging = getByTestId("charging");

    // act
    await fireEvent.click(filterCharging);

    // assert
    const chargers = getAllByTestId("table-charger");
    const chargerSerialNumber = getByText(/SN-34543-2/);

    expect(chargers).toHaveLength(1);
    expect(chargerSerialNumber).toBeInTheDocument();
  });

  it("renders the chargers filted by ERROR status", async () => {
    // arrange
    const { getAllByTestId, getByText, getByTestId } = renderComponent(Home);
    const filterError = getByTestId("error");

    // act
    await fireEvent.click(filterError);

    // assert
    const chargers = getAllByTestId("table-charger");
    const chargerSerialNumber = getByText(/SN-45621-3/);

    expect(chargers).toHaveLength(1);
    expect(chargerSerialNumber).toBeInTheDocument();
  });
});
