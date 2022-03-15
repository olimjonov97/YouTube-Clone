import styled from 'styled-components';
import { ReactComponent as menu } from '../../assets/icons/menu.svg';
import { ReactComponent as logo } from '../../assets/icons/logo.svg';
export const Container = styled.div`
  flex: 2;
  background-color: #212121;
  height: 100vh;
  padding-left: 27px;
`;
export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  
  align-items: center;
`;
export const Menu = styled(menu)`
  width: 24px;
  height: 24px;
`;
export const Logo = styled(logo)`
  width: 89px;
  height: 50px;
`;
