import { Link, Outlet } from "react-router";
import verticalLogoPng from "~/client/assets/vertical-logo.svg";
import { ContentContainer, HeroContainer, LayoutContainer } from "./styles";

function SignLayout() {
  return (
    <LayoutContainer>
      <ContentContainer>
        <Link to="/customer/sign-in">
          <img src={verticalLogoPng} alt="M2G2" />
        </Link>
        <Outlet />
      </ContentContainer>

      <HeroContainer>
        {/* <p>Projetamos os caminhos para a sua realização.</p> */}
      </HeroContainer>
    </LayoutContainer>
  );
}

export { SignLayout };
