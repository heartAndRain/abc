import * as React from "react";
import SortableDec from "./SortableDec";

@SortableDec({
  group: {
    name: "a",
    pull: "clone",
    put: false
  }
})
export default class ComponentList extends React.Component<any, any> {
  render() {
    return (
      <div style={{ width: "100%", height: "100%", border: "1px solid #DDD" }}>
        <div data-cid="button123">Button</div>
        <div data-cid="input123">input</div>
      </div>
    );
  }
}
