import { render } from "@testing-library/vue";
import Spinner from "./Spinner.vue";

describe("Spinner.vue", () => {
  it("renders label and primary style", async () => {
    const { getByRole } = render(Spinner);
    const spinner = getByRole("alert");

    expect(spinner).toBeInTheDocument();
  });
});
