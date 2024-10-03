// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { styled } from "@linaria/react";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export function App() {
  return (
    <div>
      <Title>Hello World!</Title>
    </div>
  );
}

export default App;
