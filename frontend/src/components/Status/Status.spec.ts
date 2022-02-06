import { render } from "@testing-library/vue";
import Status from "./Status.vue";

describe("Status.vue", () => {
  it("renders ready status name", () => {
    const chargerStatus = 10;
    const { getByText } = render(Status, {
      props: { chargerStatus },
    });
    expect(getByText("ready")).toBeInTheDocument();
  });

  it("renders charging status name", () => {
    const chargerStatus = 20;
    const { getByText } = render(Status, {
      props: { chargerStatus },
    });
    expect(getByText("charging")).toBeInTheDocument();
  });

  it("renders error status name", () => {
    const chargerStatus = 50;
    const { getByText } = render(Status, {
      props: { chargerStatus },
    });
    expect(getByText("error")).toBeInTheDocument();
  });

  it("renders unknown status name", () => {
    const chargerStatus = 99;
    const { getByText } = render(Status, {
      props: { chargerStatus },
    });
    expect(getByText("unknown")).toBeInTheDocument();
  });
});
