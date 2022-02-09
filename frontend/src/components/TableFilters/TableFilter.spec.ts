import { fireEvent } from "@testing-library/vue";
import TableFilters from "./TableFilters.vue";
import renderComponent from "../../../tests/unit/helpers/renderComponent";

describe("TableFilters.vue", () => {
  it("renders the filters", () => {
    const { getByText } = renderComponent(TableFilters);

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
    const { getByText } = renderComponent(TableFilters);

    const filterAll = getByText("all");
    const filterReady = getByText("ready");
    const filterCharging = getByText("charging");
    const filterError = getByText("error");

    expect((filterAll as HTMLLIElement).className).toBe("active");
    expect((filterReady as HTMLLIElement).className).not.toBe("active");
    expect((filterCharging as HTMLLIElement).className).not.toBe("active");
    expect((filterError as HTMLLIElement).className).not.toBe("active");
  });

  it("after clicking on the filter READY, this one should be activated", async () => {
    const { getByText } = renderComponent(TableFilters);

    const filterAll = getByText("all");
    const filterReady = getByText("ready");
    const filterCharging = getByText("charging");
    const filterError = getByText("error");

    await fireEvent.click(filterReady);

    expect((filterAll as HTMLLIElement).className).not.toBe("active");
    expect((filterReady as HTMLLIElement).className).toBe("active");
    expect((filterCharging as HTMLLIElement).className).not.toBe("active");
    expect((filterError as HTMLLIElement).className).not.toBe("active");
  });

  it("after clicking on the filter CHARGING, this one should be activated", async () => {
    const { getByText } = renderComponent(TableFilters);

    const filterAll = getByText("all");
    const filterReady = getByText("ready");
    const filterCharging = getByText("charging");
    const filterError = getByText("error");

    await fireEvent.click(filterCharging);

    expect((filterAll as HTMLLIElement).className).not.toBe("active");
    expect((filterReady as HTMLLIElement).className).not.toBe("active");
    expect((filterCharging as HTMLLIElement).className).toBe("active");
    expect((filterError as HTMLLIElement).className).not.toBe("active");
  });

  it("after clicking on the filter ERROR, this one should be activated", async () => {
    const { getByText } = renderComponent(TableFilters);

    const filterAll = getByText("all");
    const filterReady = getByText("ready");
    const filterCharging = getByText("charging");
    const filterError = getByText("error");

    await fireEvent.click(filterError);

    expect((filterAll as HTMLLIElement).className).not.toBe("active");
    expect((filterReady as HTMLLIElement).className).not.toBe("active");
    expect((filterCharging as HTMLLIElement).className).not.toBe("active");
    expect((filterError as HTMLLIElement).className).toBe("active");
  });
});
