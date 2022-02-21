import { render } from "@testing-library/vue";
import { ChargerStyle, ChargerStatusName } from "@/types";
import TableFilters from "./TableFilters.vue";

describe("TableFilters.vue", () => {
  it("renders the filters", () => {
    const props = {
      chargerFilter: ChargerStatusName.All,
    };

    const { getByText } = render(TableFilters, { props });

    const filterAll = getByText("all");
    const filterReady = getByText("ready");
    const filterCharging = getByText("charging");
    const filterError = getByText("error");

    expect(filterAll).toBeInTheDocument();
    expect(filterReady).toBeInTheDocument();
    expect(filterCharging).toBeInTheDocument();
    expect(filterError).toBeInTheDocument();
  });

  it("renders the filter ALL actived by default", () => {
    const props = {
      chargerFilter: ChargerStatusName.All,
    };

    const { getByText } = render(TableFilters, { props });

    const filterAll = getByText("all");
    const filterReady = getByText("ready");
    const filterCharging = getByText("charging");
    const filterError = getByText("error");

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
    const props = {
      chargerFilter: ChargerStatusName.Ready,
    };

    const { getByText } = render(TableFilters, { props });

    const filterAll = getByText("all");
    const filterReady = getByText("ready");
    const filterCharging = getByText("charging");
    const filterError = getByText("error");

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
    const props = {
      chargerFilter: ChargerStatusName.Charging,
    };

    const { getByText } = render(TableFilters, { props });

    const filterAll = getByText("all");
    const filterReady = getByText("ready");
    const filterCharging = getByText("charging");
    const filterError = getByText("error");

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
    const props = {
      chargerFilter: ChargerStatusName.Error,
    };

    const { getByText } = render(TableFilters, { props });

    const filterAll = getByText("all");
    const filterReady = getByText("ready");
    const filterCharging = getByText("charging");
    const filterError = getByText("error");

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
});
