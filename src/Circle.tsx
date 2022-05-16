import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
} // FOR styled-components

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
} // FOR Circle

export default function Circle({ bgColor, borderColor }: CircleProps) {
  const [counter, setCounter] = useState(0);
  setCounter(1);
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}
