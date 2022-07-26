import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Login } from "../Store/actions/actions";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const initialState = {
    id: null,
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  const [User, setUser] = useState(initialState);
  const [loggeduser, setLoggeduser] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...User, [name]: value });
  };
  //   const onChangeImage = (event) => {
  //    setClothes({
  //      ...clothes,
  //      image: event.target.files[0].name,
  //    });
  //    console.log(image)
  // }
  const save = () => {
    const { email, password, role } = User;
    // var formData = new FormData();
    // formData.append("name", name);
    // formData.append("type", type);
    // formData.append("image", image, image.name);
    // formData.append("price", price);
    // formData.append("age", age);

    // const { name, type, image, price, age } = clothes;
    dispatch(Login(email, password, role))
      .then((data) => {
        setUser({
          id: data.id,
          email: data.email,
          password: data.password,
          roles: ["Admin"],
        });
        localStorage.setItem("user", JSON.stringify(data));
        let isLoggedIn = JSON.parse(localStorage.getItem("user"));
        if (isLoggedIn.logged_user.role == "admin") {
          swal({
            title: "Admin!",
           
            icon: "warning",
            button: "sure!",
          }).then(function () {
            window.location.href = "/dashboard";
          });
        } else {
               swal({
                 title: "User!",
                 text: "You are not Admin!!",
                 icon: "warning",
                 button: "sure!",
               }).then(function () {
                 window.location.href = "/";
               });
        }

        setSubmitted(true);
      })

      .catch((e) => {
        console.log(e);
        
      });
  };
  const newClothes = () => {
    setClothes(initialState);
    setSubmitted(false);
  };

  return (
    <div>
    
        <div
          class="content"
          style={{
            display: "flex",
            alignItems: "center",
            height: "700px",
            backgroundImage:
              "url('https://wallpaperaccess.com/full/1437631.jpg')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            class="container-fluid"
            style={{
              textAlign: "center",
              diplay: "flex",
              justifyContent: "center",
            }}
          >
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header card-header-primary">
                    <h4 class="card-title">Add category</h4>
                  </div>
                  <div>
                    <div className="card-body">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              placeholder="email"
                              name="email"
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="password"
                              placeholder="passwoed"
                              name="password"
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* <div class="col-md-12">
                        <div class="form-group"></div>

                        <input
                          type="file"
                          name="image"
                          onChange={onChangeImage}
                          required
                        />
                      </div> */}

                      <br />

                      <button
                        type="submit"
                        onClick={save}
                        class="btn btn-primary pull-right"
                        // formEncType="multipart/form-data"
                      >
                       login
                      </button>
                      <div class="clearfix"></div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
 
    </div>
  );
};
export default SignIn;
