import styled from 'styled-components'

export const Category = styled.section`
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  transition: background-color var(--transition-time), color var(--transition-time);
  color: var(--primary-category-text-color);
  display: flex;
  font-size: 1rem;
  text-align: center;
  justify-content: center;
  height: 25px; 
  padding: 0 15px;
  font-weight: 100;
  text-decoration: none;
`