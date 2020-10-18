import React from 'react'
import { css } from 'emotion'
import ItemsList from '../ItemsList/ItemsList'
import Details from '../Details/Details'
import { desktopBreakpoint } from '../../features/GlobalStyles'

const style = css`
    @media (max-width: ${desktopBreakpoint}){
        flex-direction: column-reverse;
        display: flex;
    }
    @media (min-width: ${desktopBreakpoint}){
        display: flex;
        background: #f3f3f3;
        height: 100%;
    }
`

const Container = () => {

    return <div className={style}>
        <ItemsList/>
        <Details/>
    </div>
}

export default Container