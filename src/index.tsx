import * as React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import styled from "styled-components";
import Screen from "./Screen";
import ComponentList from "./ComponentList";

import appStore from "./Store/App";
import screenStore from "./Store/Screen";

const FlexContainer: any = styled.div`
  display: flex;
  flex-direction: ${(props: any) => props.direction};
  width: ${(props: any) => props.width};
  height: ${(props: any) => props.height};
`;

const Flex: any = styled.div`
  flex: ${(props: any) => props.flex || 0};
  margin: ${(props: any) => props.margin};
`;

const stores = {
  appStore,
  screenStore
};

const App = () => (
  <div>
    <Provider {...stores}>
      <FlexContainer>
        <Flex flex={3} margin={"0 30px 0 0"}>
          <Screen />
        </Flex>
        <Flex flex={1}>
          <FlexContainer direction={"column"} width={"100%"} height={"100%"}>
            <Flex flex={1}>
              <ComponentList />
            </Flex>
            <Flex flex={1} />
          </FlexContainer>
        </Flex>
      </FlexContainer>
    </Provider>
  </div>
);

render(<App />, document.getElementById("root"));
