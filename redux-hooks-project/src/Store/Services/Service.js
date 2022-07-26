import http from "../../http-common";

const getAll = () => {
  return http.get("/cloth");
};
const get = (id) => {
  return http.get(`${id}`);
};
const create = (data) => {
  return http.post("/cloth", data);
};
const update = (id, data) => {
  return http.put(`/cloth/${id}`, data);
};
function remove(id) {
  return http.delete(`/cloth/${id}`);
}
function removeAll() {
  return http.delete(`/cloth`);
}
function findByName(name) {
  return http.get(`/cloth?name=${name}`);
}
const Service = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
};
export default Service;
