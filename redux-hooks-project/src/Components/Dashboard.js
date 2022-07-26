import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { findClothsByName } from "../Store/actions/actions";
import { useNavigate } from "react-router-dom";
import {
 getClothes
} from "../Store/actions/actions";
const Dashboard = () => {
  const [searchName, setSearchName] = useState("");
  const clothes = useSelector((state) => state.clothes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClothes());
  }, []);
const onChangeSearchName = (e) => {
  const searchName = e.target.value;
  setSearchName(searchName);
};
const findByName = (e) => {

  dispatch(findClothsByName(searchName));
};
   let isLoggedIn = JSON.parse(localStorage.getItem("user"));
   if (!isLoggedIn.logged_user) {
     navigate("/login");
   }

  
  return (
    <div class="dark-edition">
      <div class="wrapper ">
        <div
          class="sidebar"
          data-color="purple"
          data-background-color="black"
          data-image="../assets/img/sidebar-2.jpg"
        >
          Tip 1: You can change the color of the sidebar using:
          data-color="purple | azure | green | orange | danger" Tip 2: you can
          also add an image using data-image tag
          <div class="logo">
            <a
              href="http://www.creative-tim.com"
              class="simple-text logo-normal"
            >
              Creative Tim
            </a>
          </div>
          <div class="sidebar-wrapper">
            <ul class="nav">
              <li class="nav-item  ">
                <a class="nav-link" href="./dashboard.html">
                  <i class="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="./user.html">
                  <i class="material-icons">person</i>
                  <p>User Profile</p>
                </a>
              </li>
              <li class="nav-item active ">
                <a class="nav-link" href="./tables.html">
                  <i class="material-icons">content_paste</i>
                  <p>Table List</p>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="./typography.html">
                  <i class="material-icons">library_books</i>
                  <p>Typography</p>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="./icons.html">
                  <i class="material-icons">bubble_chart</i>
                  <p>Icons</p>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="./map.html">
                  <i class="material-icons">location_ons</i>
                  <p>Maps</p>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="./notifications.html">
                  <i class="material-icons">notifications</i>
                  <p>Notifications</p>
                </a>
              </li>
              <li class="nav-item active-pro ">
                <a class="nav-link" href="./upgrade.html">
                  <i class="material-icons">unarchive</i>
                  <p>Upgrade to PRO</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="main-panel">
          <nav
            class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "
            id="navigation-example"
          >
            <div class="container-fluid">
              <div class="navbar-wrapper">
                <a class="navbar-brand" href="javascript:void(0)">
                  Table List
                </a>
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-target="#navigation-example"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon icon-bar"></span>
                <span class="navbar-toggler-icon icon-bar"></span>
                <span class="navbar-toggler-icon icon-bar"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end">
                <form class="navbar-form">
                  <div class="input-group no-border">
                    <input
                      type="text"
                      value={searchName}
                      class="form-control"
                      placeholder="Search..."
                      onChange={onChangeSearchName}
                    />
                    <button
                      type="button"
                      class="btn btn-default btn-round btn-just-icon"
                      onClick={findByName}
                    >
                      <i class="material-icons">search</i>
                      <div class="ripple-container"></div>
                    </button>
                  </div>
                </form>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">
                      <i class="material-icons">dashboard</i>
                      <p class="d-lg-none d-md-block">Stats</p>
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link"
                      href="javscript:void(0)"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="material-icons">notifications</i>
                      <span class="notification">5</span>
                      <p class="d-lg-none d-md-block">Some Actions</p>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a class="dropdown-item" href="javascript:void(0)">
                        Mike John responded to your email
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        You have 5 new tasks
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        You're now friend with Andrew
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        Another Notification
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        Another One
                      </a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">
                      <i class="material-icons">person</i>
                      <p class="d-lg-none d-md-block">Account</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="content">
            <div class="container-fluid">
              <br />
              <button style={{ background: "#7b508c", width: "150px",margin:'20px' }}>
                <Link to={"/create"}>Add</Link>
              </button>
              <button style={{ background: "#7b508c", width: "150px" }}>
                <Link to={"/"}>Home</Link>
              </button>
              <div class="row">
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-header card-header-primary">
                      <h4 class="card-title ">Simple Table</h4>
                      <p class="card-category">
                        {" "}
                        Here is a subtitle for this table
                      </p>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table">
                          <thead class=" text-primary">
                            <th>ID</th>
                            <th>name</th>
                            <th>type</th>
                            <th>image</th>
                            <th>price</th>
                            {/* <th>price</th> */}
                            <th>age</th>
                            <th>Actions</th>
                          </thead>
                          {clothes &&
                            clothes.map((cloth, index) => (
                              <tbody>
                                <tr>
                                  <td key={index}>{index + 1}</td>
                                  <td>{cloth.name}</td>
                                  <td>{cloth.type}</td>
                                  <img
                                    src={cloth.image}
                                    style={{
                                      height: "10rem",
                                      width: "10rem",
                                    }}
                                  />
                                  <td>{cloth.price}</td>
                                  {/* <td>{cloth.price}</td> */}
                                  <td>{cloth.age}</td>
                                  <td>
                                    <Link to={"/cloth/" + cloth.id}>
                                      Actions
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            ))}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <footer class="footer">
                  <div class="container-fluid">
                    <nav class="float-left">
                      <ul>
                        <li>
                          <a href="https://creative-tim.com/presentation">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="http://blog.creative-tim.com">Blog</a>
                        </li>
                        <li>
                          <a href="https://www.creative-tim.com/license">
                            Licenses
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div class="copyright float-right" id="date">
                      , made with <i class="material-icons">favorite</i> by
                      <a href="https://www.creative-tim.com" target="_blank">
                        Esraa
                      </a>{" "}
                      for a better web.
                    </div>
                  </div>
                </footer>
                <script>
                  const x = new Date().getFullYear(); let date =
                  document.getElementById('date'); date.innerHTML = '&copy; ' +
                  x + date.innerHTML;
                </script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  export default Dashboard;