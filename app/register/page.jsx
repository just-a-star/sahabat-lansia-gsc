export default function RegisterPage() {
  return (
    <main>
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </main>
  );
}
