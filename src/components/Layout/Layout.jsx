import { Wrapper, StyledNavLink } from './Layout.style';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Wrapper>
        <StyledNavLink to="/" end>
          Form
        </StyledNavLink>
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      </Wrapper>
        <Outlet />
    </>
  );
}
