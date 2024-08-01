import { useContext } from "react"
import Item from "./item"
import { testContext } from "./testcontext"

const TimeList = (props)=>{
    const context = useContext(testContext);

    return(
        <div className="main-time-list">
                {context.timeArr.map((c)=>(
                    <Item key={Math.random()}>{c}</Item>
                ))}
        </div>
    )

}


export default TimeList