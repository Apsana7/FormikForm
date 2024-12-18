import React from 'react'
import { Formik, Form, Field , ErrorMessage} from 'formik'
import * as yup from "yup"

const App = () => {

 
  
  const Forms = [
    {
      name: "Username", type: "text", placeholder: "name"
    },
    {
      name:"Email", type:"text", placeholder:"email"
    },
    { 
      name: "Password", type: "password", placeholder: "password" 
    },
    {
      name: "ConfirmPassword", type:"password", placeholder:"confirm password"
    }
   
  ]
  const schemas = yup.object().shape({
    Username: yup.string().required("User name is required"),
    Email: yup.string().email("Please provide a valid email"),
    Password: yup.string().max(5,"password must have atleast 8 characters!!").required("password is required"),
    ConfirmPassword: yup.string().oneOf([yup.ref('Password')], "Confirm password must match the password")
    .required("Confirm password is required")
  })

  return (
    <div className=' h-lvh flex items-center justify-center'>


    <Formik initialValues={{Username:"", Email:"", Password:"", ConfirmPassword:""}} 
       validationSchema={schemas}
       onSubmit={(values)=>{
      console.log(values)
      }}
    >  
      <Form className='h-fit bg-gray-300 w-3/12 flex items-center justify-center flex-col gap-6  p-4 py-8 shadow-lg rounded-xl'>

        <div>
          <h1 className='text-black font-bold text-3xl'>Login form</h1>
        </div>


        <div className='flex flex-col gap-3 w-fit'>
                  {
                    Forms.map((val, i) => {
                      return (
                        <div key={i} className='flex flex-col gap-1'>
                          {val.name}
                          <Field className='bg-white w-full rounded-md 
                          p-2 py-3 outline-none'name={val.name}  type={val.type} placeholder={val.placeholder} />

                          <ErrorMessage name={val.name} component={"div"} className='text-red-600'/>

                        </div>
                      )
                    })
                  }
            </div>

        <div>
          <button  className='bg-green-800 text-white rounded-lg p-2  w-fit shadow-lg ' type="submit" >submit</button>
        </div>

        <div className='flex flex-col lg:flex-row w-full justify-between items-center gap-10'>
          <div>Dont have an account?</div>
          <div className='text-red-700'>Forget password?</div>
        </div>
        
              </Form>
        </Formik>
    </div>
  )
}

export default App

