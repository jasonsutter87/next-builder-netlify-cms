import React, { ReactNode } from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;