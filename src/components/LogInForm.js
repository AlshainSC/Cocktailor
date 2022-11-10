


function LogInForm() {

function handleSubmitLoginForm() {

  }


  return (
    <div>
      <form className="logInForm" onSubmit={handleSubmitLoginForm}>
      <label>Username</label>
      <input/>
      <label>Password</label>
      <input />
      <button className="logInFormSubmitButton">Submit</button>
      <button className="registerButton">Register</button>
      </form>
    </div>
  )
}

export default LogInForm