import { useUser } from "@clerk/clerk-react"
import { Navigate,Outlet,  } from "react-router-dom";

function Auth() {
    const {isSigned,isLoaded} = useUser();
    if(!isSigned){
        return  <Navigate to={"/auth"} replace={true}/>
    }
  return (
    <div>
        {
            !isLoaded ? <div>Loading....</div>:<Outlet/>
        }
    </div>
  )
}

export default Auth