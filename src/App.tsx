
import './App.css'
import { Navbar,Nav } from 'react-bootstrap'
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { User } from './User'

function App() {

 
  return (
    <>
    <BrowserRouter>
   <Routes></Routes>
       <Navbar bg='primary' variant='dark'>
    <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
    <Nav className='mr-auto'>

    <Nav.Link >  <Link to={''}>Home</Link>
    </Nav.Link>
     <Nav.Link href='#featuring'><Link to={''}>Features</Link></Nav.Link>
      <Nav.Link href='#pricing'><Link to={''}>Pricing</Link></Nav.Link>
    </Nav>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/user' element={<User/>}></Route>
      </Navbar>
    
      </BrowserRouter>
   
    </>
  )
}

export default App
