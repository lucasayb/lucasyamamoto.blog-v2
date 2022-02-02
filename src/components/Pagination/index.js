import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    {!isFirst && <S.PaginationLink to={prevPage}><S.ArrowLeftIcon /> Página anterior</S.PaginationLink>}
    <p>{currentPage} de {numPages}</p>
    {!isLast && <S.PaginationLink to={nextPage}>Página seguinte <S.ArrowRightIcon /></S.PaginationLink>}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination;