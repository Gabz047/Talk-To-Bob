interface props {
  success: Boolean,
  message: string,  
  children?: React.ReactNode
}

export function Warning(props: props) {
  return (
    <div className="absolute top-0 left-0 z-50 flex justify-center items-center">
      <div style={
        {
          boxShadow: `0px 10px 50px ${props.success ? 'green' : 'red'}`
        }
      } className="w-120 h-50 bg-white rounded-2xl z-60 absolute flex flex-col justify-around p-5 items-center">
        <p>{props.message}</p>

      {props.children}

    </div>
      <div className=" z-50 w-dvw h-dvh bg-black  opacity-50"></div>

    </div>
    
  )
}