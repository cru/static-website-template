import React from 'react'
import Card from './card'

const Articles = ({ articles = [] }) => {
  return (
    <div className='w-1/2'>
      {articles.map((e) => (
        <Card article={e} key={e.attributes.slug} />
      ))}
    </div>
  )
}

export default Articles
