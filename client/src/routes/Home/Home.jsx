import React from "react"
import { gql, useQuery } from "@apollo/client"
import * as S from "./style"
import Movies from "../../components/Movies"

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`

export default function Home() {
  const { loading, data } = useQuery(GET_MOVIES)

  return (
    <S.Container>
      {loading && <div>loading...</div>}
      {data && <Movies movies={data.movies} />}
    </S.Container>
  )
}
