import React from "react"
import * as S from "./style"

export default function Movies({ movies }) {
  return (
    <S.Movies>
      {movies.map((movie) => (
        <S.Movie key={movie.id}>
          <img src={movie.medium_cover_image} />
        </S.Movie>
      ))}
    </S.Movies>
  )
}
