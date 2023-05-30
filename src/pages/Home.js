import { Outlet, Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <br />

      <Link to='/about'>Go to About</Link>
      <br />
      <Link to='/contact'>Go to Contact</Link>
    </>
  )
}
