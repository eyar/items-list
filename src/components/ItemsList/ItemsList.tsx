import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../app/store'
import active from '../../assets/active.svg'
import arrow from '../../assets/arrow-right.svg'
import style from './ItemsList.style'
import { setCurrent } from '../../features/itemsSlice'

const ItemsList = () => {
    const { items, current } = useSelector((state: RootState) => state.items)
    const dispatch = useDispatch()

    const ref = useRef()

    const handleClick = (id: number) => {
        dispatch(setCurrent(id))
        window.scrollTo(0,0)
    }

    return <div className={style}>
        <ul>
            <h2>Items</h2>
            {items.map(({id, name},key)=><li key={key} onClick={()=>handleClick(id)}>
                <img src={active} alt="" width='23' height='23'/>
                {name}
                {current?.id===id && <img src={arrow} alt="" width='18' height='18'/>}
            </li>)}
        </ul>
    </div>
}

export default ItemsList