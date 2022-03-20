import { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import useGenerateAnimation from '../../lib/hooks/useGenerateAnimation'

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
        name: 'area1'
    },
    { start: { opacity: 0 }, end: { opacity: 1 }, name: 'area2' }
]

const ScorllContainer = styled.div`
    text-align:center;
`

const HeaderAndFooter = styled.div`
    height:100px; 
    line-height:100px; 
    background:#AC2121; 
    color:#fff;
`

const Banner = styled.div`
    height:400px; 
    background:#ddd; 
    line-height:400px;
`

const Column = styled.div`
    padding:50px 0;
    h2 {
        width:130px; 
        margin:0 auto; 
        background:#AC2121; 
        color:#fff; 
        height:50px; 
        line-height:50px; 
        margin-bottom:50px;
    }
`

const AreaContainer = styled.div`
    display:flex;
    justify-content:space-around
`

const Area = styled.div<IProps>`
    width:${({ width }) => width || '580px'}; 
    height:${({ height }) => height || '400px'}; 
    background-color:gray;
    margin:40px 40px;
`

const ScorllAnimationContainer = () => {
    const { area1, area2 } = useGenerateAnimation(animationOption)
    const _handleScroll = useCallback(
        () => {
            if (window.scrollY > Number(document.getElementById("area1")?.offsetTop)-400) {
                area1.play(true)
            }
            if (window.scrollY > Number(document.getElementById("area2")?.offsetTop)-400) {
                area2.play(true)
            }
        },
        []
    )
    useEffect(() => {
        const scrollDom = document
        scrollDom.addEventListener('scroll', _handleScroll)
        return () => scrollDom.removeEventListener('scroll', _handleScroll)
    }, [_handleScroll])

    return (
        <ScorllContainer id='scorllcontainer' >
            <h1>WOT初步布局</h1>
            <HeaderAndFooter id="header">头部</HeaderAndFooter>
            <Banner id="banner">banner</Banner>
            <div id="content">
                <Column >
                    <h2>区块一</h2>
                    <AreaContainer id='area1' style={area1.style}>
                        <Area id="area0-1" >1</Area>
                        <Area id="area0-2" >2</Area>
                    </AreaContainer>
                </Column>
                <Column >
                    <h2>区块二</h2>
                    <AreaContainer id='area2' style={area2.style}>
                        <Area id="area1-1" width='100vw'>3</Area>
                    </AreaContainer>
                </Column>
                <Column id='area2'>
                    <h2>区块三</h2>
                    <AreaContainer >
                        <Area id="area2-1" width='100vw'>4</Area>
                    </AreaContainer>
                </Column>
                <Column>
                    <h2>区块四</h2>
                    <AreaContainer>
                        <Area id="area4-1" >5</Area>
                        <Area id="area4-2" >6</Area>
                    </AreaContainer>
                </Column>
            </div>

            <HeaderAndFooter id="footer">尾部</HeaderAndFooter>
        </ScorllContainer>
    )
}

export default ScorllAnimationContainer