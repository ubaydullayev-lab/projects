
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';



function MyNavbar() {
  return (
    <div>
    <Navbar color="dark" dark expand="md" style={{position:'fixed', zIndex:'1', width:'100%',borderRadius: '0px 0px 30px 30px', }} >
        <NavbarBrand  href="#About me" color="dark" className='text-secondary mx-5 fw-bolder' style={{}}>

      Ubaydullayev Lochinbek
    </NavbarBrand>
      <Nav className="ml-auto fw-bolder "  navbar style={{display:'flex', justifyContent:'center', width:'100%', gap:'50px', position:'relative', right:'90px', }} >
        <NavItem><NavLink  href="#About me" >Home</NavLink></NavItem>
        <NavItem><NavLink href="#projects">Projects</NavLink></NavItem>
        <NavItem><NavLink href="#skills">Skills</NavLink></NavItem>
        <NavItem><NavLink href="#Footer">Contact</NavLink></NavItem>
      </Nav>
    </Navbar>
    </div>
  );
}

export default MyNavbar;
