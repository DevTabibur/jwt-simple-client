import React from 'react'

const Login = () => {

    const handleForm = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        console.log(email, pass);

        alert("SUBMITTED")
        e.target.reset()
    }
  return (
    <>
        <form onSubmit={handleForm}>

        <label className='my-3' htmlFor="E-mail">E-mail</label>
            <input type="text" name='email' placeholder='Email' required />
            <br />
            <label className='my-3' htmlFor="Password">Password</label>
            <input type="number" name='pass' placeholder='password' required/>
            <br />
            <input className='my-3' type="submit" value="submit" />

        </form>
    </>
  )
}

export default Login