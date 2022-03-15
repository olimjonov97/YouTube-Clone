import React from 'react';
import Body from '../components/body';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { Container, Wrapper } from './style';

export const Root = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Navbar />
        <Body />
      </Wrapper>
    </Container>
  );
};
export default Root;
