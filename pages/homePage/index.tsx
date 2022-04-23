import { useState } from 'react'
import type { NextPage } from 'next'
import { Button, Select, Input } from 'antd'
import styled from 'styled-components'
import useRSAEncrypt from '../../lib/hooks/useRSAEncrypt'
import api from '../../lib/apiClient'
import bg from '../../assets/img/homepage-bg.jpg'
import useAsync from '../../lib/hooks/useAsync'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${`url(${bg.src})`};
  background-size: 100% 100%;
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

const HomePage: NextPage = () => {
  const INIT_REGION = 'RU'
  const SERVER_REGION = ['RU', 'EU', 'ASIA', 'NA']
  const { Option } = Select

  const [region, setRegion] = useState<string>(INIT_REGION)
  const [accountName, setAccountName] = useState<string>('')
  const { rsaEncryptData } = useRSAEncrypt()

  const inputChangeHandler = (e: React.SyntheticEvent) => {
    const value = (e.target as HTMLInputElement).value
    setAccountName(value)
  }

  const {
    run: submitHandler,
    loading: isLoading // if you want
    //error  // if you want
  } = useAsync(
    async () => {
      try {
        const res = await api.post('/signin', {
          region,
          accountName: rsaEncryptData(accountName)
        })
        // const {
        //   data: { Code, Msg }
        // } = res
        // if (Code === 'success') {
        //   message.success({ content: Msg })
        //   window.location.href = window.location.href.replace('/homePage', '/player')
        // } else {
        //   message.warning({ content: Msg })
        // }
        if (res?.data[0]?.account_id) {
          window.location.href = window.location.href.replace('/homePage', '/player')
        }
      } catch (error) {
        //do some logic
      }
    },
    (error) => {
      // do error handle
    }
  )

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
        <Input size="large" value={accountName} onChange={inputChangeHandler} onPressEnter={submitHandler} />
        <Button size="large" type="primary" className="searchBtn" onClick={submitHandler} loading={isLoading}>
          Submit
        </Button>
      </InputContainer>
    </Wrapper>
  )
}

export default HomePage
