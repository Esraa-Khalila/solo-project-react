import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateClothes, deleteClothes } from "../Store/actions/actions";
import Service from "../Store/Services/Service";

const Edit = (props) => {
  const initialState = {
    id: null,
    name: "",
    type: "",
    age: "",
  };

  const [currentTutorial, setCurrentTutorial] = useState(initialState);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const getTutorial = (id) => {
    Service.get(window.location.pathname)
      .then((response) => {
        setCurrentTutorial(response.data.clothes);
        console.log(response.data.clothes);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getTutorial(window.location.pathname);
  }, [window.location.pathname]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };
  const updateStatus = (status) => {
    const data = {
      id: currentTutorial.id,
      name: currentTutorial.name,
      type: currentTutorial.type,
      age: currentTutorial.age,
    };
    dispatch(updateClothes(currentTutorial.id, data))
      .then((response) => {
        console.log(response);
        setCurrentTutorial({ ...currentTutorial });
        setMessage("The status was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const updateContent = () => {
    dispatch(updateClothes(currentTutorial.id, currentTutorial))
      .then((response) => {
        console.log(response);
               swal({
                 title: "update!",
                 text: "The status was updated successfully!",
                 icon: "warning",
                 button: "sure!",
               }).then(function () {
                 window.location.href = "/dashboard";
               });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const removeCloth = () => {
    dispatch(deleteClothes(currentTutorial.id))
      .then(() => {
        swal({
      title: "remove!",
      text: "are you sure to remove this data?!",
      icon: "warning",
      button: "sure!",
    }).then(function () {
      window.location.href = "/dashboard";
    });
  
      })
      .catch((e) => {
        console.log(e);
      });
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
        <div class="container-fluid" style={{ textAlign: "center" }}>
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Edit/Delete</h4>
                </div>
                <div>
                  <div className="card-body">
                    <form enctype="multipart/form-data">
                      {" "}
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              placeholder="name"
                              name="name"
                              value={currentTutorial.name}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              placeholder="type"
                              name="type"
                              value={currentTutorial.type}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="number"
                              placeholder="price"
                              name="price"
                              value={currentTutorial.price}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              placeholder="age"
                              name="age"
                              value={currentTutorial.age}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div class="col-md-12">
                        <div class="form-group"></div>

                        <input
                          type="file"
                          name="image"
                          onChange={handleInputChange}
                          required
                        />
                      </div> */}
                    </form>

                    <br />
                    <button
                      type="submit"
                      onClick={updateContent}
                      class="btn btn-primary pull-right"
                      // formEncType="multipart/form-data"
                    >
                      update
                    </button>
                    <button
                      class="btn btn-danger pull-right"
                      onClick={removeCloth}
                    >
                      Delete
                    </button>
                    <a href="/dashboard" class="btn btn-primary pull-right">
                      Back
                    </a>
                    <div class="clearfix"></div>
                    <p>{message}</p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//     <div>
//       {currentTutorial ? (
//         <div className="edit-form">
//           <h4>Tutorial</h4>
//           <form>
//             <div className="form-group">
//               <label htmlFor="title">Title</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="title"
//                 name="name"
//                 value={currentTutorial.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="description"
//                 name="type"
//                 value={currentTutorial.type}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>
//                 <strong>Status:</strong>
//               </label>

//             </div>
//           </form>

//             <button
//               className="badge badge-primary mr-2"
//               onClick={() => updateStatus(false)}
//             >
//               UnPublish
//             </button>

//             <button
//               className="badge badge-primary mr-2"
//               onClick={() => updateStatus(true)}
//             >
//               Publish
//             </button>

//           <button className="badge badge-danger mr-2" onClick={removeTutorial}>
//             Delete
//           </button>
//           <button
//             type="submit"
//             className="badge badge-success"
//             onClick={updateContent}
//           >
//             Update
//           </button>
//           <p>{message}</p>
//         </div>
//       ) : (
//         <div>
//           <br />
//           <p>Please click on a Tutorial...</p>
//         </div>
//       )}
//     </div>
//   );
// };
export default Edit;
