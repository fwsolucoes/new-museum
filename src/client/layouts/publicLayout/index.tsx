import { Outlet } from "react-router";
import { Header } from "./components/header";
import { Container } from "./styles";

function PublicLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export { PublicLayout };
