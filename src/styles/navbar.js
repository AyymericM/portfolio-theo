import styled from 'styled-components'

const container = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const logo = styled.img`
    width: 64px;
    height: 64px;
`

const menuitems = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    & > a {
        color: white;
        font-size: 16px;
        text-decoration: none;
        margin: 0 0 0 25px;
    }
`

export {
    container,
    logo,
    menuitems
}