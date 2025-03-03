"use client";

function LoginPage() {

  return (
    <div>
      <form>

        <h1>Login</h1>

        <label> Email: </label>
        <input type="email"/>

        <label> Password: </label>
        <input type="password"/>

        <button>Login</button>
      </form>
    </div>
  );
}
export default LoginPage;