import { render, fireEvent } from "@testing-library/vue";
import Button from "./Button.vue";
import { ButtonStyle } from "@/types";

describe("Button.vue", () => {
  it("renders label and primary style", async () => {
    const label = "View session";
    const style = ButtonStyle.Primary;
    const { getByText } = render(Button, {
      props: { label, style },
    });

    const button = getByText("View session");

    expect(button).toBeInTheDocument();
    expect((button as HTMLButtonElement).className).toBe(
      "button button--primary"
    );
  });

  it("renders label and danger style", async () => {
    const label = "Delete";
    const style = ButtonStyle.Danger;
    const { getByText } = render(Button, {
      props: { label, style },
    });

    const button = getByText("Delete");

    expect(button).toBeInTheDocument();
    expect((button as HTMLButtonElement).className).toBe(
      "button button--danger"
    );
  });

  it("emitts the click event", async () => {
    const expectedClick = ["click", [[]]];

    const label = "Example";
    const { getByText, emitted } = render(Button, {
      props: { label },
    });

    const button = getByText("Example");
    await fireEvent.click(button);

    const [clickEventEmitted] = Object.entries(emitted());

    expect(clickEventEmitted).toEqual(expectedClick);
  });
});
