
import { Navb } from './Navb'
import { Outlet } from 'react-router-dom'
export const SharedLayout = () => {
  return (
    <div><Navb/>
    <Outlet/>
    </div>
  )
}
