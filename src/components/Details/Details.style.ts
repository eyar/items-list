import { css } from 'emotion'
import { desktopBreakpoint } from '../../features/GlobalStyles'

export default css`
    background: #fafbff;
    h1{
        background: #01d1b2;
        color: white;
        width: 100%;
        font-size: 20rem;
    }
    h2{
        font-size: 10rem;
        color: #7cc5f6;
        margin-bottom: 15px;
    }
    label{
        font-size: 10rem;
        color: #c6d1df;
        margin-bottom: 10px;
        + div{
            background: #f5f5f5;
            font-size: 9rem;
            padding-left: 11px;
            margin-bottom: 23px;
            line-height: 1.9;
            height: 21px;
            color: #b1a099;
        }
    }
    ul{
        list-style: none;
        li{
            background: #f5f5f5;
            padding-left: 13px;
            line-height: 2.6;
            height: 31px;
            font-size: 11rem;
            color: #c1c6d9;
            margin-bottom: 4px;
        }
    }
    @media (max-width: ${desktopBreakpoint}){
        h1{
            padding: 20px;
            text-align: center;
        }
        h2{
            text-align: center;
        }
        .columns{
            padding: 0 10px;
            ul{
                padding-left: 0;
            }
        }
    }
    @media (min-width: ${desktopBreakpoint}){
        width: 986px;
        height: 443px;
        margin: 37px auto;
        border: 2px solid #e8e9eb;
        h1{
            height: 94px;
            padding: 14px 0 0 17px;
        }
        .columns{
            display: flex;
            label + div{
                width: 520px;
            }
            .details{
                height: 300px;
                width: 520px;
                margin: 22px 0 0 18px;
            }
            .actions{
                height: 300px;
                margin: 22px 0 0 0;
                ul{
                    padding-left: 5px;
                    margin-top: 40px;
                    li{
                        width: 402px;
                    }
                }
            }
        }
    }
`