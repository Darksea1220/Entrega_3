import { useState } from 'react'

export function LoginPage () {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  // const { logIn } = useAuth()

  const handleOnchange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }
  return (
    <>
      <form>
        <label>Digita tu E-mail</label>
        <input type='email' onChange={handleOnchange} value={formState.email} />
        <label>Digita tu contraseña</label>
        <input type='password' onChange={handleOnchange} value={formState.password} />
      </form>
    </>
  )
}
