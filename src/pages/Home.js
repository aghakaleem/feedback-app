import Header from '../components/Header'
import { Outlet, Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <Header />

      <h1>Welcome to Home Page</h1>
      <br />

      <Link to='/about'>About</Link>
      <br />
      <Link to='/contact'>Contact</Link>
    </>
  )
}
