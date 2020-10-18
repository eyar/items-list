import React from 'react'
import { css } from 'emotion'
import { desktopBreakpoint } from '../../features/GlobalStyles'

const styles = css`
    height: 68px;
    background-color: #343a40;
    a{
        font-size: 33rem;
        padding: 8px 0;
        display: block;
        color: white;
        &:hover, &:visited, &:active{
            color: white;
            text-decoration: none;
        }
    }
    @media (max-width: ${desktopBreakpoint}){
        a{
            padding-left: 10px;
        }
    }
`

const TopBar = () => <nav className={styles}>
    <a href="#home">BrightSource Items</a>
</nav>

export default TopBar