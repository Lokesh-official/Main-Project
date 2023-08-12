header.innerHTML = `
  <div class="navbar">
    <div class="logo">
      <a href="index.html">
        <img src="images/nklogo.png" alt=""  class="main-logo-img"/>
      </a>
    </div>
    <nav>
      <ul id="MenuItems">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="Register.html">Register</a></li> 
      </ul>
    </nav>
    <a href="#">
      <img src="images/cart.png" alt="" class="cart-logo-img"/>
    </a>
    <img src="images/menu.png" alt="" class="menu-icon" onclick="menutoggle()"/>
  </div>
`;