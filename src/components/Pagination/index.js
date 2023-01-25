import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <S.PaginationLink
        to={prevPage}
        duration={0.6}
        cover
        direction="right"
        bg={getThemeColor()}
      ><S.ArrowLeftIcon /> Previous page</S.PaginationLink>)}
    <p>{currentPage} of {numPages}</p>
    {!isLast && (
      <S.PaginationLink 
        to={nextPage}
        duration={0.6}
        cover
        direction="left"
      >Next page <S.ArrowRightIcon /></S.PaginationLink>)}
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