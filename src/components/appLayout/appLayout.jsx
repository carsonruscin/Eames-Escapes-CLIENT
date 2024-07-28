import React from 'react'
import { StickyHeader } from '../stickyHeader/stickyHeader.jsx';

export const AppLayout = ({ children }) => {
  return (
    <>
      <StickyHeader />
      {children}
    </>
  );
};

