


import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClothes } from "../Store/actions/actions";
const Home = () => {
 
  const clothes = useSelector((state) => state.clothes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClothes());
  }, []);



  return (
    <>
      <div className="header">
        <div class="container text-center">
          <div class="logo">
            <h1>
              <b>fashion</b>
            </h1>
          </div>

          <h1>for everyone </h1>
        </div>
      </div>
      <div class="container">
        <div class="row">
          {" "}
          {clothes &&
            clothes.map((cloth, index) => (
              <div class="col-md-4">
                <h4 class="text-center">
                  <strong>STYLE {index + 1}</strong>
                </h4>
                <hr />
                <div
                  class="profile-card-4 text-center"
              
                >
                  <div>
                    <img
                      src={cloth.image}
                      class="img img-responsive"
                      style={{ width: "270px", height: "300px" }}
                    />
                    <div class="profile-content">
                      <div class="profile-name">
                        {/* <p style={{ fontSize: "20px",color:'black' }}> {cloth.name}</p> */}
                      </div>
                      <div class="profile-description"></div>
                      <div class="row">
                        <div class="col-xs-4">
                          <div class="profile-overview">
                            {/* <p>{cloth.type}</p> */}
                          </div>
                        </div>

                        <div class="col-xs-4 ">
                          <div class="profile-overview">
                            <p
                              style={{
                                fontSize: "20px",
                                color: "black",
                                padding: "3px",
                              }}
                            >
                              name :{" "}
                            </p>
                            <p
                              style={{
                                fontSize: "20px",
                                color: "black",
                                padding: "3px",
                              }}
                            >
                              price :{" "}
                            </p>
                            <p
                              style={{
                                fontSize: "20px",
                                color: "black",
                                padding: "3px",
                              }}
                            >
                              age :{" "}
                            </p>
                          </div>
                        </div>
                        <div class="col-xs-4">
                          <div class="profile-overview">
                            <p style={{ fontSize: "20px", padding: "3px" }}>
                              {cloth.name}
                            </p>
                            <p style={{ fontSize: "20px", padding: "3px" }}>
                              {cloth.price}
                            </p>
                            <p style={{ fontSize: "20px", padding: "3px" }}>
                              {cloth.age}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}{" "}
        </div>
      </div>
    </>
  );
};


export default Home;