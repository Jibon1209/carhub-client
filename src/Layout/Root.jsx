import { Outlet } from "react-router-dom"
import Toggle from "../Components/Toggle"

export const Root = () => {
    
  return (
    <div className="max-w-screen-2xl mx-auto font-manrope">
        <Outlet/>
        <Toggle></Toggle>
    </div>
  )
}
