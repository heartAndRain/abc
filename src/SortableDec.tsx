import * as React from "react";
import { findDOMNode } from "react-dom";
import * as Sortable from "sortablejs";

export default function SortableDec(opts: any = {}) {
  return function(Child: any) {
    return class extends React.Component<any, any> {
      static displayName = Child.name;
      ins: any;

      componentDidMount() {
        Sortable.create(findDOMNode(this.ins), opts);
      }

      render() {
        return <Child ref={(ins: any) => (this.ins = ins)} />;
      }
    };
  };
}
