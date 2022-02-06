import React from 'react'
import * as S from './styled'

const Category = ({ color, category }) => (
  <S.Category color={color}>{category}</S.Category>
)

export default Category;