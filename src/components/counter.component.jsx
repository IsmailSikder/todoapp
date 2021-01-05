import { useState } from "react"
import CustomButton from "./custom-button.component"

const Count=()=>{

    const [counter, setCounter] = useState(0)
    return(
        <div>
            <p>{counter}</p>
            <CustomButton onClick={()=>setCounter(counter+1)}>Increase Counter</CustomButton>
        </div>
    )
}

export default Count