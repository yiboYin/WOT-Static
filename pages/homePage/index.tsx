import { useState } from 'react'
import type { NextPage } from 'next'
import { Button, Select, Input } from 'antd'

import styled from 'styled-components'
import bg from '../../assets/img/homepage-bg.jpg'

const HomePage: NextPage = () => {
  const INIT_REGION = 'RU'
  const SERVER_REGION = ['RU', 'EU', 'ASIA', 'NA']
  const { Option } = Select

  const [region, setRegion] = useState<string>(INIT_REGION)
  const [accountName, setAccountName] = useState<string>('')

  const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: ${`url(${bg.src})`};
    background-size: 100%;
  `

  const InputContainer = styled.div`
    width: 60vw;
    display: flex;
    > .serverSelector div {
      background-color: #ff850a !important;
      color: white;
    }
    > .searchBtn {
      background-color: #ff850a !important;
      color: white;
    }
  `

  const inputChangeHandler = (e: React.SyntheticEvent) => {
    const value = (e.target as HTMLInputElement).value
    setAccountName(value)
  }

  const submitHandler = () => {
    // console.log(region, accountName);
  }

  return (
    <Wrapper>
      <InputContainer>
        {/* <div>title & logo</div> */}
        <Select size="large" className="serverSelector" value={region} onSelect={(v: string) => setRegion(v)}>
          {SERVER_REGION.map((each) => {
            return (
              <Option value={each} key={each}>
                {each}
              </Option>
            )
          })}
        </Select>
        <Input size="large" value={accountName} onChange={inputChangeHandler} />
        <Button size="large" type="primary" className="searchBtn" onClick={submitHandler}>
          Submit
        </Button>
      </InputContainer>
    </Wrapper>
  )
}

export default HomePage
