import React, { useEffect, useState } from 'react'
import { useParams, Route, useRouteMatch } from 'react-router-dom'

import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'

import '../assets/css/blog.css'
import { busca } from '../api/api'
import { Link } from 'react-router-dom'

const Categoria = () => {
  const { id } = useParams()
  const { url, path } = useRouteMatch()
  const [subcategorias, setSubcategorias] = useState([])

  useEffect(() => {
    busca(`/categorias/${id}`, categoria => {
      setSubcategorias(categoria.subcategorias)
    })
  }, [id])

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {subcategorias.map(subcategoria => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Route exact psth={`${path}/`}>
        <ListaPost url={`/posts?categoria=${id}`} />
      </Route>
    </>
  )
}

export default Categoria
