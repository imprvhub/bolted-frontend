import React from 'react';
import { ModalProvider } from '../contexts/ModalContext';
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <ModalProvider>
      <Header />
      {children}
      <Footer />
      <Modal />
    </ModalProvider>
  );
};

export default AppWrapper;