import { styled } from "@linaria/react";

import { Form as RawForm } from "react-router";

const Container = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
`;

const Form = styled(RawForm)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export { Container, Form };
