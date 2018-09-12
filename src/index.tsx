import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Screen from "./Screen";
import ComponentList from "./ComponentList";

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

const App = () => (
  <div>
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
  </div>
);

render(<App />, document.getElementById("root"));
