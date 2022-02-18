import { render } from "@testing-library/vue";
import CurrentCharging from "./CurrentCharging.vue";

describe("CurrentCharging.vue", () => {
  it("renders current charging", () => {
    const currentCharging = 20;
    const { getByText } = render(CurrentCharging, {
      props: { currentCharging },
    });

    const data = getByText("20%");
    expect(data).toBeInTheDocument();
  });
});
