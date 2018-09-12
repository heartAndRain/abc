import { observable } from "mobx";

class AppStore {
  @observable name = "";
}

export default new AppStore();
