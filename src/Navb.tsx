
import { Navbar,Nav } from 'react-bootstrap'
export const Navb = () => {
  return (
    <div><Navbar bg='primary' variant='dark'>
    <Navbar.Brand href='/'>Navbar</Navbar.Brand>
    <Nav className='mr-auto'>

    <Nav.Link href='/' >Home</Nav.Link>
     <Nav.Link href='/about'>About</Nav.Link>
      <Nav.Link href='/user'>User</Nav.Link>
    </Nav>

      </Navbar></div>
  )
}
