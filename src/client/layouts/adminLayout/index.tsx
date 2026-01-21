import { Outlet } from "react-router";
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { Container, Content } from "./styles";

function AdminLayout() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Outlet />
      </Content>
    </Container>
  );
}

export { AdminLayout };
