import styled from "@emotion/styled"

export const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 16px;
  row-gap: 16px;

  width: fit-content;
  margin: 0 auto;
  padding: 2rem 0;
`

export const Movie = styled.div`
  cursor: pointer;
`
