const FormMessage = ({text,err}) =>{
    return(
        <div className={`${err? 'bg-red-700':'bg-primary-500'} form-message text-center mt-1 p-2 rounded-md text-primary-50 w-full h-max`}>
            <p>{text}</p>
        </div>
        
    )
}
export default FormMessage


//comment porque puedo.
//y puedo hacerlo porque puedo
