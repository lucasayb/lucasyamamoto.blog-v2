import styled from 'styled-components';
import { Lightbulb } from '@styled-icons/bootstrap/Lightbulb'

export const DarkModeWrapper = styled.button`
  align-items: center;
  background-color: var(--primary-background-color);
	transition: background-color var(--transition-time), color var(--transition-time);
  border: none;
  cursor: pointer;
  display: flex;
  width: 38px;
  height: 38px;
  justify-content: center;
  margin: 0 10px;
  @media (min-width: 768px) {
    order: 3;
  }
`

export const DarkMode = styled(Lightbulb)`
  color: var(--primary-icon-color);
  width: 18px;
  height: 18px;
`
