import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import useGenerateAnimation from '../../lib/hooks/useGenerateAnimation'
import bg from '../../assets/img/profile-bg.jpeg'

interface IProps {
  width?: string
  height?: string
}

const animationOption = [
  {
    start: {
      opacity: 0,
      transform: 'translate3d(0, -100px, 0)'
    },
    end: {
      transform: 'none'
    },
    name: 'banner'
  },
  { start: { opacity: 0 }, end: { opacity: 1 }, name: 'area2' }
]

const ScorllContainer = styled.div`
  text-align: center;
`

const Header = styled.div`
  height: 50vh;
  background-color: black;
  position: relative;
  display: flex;
  justify-content: center;
  color: white;
  flex-direction: column;
  & > * {
    z-index: 100;
  }
  &:after {
    content: '';
    opacity: 0.4;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-image: ${`url(${bg.src})`};
    background-size: 100%;
  }
`

const HeaderContent = styled.p`
  font-size: 50px;
`

const BreadNav = styled.div`
  font-size: 20px;
`

const Banner = styled.div`
  height: 400px;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const BannerTitleDark = styled.div`
  font-size: 120px;
  font-weight: normal;
  font-style: normal;
  color: #191919;
  margin-top: -120px;
`

const BannerTitleLight = styled.div`
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  color: #ffbc00;
  margin-top: -80px;
`

const BannerContent = styled.div`
  color: #7c7c7c;
`

const HeaderAndFooter = styled.div`
  height: 100px;
  line-height: 100px;
  background: #ac2121;
  color: #fff;
`

const Column = styled.div`
  padding: 50px 0;
  h2 {
    width: 130px;
    margin: 0 auto;
    background: #ac2121;
    color: #fff;
    height: 50px;
    line-height: 50px;
    margin-bottom: 50px;
  }
`

const AreaContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const Area = styled.div<IProps>`
  width: ${({ width }) => width || '580px'};
  height: ${({ height }) => height || '400px'};
  background-color: gray;
  margin: 40px 40px;
`

const ScorllAnimationContainer = () => {
  const { banner } = useGenerateAnimation(animationOption)
  const _handleScroll = useCallback(() => {
    // do some logic about scorll
    // if (window.scrollY > Number(document.getElementById("area2")?.offsetTop) - 400) {
    //     area2.play(true)
    // }
  }, [])
  const handleGoBack = useCallback(() => {
    window.location.href = '/homePage'
  }, [])
  useEffect(() => {
    const scrollDom = document
    scrollDom.addEventListener('scroll', _handleScroll)
    banner.play(true)
    return () => scrollDom.removeEventListener('scroll', _handleScroll)
  }, [_handleScroll])

  return (
    <ScorllContainer id="scorllcontainer">
      <Header>
        <HeaderContent>关于您的数据</HeaderContent>
        <BreadNav>
          <span onClick={handleGoBack}>首页</span> &gt; player
        </BreadNav>
      </Header>
      <Banner id="banner">
        <div style={banner.style}>
          <BannerTitleDark>WOTSTATIC</BannerTitleDark>
          <BannerTitleLight>
            欢迎来到<span>WOTSTATIC</span>
          </BannerTitleLight>
          <BannerContent>下拉即可查看您在WOT中的表现以及各项指标</BannerContent>
        </div>
      </Banner>
      <div id="content">
        <Column>
          <h2>区块一</h2>
          <AreaContainer id="area1">
            <Area id="area0-1">1</Area>
            <Area id="area0-2">2</Area>
          </AreaContainer>
        </Column>
        <Column>
          <h2>区块二</h2>
          <AreaContainer id="area2">
            <Area id="area1-1" width="100vw">
              3
            </Area>
          </AreaContainer>
        </Column>
        <Column id="area2">
          <h2>区块三</h2>
          <AreaContainer>
            <Area id="area2-1" width="100vw">
              4
            </Area>
          </AreaContainer>
        </Column>
        <Column>
          <h2>区块四</h2>
          <AreaContainer>
            <Area id="area4-1">5</Area>
            <Area id="area4-2">6</Area>
          </AreaContainer>
        </Column>
      </div>

      <HeaderAndFooter id="footer">尾部</HeaderAndFooter>
    </ScorllContainer>
  )
}

export default ScorllAnimationContainer
