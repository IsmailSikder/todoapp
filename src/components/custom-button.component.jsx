const CustomButton=({children,...props})=>(
    <div className='custom-button'>
        <button 
        {...props}
        >
            {children}
        </button>

    </div>
)

export default CustomButton