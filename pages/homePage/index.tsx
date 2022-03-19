import { useState } from 'react';
import type { NextPage } from 'next'
import { Button, Select, Input } from 'antd';

import styles from '../../styles/homepage.module.css'

const HomePage: NextPage = () => {
  const INIT_REGION = 'RU';
  const SERVER_REGION = ['RU', 'EU', 'ASIA', 'NA'];
  const { Option } = Select;

  const [region, setRegion] = useState(INIT_REGION);
  const [accountName, setAccountName] = useState('');

  const inputChangeHandler = (e:any) => {
    const { target: { value = '' } = {} } = e;
    setAccountName(value);
  }

  const submitHandler = () => {
    // console.log(region, accountName);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        {/* <div>title & logo</div> */}
        <Select size='large' className={styles.serverSelector} value={region} onSelect={(v:string) => setRegion(v)}>
          {
            SERVER_REGION.map(each => {
              return (<Option value={each} key={each}>{each}</Option>)
            })
          }
        </Select>
        <Input size="large" value={accountName} onChange={inputChangeHandler} />
        <Button size='large' type="primary" className={styles.searchBtn} onClick={submitHandler}>Submit</Button>
      </div>
    </div>
  )
}

export default HomePage
