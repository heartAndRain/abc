import * as React from "react";
import SortableDec from "./SortableDec";

interface Props {}

@SortableDec({
  group: {
    name: "a",
    put: true,
    pull: false
  }
})
export default class Screen extends React.Component<Props, {}> {
  componentDidMount() {
    console.log("diddid");
  }

  render() {
    return (
      <div
        style={{ minHeight: 500, border: "1px solid #DDD", overflow: "auto" }}
      >
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </div>
    );
  }
}
