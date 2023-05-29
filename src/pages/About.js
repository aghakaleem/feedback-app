import Header from '../components/Header'
import { Outlet, Link } from 'react-router-dom'
export default function About() {
  return (
    <>
      <Header />

      <h1>Welcome to About Page</h1>
      <br />

      <Link to='/'>Home</Link>
      <br />
      <Link to='/contact'>Contact</Link>
    </>
  )
}
