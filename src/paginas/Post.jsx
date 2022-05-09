import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/post.css'

const Post = () => {
  let history = useHistory()
  const { id } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    busca(`posts/${id}`, setPost).catch(() => {
      history.push('/404')
    })
  }, [id])

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="cartao__texto">{post.body}</p>
      </article>
    </main>
  )
}

export default Post
