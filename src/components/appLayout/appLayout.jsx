import { StickyHeader } from '../stickyHeader/stickyHeader.jsx';
import { NavBar } from '../navBar/navBar.jsx';

export const AppLayout = ({ children, isLoggedIn }) => {
  return (
    <>
      <StickyHeader />
      {isLoggedIn && <NavBar />}
      {children}
    </>
  );
};

