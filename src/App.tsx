import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { css } from 'emotion'
import TopBar from './components/TopBar/TopBar'
import Container from './components/Container/Container'
import { fetchItems } from './features/itemsSlice'
import { RootState } from './app/store'
import { Loader } from './components/Loader/Loader'

const style = css`
  height: 100%;
`

function App() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state: RootState) => state.items)

  useEffect(()=>{
    dispatch(fetchItems())
  },[])

  return <div className={style}>
    <TopBar />
    {isLoading ? <Loader/> : <Container/>}
  </div>
}

export default App;
