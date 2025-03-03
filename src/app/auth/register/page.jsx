"use client";

function RegisterPage() {

  return (
    <div>
      <form>
        <h1>Register</h1>

        <label>Username:</label>
        <input type="text"/>

        <label>Email:</label>
        <input type="email"/>

        <label>Password: </label>
        <input type="password"/>

        <label>Confirm Password:</label>
        <input type="password"/>

        <button>Register</button>
      </form>
    </div>
  );
}
export default RegisterPage;