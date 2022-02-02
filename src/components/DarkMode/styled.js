import styled from 'styled-components';
import { Lightbulb } from '@styled-icons/bootstrap/Lightbulb'

export const DarkModeWrapper = styled.button`
  align-items: center;
  background-color: var(--primary-background-color);
	transition: background-color 0.5s;
  border: none;
  cursor: pointer;
  display: flex;
  width: 38px;
  height: 38px;
  justify-content: center;
  margin: 0 10px;
`

export const DarkMode = styled(Lightbulb)`
  color: var(--primary-icon-color);
  width: 18px;
  height: 18px;
`
