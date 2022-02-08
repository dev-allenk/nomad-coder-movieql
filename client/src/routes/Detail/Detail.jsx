import React from "react"
import { useParams } from "react-router-dom"
import { gql, useQuery } from "@apollo/client"
import * as S from "./style"

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`

export default function Detail() {
  const { id } = useParams()
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: Number(id) },
  })
  return (
    <S.Detail>
      {loading && <div>loading...</div>}
      {data && <div>{data.movie.id}</div>}
    </S.Detail>
  )
}
