import { render } from "@testing-library/vue";
import Status from "./Status.vue";

describe("Status.vue", () => {
  it("renders ready status", () => {
    const chargerStatus = 10;
    const { getByText } = render(Status, {
      props: { chargerStatus },
    });

    const status = getByText("ready");

    expect(status).toBeInTheDocument();
    expect((status as HTMLDivElement).className).toBe(
      "status font-size-xsmall color-dark bg-ready color-ready"
    );
  });

  it("renders charging status", () => {
    const chargerStatus = 20;
    const { getByText } = render(Status, {
      props: { chargerStatus },
    });

    const status = getByText("charging");

    expect(status).toBeInTheDocument();
    expect((status as HTMLDivElement).className).toBe(
      "status font-size-xsmall color-dark bg-charging color-charging"
    );
  });

  it("renders error status", () => {
    const chargerStatus = 50;
    const { getByText } = render(Status, {
      props: { chargerStatus },
    });

    const status = getByText("error");

    expect(status).toBeInTheDocument();
    expect((status as HTMLDivElement).className).toBe(
      "status font-size-xsmall color-dark bg-error color-error"
    );
  });

  it("renders unknown status", () => {
    const chargerStatus = 99;
    const { getByText } = render(Status, {
      props: { chargerStatus },
    });

    const status = getByText("unknown");

    expect(status).toBeInTheDocument();
    expect((status as HTMLDivElement).className).toBe(
      "status font-size-xsmall color-dark"
    );
  });
});
