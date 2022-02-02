import React from 'react';
import * as S from './styled'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Stats, Hits } from 'react-instantsearch-dom';
import Hit from '../Hit'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}
const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);

export const SearchIcon = () => (
  <S.SearchIconWrapper to="/search">
    <S.SearchIcon />
  </S.SearchIconWrapper>
)

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
    <S.SearchBoxWrapper>
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <SearchBox autoFocus translations={{ placeholder: 'Pesquisar...' }} />
      <Stats translations={{stats(nbHits, timeSpentMs) {
        return `${nbHits} resultados encontrados em ${timeSpentMs} ms`
      }}} />
    </S.SearchBoxWrapper>
    <Hits hitComponent={Hit} />
  </InstantSearch>
)

export default Search;