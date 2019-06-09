import styled from 'styled-components'
import { sizes, colors } from './constants'

const main = styled.div`
    max-width: ${sizes.container.large};
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: ${sizes.container.large}) {
        width: 100%;
        padding: 0 15px;
    }

    @media (max-width: ${sizes.container.small}) {
        width: 100%;
        padding: 0 10px;
    }
`

const header = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: 'LG-Regular';
    font-size: 2.5rem;
    & > h1 {
        margin: 0;
        padding: 0;
    }
    & > h1 > span {
        color: ${colors.red};
        font-family: 'LG-Italic';
    }
    & > p {
        position: absolute;
        bottom: 0;
        left: 0;
        text-transform: uppercase;
    }

    @media (max-width: ${sizes.container.medium}) {
        font-size: 2rem;
    }

    @media (max-width: ${sizes.container.small}) {
        font-size: 1.5rem;
    }
`

const cardslist = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: ${sizes.container.medium}) {
        flex-direction: column;
    }
`

export {
    main,
    header,
    cardslist
}