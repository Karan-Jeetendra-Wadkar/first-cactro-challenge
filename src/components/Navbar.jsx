import "./Navbar.css"

const Navbar = () => {
  return (
<div className="navcss">
<nav className="navBar">
    <div className="fontBold"><span className="Hcss">H</span>OURS</div>
    <div className="links">
      <a id="dash" href="#" >Dashboard</a>
      <a href="#">Projects</a>
      <a href="#">Team</a>
      <a href="#">Clients</a>
      <a href="#">Time</a>
      <a href="#">Reports</a>
    </div>
    <div className="rightNav">
      <img className="bellImg" src="https://static.vecteezy.com/system/resources/previews/011/910/057/original/bells-line-inverted-icon-vector.jpg" alt="icon"/>
      <img className="marioImg"  src="https://i.pinimg.com/originals/19/6e/53/196e53be93f1be62e3d9bba8e25d8bb3.jpg"  alt="User" />
      <span>Mario</span>
      <img className="bellImg" src="https://www.svgrepo.com/show/488771/arrow-down-simple.svg" alt="icon" />
    </div>
  </nav>
</div>
  )
}

export default Navbar
