const Navbar = () => {



    return(
        <>
        <nav className="navbar">
            <div className="logo">
              <img src="../public/imgs/brand_logo.png" alt="" />
            </div>
            <ul className="navlinks">
              <li href="#">Menu</li>
              <li href="#">Location</li>
              <li href="#">About</li>
              <li href="#">Contact</li>
            </ul>
            <button className="loginnbtn">Login</button>
          </nav>
        </>
    )

}

export default Navbar