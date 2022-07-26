import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createClothes } from "../Store/actions/actions";
import swal from "sweetalert";

const Create = () => {
  const initialState = {
    id: null,
    name: "",
    type: "",
    // image: "",
    price: "",
    age: "",
  };
 

  const [clothes, setClothes] = useState(initialState);

  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
     e.preventDefault();
    const { name, value } = event.target;
    
    setClothes({ ...clothes, [name]: value});
  };
//   const onChangeImage = (event) => {
//    setClothes({
//      ...clothes,
//      image: event.target.files[0].name,
//    });
//    console.log(image)
// }
  const save = (e) => {
    e.preventDefault();
    const { name, type, price, age } = clothes;
;
    // var formData = new FormData();
    // formData.append("name", name);
    // formData.append("type", type);
    // formData.append("image", image, image.name);
    // formData.append("price", price);
    // formData.append("age", age);

    // const { name, type, image, price, age } = clothes;
    dispatch(createClothes(name, type, price, age))
      .then((data) => {
        setClothes({
          id: data.id,
          name: data.name,
          type: data.type,
          // image: data,image,
          price: data.price,
          age: data.age,
        }),
          config;
        setSubmitted(true);
swal({
      title: "Added!",
      text: "You submitted successfully!!",
      icon: "warning",
      button: "sure!",
    }).then(function () {
      window.location.href = "/dashboard";
    });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });

    
  };
  const newClothes = (e) => {
     e.preventDefault();
    setClothes(initialState);
    setSubmitted(false);
  };

  return (
    <div>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
        </div>
      ) : (
        <div
          class="content"
          style={{
            display: "flex",
            alignItems: "center",
            height: "400px",
            height: "700px",
            backgroundImage:
              "url('https://wallpaperaccess.com/full/1437631.jpg')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="container-fluid" style={{ textAlign: "center" }}>
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header card-header-primary">
                    <h4 class="card-title">Add cloth</h4>
                  </div>
                  <div>
                    <div className="card-body">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              placeholder="name"
                              name="name"
                              onChange={() => handleInputChange()}
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              placeholder="type"
                              name="type"
                              onChange={() => handleInputChange()}
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              placeholder="price"
                              value={clothes.price}
                              name="price"
                              onChange={() => handleInputChange()}
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              placeholder="age"
                              name="age"
                              onChange={() => handleInputChange()}
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
                        onClick={() => save()}
                        class="btn btn-primary pull-right"
                        // formEncType="multipart/form-data"
                      >
                        Add
                      </button>
                      <div class="clearfix"></div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Create;
