import { render, RenderResult } from "@testing-library/vue";

import { key } from "@/store";
import store from "./createStore";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function renderComponent(component: any): RenderResult {
  return render(component, {
    global: {
      plugins: [[store, key]],
    },
  });
}
