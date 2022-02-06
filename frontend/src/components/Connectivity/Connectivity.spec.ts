import { render } from "@testing-library/vue";
import Connectivity from "./Connectivity.vue";
import { ConnectivityType } from "@/types";

describe("Connectivity.vue", () => {
  it("renders wifi connectivity", () => {
    const connectivityType = ConnectivityType.Wifi;
    const { getByText, getByAltText } = render(Connectivity, {
      props: { connectivityType },
    });

    const name = getByText("wifi");
    const icon = getByAltText("icon wifi");

    expect(name).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it("renders ethernet connectivity", () => {
    const connectivityType = ConnectivityType.Ethernet;
    const { getByText, getByAltText } = render(Connectivity, {
      props: { connectivityType },
    });

    const name = getByText("ethernet");
    const icon = getByAltText("icon ethernet");

    expect(name).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it("renders unknown connectivity", () => {
    const connectivityType = ConnectivityType.Unknown;
    const { getByText, getByAltText } = render(Connectivity, {
      props: { connectivityType },
    });

    const name = getByText("unknown");
    const icon = getByAltText("icon unknown");

    expect(name).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
