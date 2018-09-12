import * as React from "react";
import { render } from "react-dom";

const componentMap = {
  button123: () => (
    <button data-cid="button123" key={btoa(`button-${Math.random()}`)}>
      test
    </button>
  ),
  input123: () => (
    <input
      data-cid="input123"
      key={btoa(`inpout-${Math.random()}`)}
      type="text"
    />
  )
};

// export const renderCTree = (cTree: any[], id: string) => {
//   const reactComponents = cTree.map((c: any) => componentMap[c.cid]);

// };

interface Props {
  id: string;
  cTree: any[];
}

export default class Renderer extends React.Component<Props, any> {
  render() {
    return (
      <div id={this.props.id}>
        {this.props.cTree.map(
          (c: any) => (componentMap[c.cid] ? componentMap[c.cid]() : null)
        )}
      </div>
    );
  }
}
