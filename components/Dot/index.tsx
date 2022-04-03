import React, { useMemo } from 'react'
import styled from 'styled-components'

const Wapper = styled.div`
    position: fixed;
    top: 40%;
    right: 0%;
    z-index: 999;
    [class*='Dot__SingleDotOutside'] {
        margin-bottom: 5px
    }
}
`

const SingleDotInside = styled.div`
  width:30px;
  height:30px;
  background-color:#AC2121;
  border-radius:50%;
  text-align: center;
  line-height: 30px;
  color: white;
  box-shadow: 0 0 0 3px white;
}
`

const SingleDotOutside = styled.div`
  width:40px;
  height:40px;
  background-color: #AC2121;
  border-radius:50%;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
`

const SingleDotComponent = ({ data }: { data: string }) => {
  return (
    <SingleDotOutside>
      <SingleDotInside>{data}</SingleDotInside>
    </SingleDotOutside>
  )
}

const DotComponent = () => {
  const dataArray = ['1', '2', '3', '4', '5']
  const Dot = useMemo(() => {
    return dataArray.map((item, index) => {
      return <SingleDotComponent data={item} key={index} />
    })
  }, [dataArray])

  return <Wapper>{Dot}</Wapper>
}

export default DotComponent
