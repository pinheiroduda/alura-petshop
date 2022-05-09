import React from 'react'

import ListaCategorias from '../components/ListaCategorias'

import '../assets/css/blog.css'

const Categoria = () => {
  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListaCategorias />
    </>
  )
}

export default Categoria
