import { Outlet, Link } from 'react-router-dom'
export default function Contact() {
  return (
    <>
      <h1>Contact Page</h1>
      <br />

      <Link to='/'>Go to Home</Link>
      <br />
      <Link to='/about'>Go to About</Link>
    </>
  )
}
