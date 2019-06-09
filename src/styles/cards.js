import styled from 'styled-components'
import { sizes, colors } from './constants'

const container = styled.div`
    position: relative;
    width: calc(50% - 20px);
    box-sizing: border-box;
    height: 600px;
    margin: 10px;

    @media (max-width: ${sizes.container.large}) {
        width: calc(50% - 20px);
        height: 500px;
        margin: 10px;
    }

    @media (max-width: ${sizes.container.medium}) {
        width: 100%;
        height: 300px;
        margin: 10px 0;
    }
`

const thumb = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 5px;

    @media (max-width: ${sizes.container.large}) {
        height: 400px;
    }

    @media (max-width: ${sizes.container.medium}) {
        height: 200px;
    }
`

const texts = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
`

const cat = styled.p`
    color: ${colors.red};
    text-transform: uppercase;
    font-family: 'LG-Regular';
    font-size: 16px;
`

const title = styled.p`
    color: white;
    font-size: 18px;
`

export {
    container,
    thumb,
    texts,
    cat,
    title
}