import { css } from 'emotion'
import { desktopBreakpoint } from '../../features/GlobalStyles'

export default css`
    list-style: none;
    background: white;
    h2{
        font-size: 20rem;
        margin: 14px 0 26px 14px;
    }
    ul{
        list-style: none;
        padding-left: 0;
        li{
            font-size: 13rem;
            display: flex;
            height: 36px;
            align-items: center;
            position: relative;
            cursor: pointer;
            border-bottom: 2px solid #F2F2F2;
            &:first-of-type{
                border-top: 2px solid #F2F2F2;
            }
            &:hover{
                background: #f8f9fa;
            }
            img{
                display: flex;
                margin: auto 1px;
                + img{
                    position: absolute;
                    right: 13px;
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
        width: 307px;
    }
`
