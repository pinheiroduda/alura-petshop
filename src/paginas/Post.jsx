import React, { useEffect, useState } from 'react'
import { busca } from '../api/api'
import '../assets/css/post.css'

const Post = () => {
  const [post, setPost] = useState({})

  useEffect(() => {
    busca(`posts/${id}`, setPost)
  }, [id])

  return (
    <main className="container flex flex--centro">
      <article>
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="cartao__texto">{post.body}</p>
      </article>
    </main>
  )
}

export default Post
