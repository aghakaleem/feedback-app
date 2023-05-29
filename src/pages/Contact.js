import Header from '../components/Header'
import { Outlet, Link } from 'react-router-dom'
export default function Contact() {
  return (
    <>
      <Header />

      <h1>Welcome to Contact Page</h1>
      <br />

      <Link to='/'>Home</Link>
      <br />
      <Link to='/about'>About</Link>
    </>
  )
}
