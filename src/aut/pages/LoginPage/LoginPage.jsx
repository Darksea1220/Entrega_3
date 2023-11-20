// import { useState } from 'react'

// export function LoginPage () {
//   const [formState, setFormState] = useState({
//     email: '',
//     password: ''
//   })

//   // const { logIn } = useAuth()

//   const handleOnchange = ({ target }) => {
//     setFormState({
//       ...formState,
//       [target.name]: target.value
//     })
//   }
//   return (
//     <>
//       <form>
//         <label>Digita tu E-mail</label>
//         <input type='email' onChange={handleOnchange} value={formState.email} />
//         <label>Digita tu contraseña</label>
//         <input type='password' onChange={handleOnchange} value={formState.password} />
//       </form>
//     </>
//   )
// }

// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { doomieUser } from '../../mock/User'
import './LoginPage.css'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../Hooks/useAuth'
import { useForm } from '../../Hooks/useForm'

export function LoginPage () {
  // const [formData, setFormData] = useState({ email: '', password: '' })
  // const [isLogged, setIsLogged] = useState(false)
  // const navigate = useNavigate()
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData({ ...formData, [name]: value })
  //   console.log(name, value)
  // }
  // const email = formData.email.trim()
  // const password = formData.password.trim()
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (
  //     email === doomieUser.email &&
  //     password === doomieUser.password
  //   ) {
  //     setIsLogged(true)
  //     navigate('/dashboard')
  //   } else {
  //     setIsLogged(false)
  //     console.log(formData.email)
  //     console.log(doomieUser.email)
  //     console.log(formData.password)
  //     console.log(doomieUser.password)
  //     console.log('Error')
  //   }
  // }
  const { formState, handleOnChange, handleSubmit } = useForm()
  const { islogged } = useAuth()

  if (islogged) {
    return (
      <Navigate to='/' />
    )
  }

  return (
    <div className='login-page'>
      <div className='right-third'>
        <div className='welcome'>
          <h1>¡Hola!</h1>
          <h3>Bienvenido de nuevo</h3>
        </div>
        <form onSubmit={handleSubmit} className='login-form'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formState.email}
            onChange={handleOnChange}
            className='input-field'
          />
          <input
            type='password'
            name='password'
            placeholder='Contraseña'
            value={formState.password}
            onChange={handleOnChange}
            className='input-field'
          />
          <button type='submit' className='submit-button'>
            Entrar
          </button>
          <a href='/forgot-password' className='forgot-password'>
            ¿Olvidaste tu contraseña?
          </a>
        </form>
      </div>
      <img className='background' src='https://github.com/Darksea1220/Im-genes-para-FB/blob/master/Login.png?raw=true' />
    </div>
  )
}
