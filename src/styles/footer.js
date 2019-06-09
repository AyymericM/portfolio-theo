import styled from 'styled-components'
import { sizes, colors } from './constants'

const container = styled.div`
    position: relative;
    height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 2.5rem;

    & > h1 {
        letter-spacing: 1px;
        font-weight: 300;
        margin: 0;
        padding: 0;
        font-family: 'LG-Regular';
    }

    & > a {
        font-weight: 400;
        text-decoration: underline;
        color: white;
        margin: 0 0 100px 0;
        padding: 0;
        font-family: 'Roboto';
        font-size: 3.5rem;
    }

    & > h1 > span {
        color: ${colors.red};
    }

    @media (max-width: ${sizes.container.medium}) {
        font-size: 2rem;
        & > a {
            font-size: 3rem;
        }
    }

    @media (max-width: ${sizes.container.small}) {
        font-size: 1.5rem;
        height: 70vh;
        & > a {
            font-size: 2.5rem;
        }
    }
`

const bottom = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100%;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > p > a {
        color: ${colors.red};
        text-decoration: none;
    }

    @media (max-width: ${sizes.container.small}) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-size: 14px;
    }
`

const links = styled.div`
    & > a {
        text-decoration: none;
        color: white;
        margin: 0 0 0 20px;
    }
    @media (max-width: ${sizes.container.small}) {
        & > a {
            margin: 0 20px 0 0;
        }
    }
`

export {
    container,
    bottom,
    links
}