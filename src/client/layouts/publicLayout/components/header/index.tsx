import horizontalLogo from "~/client/assets/horizontal-logo.svg";
import { IconMenu } from "../iconMenu";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <img src={horizontalLogo} alt="logo" />
      <IconMenu />
    </Container>
  );
}

export { Header };
