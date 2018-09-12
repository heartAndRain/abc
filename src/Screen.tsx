import * as React from "react";
import { observer, inject } from "mobx-react";
import SortableDec from "./SortableDec";
import Renderer from "./Renderer";

import screenStore from "./Store/Screen";

interface Props {}

@SortableDec({
  group: {
    name: "a",
    put: true,
    pull: false
  },
  onAdd: evt => {
    const renderScreenDOM = evt.to;
    const cTree = Array.from(renderScreenDOM.children).map((child: any) => {
      return {
        cid: child.dataset.cid
      };
    });
    debugger;
    screenStore.setRenderCTree(cTree);
  }
})
@inject("screenStore")
@observer
export default class Screen extends React.Component<Props, {}> {
  render() {
    const { renderCTree, setRenderCTree } = this.props.screenStore;
    console.log(setRenderCTree);
    return (
      <div
        style={{ minHeight: 500, border: "1px solid #DDD", overflow: "auto" }}
      >
        <Renderer id="screen" cTree={renderCTree} />
      </div>
    );
  }
}
