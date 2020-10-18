import { css } from 'emotion'
import { desktopBreakpoint } from '../../features/GlobalStyles'

export default css`
    list-style: none;
    background: white;
    h2{
        font-size: 25rem;
        margin: 18px 0 34px 18px;
    }
    ul{
        list-style: none;
        padding-left: 0;
        li{
            font-size: 17rem;
            display: flex;
            height: 44px;
            align-items: center;
            position: relative;
            cursor: pointer;
            &:hover{
                background: #f8f9fa;
            }
            img{
                display: flex;
                margin: auto 3px;
                + img{
                    position: absolute;
                    right: 18px;
                }
            }
        }
    }
    @media (max-width: ${desktopBreakpoint}){
        h2{
            text-align: center;
        }
    }
    @media (min-width: ${desktopBreakpoint}){
        width: 385px;
    }
`
