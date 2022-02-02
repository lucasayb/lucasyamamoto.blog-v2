import styled from 'styled-components'

import { Menu } from '@styled-icons/evaicons-solid/Menu'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

export const MenuBurgerWrapper = styled.button`
  align-items: center;
  background-color: var(--main-background-color);
  cursor: pointer;
  display: flex;
  width: 38px;
  height: 38px;
  border: 1px solid var(--main-border-color);
  border-radius: 5px;
  justify-content: center;
`

export const MenuBurgerIcon = styled(Menu)`
  color: var(--main-icon-color);
`

export const CloseIcon = styled(CloseOutline)`
  color: var(--main-icon-color);
`