import { Link } from "react-router-dom"

const Header =()=>(
    <div  className='header'>
        <Link className='option' to='/'>HOME</Link>
        <Link className='option' to='/TODOS'>TASK</Link>
        
    </div>
)

export default Header