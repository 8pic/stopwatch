import { useContext } from "react";
import { testContext } from "./testcontext";

const Item = (props)=>{
    const context = useContext(testContext);

    const HandleDeleteItem = (e)=>{
        let TheTime = e.target.innerHTML
        context.setTimeArr(context.timeArr.filter(item=>item !== TheTime))
    }


return(
    <div className="time-list-item" onClick={HandleDeleteItem}>{props.children}</div>
)


}

export default Item ; 