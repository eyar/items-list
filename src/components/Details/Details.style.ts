import { css } from 'emotion'
import { desktopBreakpoint } from '../../features/GlobalStyles'

export default css`
    background: #fafbff;
    h1{
        background: #01d1b2;
        color: white;
        width: 100%;
        font-size: 24rem;
    }
    h2{
        font-size: 13rem;
        color: #7cc5f6;
        margin-bottom: 21px;
    }
    label{
        font-size: 13rem;
        color: #c6d1df;
        margin-bottom: 15px;
        padding-left: 1px;
        + div{
            background: #f5f5f5;
            font-size: 14rem;
            padding-left: 14px;
            margin-bottom: 28px;
            line-height: 1.6;
            height: 24px;
            color: #b1a099;
        }
    }
    ul{
        list-style: none;
        li{
            background: #f5f5f5;
            padding-left: 18px;
            line-height: 2.6;
            height: 40px;
            font-size: 14rem;
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
        width: 1232px;
        height: 553px;
        margin: 48px 0 0 151px;
        border: 2px solid #e8e9eb;
        h1{
            height: 117px;
            padding: 18px 0 0 22px;
        }
        .columns{
            display: flex;
            label + div{
                width: 650px;
            }
            .details{
                height: 300px;
                width: 650px;
                margin: 31px 0 0 23px;
            }
            .actions{
                height: 300px;
                width: 500px;
                margin: 31px 0 0 0;
                ul{
                    padding-left: 5px;
                    margin-top: 53px;
                    li{
                        width: 505px;
                    }
                }
            }
        }
    }
`