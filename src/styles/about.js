import styled, { css } from 'styled-components'
import { sizes, colors } from './constants'

const container = styled.div`
    width: 100%;
    margin: 100px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: ${sizes.container.large}) {
        margin: 0;
    }
    @media (max-width: ${sizes.container.medium}) {
        flex-direction: column;
    }
`

const content = styled.div`
    max-width: 50%;
    margin: 10px;
    font-size: 2rem;
    & > video {
        border-radius: 5px;
        width: 95%;
    }
    @media (max-width: ${sizes.container.medium}) {
        max-width: 100% !important;
    }
    ${props => props.hideOnSmall && css`
        @media (max-width: ${sizes.container.small}) {
            display: none;
        }
    `}
`

const infos = styled.div`
    width: 100%;
    height: 70px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    padding-top: 50px;
    & > a {
        text-decoration: none;
        font-size: 16px;
    }
    @media (max-width: ${sizes.container.small}) {
        display: block;
    }
`

const btn = styled.div`
    padding: 15px 25px;
    border-radius: 30px;
    color: white;
    background-color: ${colors.red};
    text-transform: uppercase;
    transition: 0.2s;
    text-align: center;
    &:hover {
        background-color: ${colors.darkred};
    }
`

const infosText = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    & > p {
        margin: 0;
        padding: 2px 0;
        font-size: 20px;
    }
    @media (max-width: ${sizes.container.small}) {
        margin-top: 10px;
        display: block;
    }
`

const infosTextRed = styled.p`
    color: ${colors.red};
    font-family: 'LG-Regular';
`

const infosTextWhite = styled.p`
    color: white;
`

export {
    container,
    content,
    infos,
    btn,
    infosText,
    infosTextRed,
    infosTextWhite
}