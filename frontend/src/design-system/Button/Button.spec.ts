import { render, fireEvent } from "@testing-library/vue";
import Button from "./Button.vue";
import { ButtonStyle } from "@/types";

describe("Button.vue", () => {
  it("renders label and primary style", async () => {
    const label = "View session";
    const style = ButtonStyle.Primary;
    const { getByText, getByRole } = render(Button, {
      props: { label, style },
    });

    const text = getByText("View session");
    const button = getByRole("button");

    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect((button as HTMLButtonElement).className).toBe(
      "button button--primary"
    );
  });

  it("renders label and danger style", async () => {
    const label = "Delete";
    const style = ButtonStyle.Danger;
    const { getByText, getByRole } = render(Button, {
      props: { label, style },
    });

    const text = getByText("Delete");
    const button = getByRole("button");

    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect((button as HTMLButtonElement).className).toBe(
      "button button--danger"
    );
  });

  it("emitts the click event", async () => {
    const expectedClick = ["click", [[]]];
    const { getByRole, emitted } = render(Button);

    const button = getByRole("button");
    await fireEvent.click(button);

    const [clickEventEmitted] = Object.entries(emitted());

    expect(clickEventEmitted).toEqual(expectedClick);
  });
});
