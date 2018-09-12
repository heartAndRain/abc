import { observable, action } from "mobx";

class ScreenStore {
  @observable renderCTree: any[] = [];

  @action
  setRenderCTree(cTree: any[]) {
    this.renderCTree = cTree;
  }
}

export default new ScreenStore();
