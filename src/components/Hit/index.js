import React from 'react'
import PostItem from '../PostItem'

const Hit = ({ hit }) => {
  return (
    <PostItem
      date={hit.date}
      slug={hit.fields.slug}
      category={hit.category}
      color={hit.color}
      title={hit.title}
      description={hit.description}
    />
  )
}

export default Hit;