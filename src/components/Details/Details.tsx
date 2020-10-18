import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../app/store'
import style from './Details.style'
import help from '../../assets/help-12.svg'

const Details = () => {
    const { current } = useSelector((state: RootState) => state.items)
    let id, name, description, resourceType, path, actionIds:Array<any> = []
    if(current) ({id, name, description, resourceType, path, actionIds} = current)

    return current ? <div className={style}>
        <h1>{name}</h1>
        <div className='columns'>
            <div className='details'>
                <h2>GENERAL DETAILS<img src={help} alt="" width='25' height='25'/></h2>
                <label>NAME</label>
                <div>{name}</div>
                <label>DESCRIPTION</label>
                <div>{description}</div>
                <label>RESOURCE TYPE</label>
                <div>{resourceType}</div>
                <label>PATH</label>
                <div>{path}</div>
            </div>
            <div  className='actions'>
                <h2>PERMITTED ACTIONS<img src={help} alt="" width='25' height='25'/></h2>
                <ul>
                    {actionIds.map((actionId, key)=><li key={key}>{`Action ${actionId}`}</li>)}
                </ul>
            </div>
        </div>
    </div> : <></>
}

export default Details

