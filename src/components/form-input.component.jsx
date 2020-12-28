 
const FormInput = ({...addProps})=>{
 // const {taskToAdd} = task
 return(
<div>
    <input className='form-input'
    {...addProps}
     />
     
</div>

)
}

export default FormInput