import { Link } from "react-router-dom";
const Navbar = () => {
    let isLoggedIn = JSON.parse(localStorage.getItem("user"));
   
 function logout() {
   swal({
     title: "logging out!",
     text: "Are you sure you want to log out!",
     icon: "warning",
     button: "sure!",
   }).then(function () {
     window.location.href = "/";
   });
   localStorage.clear();

   // window.location.href="/";
 }
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarCenteredExample"
          >
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>

              
                {!isLoggedIn ? (
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Log in
                    </a>
                  </li>
                ) : null}

                {isLoggedIn ? (
                  <li className="nav-item">
                    <a className="nav-link" onClick={logout}>
                      Log out
                    </a>
                  </li>
                ) : null}
              </ul>
       
          </div>
        </div>
      </nav>
    ); 
}
export default Navbar