import React from 'react'
import { css } from 'emotion'
import { desktopBreakpoint } from '../../features/GlobalStyles'

const styles = css`
    height: 55px;
    background-color: #343a40;
    a{
        font-size: 33rem;
        display: block;
        color: white;
        &:hover, &:visited, &:active{
            color: white;
            text-decoration: none;
        }
    }
    @media (max-width: ${desktopBreakpoint}){
        a{
            padding: 8px 0 0 10px;
        }
    }
`

const TopBar = () => <nav className={styles}>
    <a href="#home">BrightSource Items</a>
</nav>

export default TopBar