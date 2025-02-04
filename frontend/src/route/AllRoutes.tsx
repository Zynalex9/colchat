import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Room from '../page/Room'

const AllRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/room/:id" element={<Room/>}/>
  </Routes>
  )
}

export default AllRoutes
