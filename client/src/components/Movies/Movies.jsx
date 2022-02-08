import React from "react"
import * as S from "./style"
import { Link } from "react-router-dom"

export default function Movies({ movies }) {
  return (
    <S.Movies>
      {movies.map((movie) => (
        <S.Movie key={movie.id}>
          <Link to={`/${movie.id}`}>
            <img src={movie.medium_cover_image} />
          </Link>
        </S.Movie>
      ))}
    </S.Movies>
  )
}
