import styled from 'styled-components'

interface IProps {
  background?: string
}

const Page = styled.div<IProps>`
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  background: ${({ background }) => background};
  min-height: 100vh;
`

export default Page
