import { Outlet, Link } from 'react-router-dom'
export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <br />

      <Link to='/'>Go to Home</Link>
      <br />
      <Link to='/contact'>Go to Contact</Link>
    </>
  )
}
