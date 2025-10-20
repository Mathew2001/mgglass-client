import requests from "../httpService";

const pergolaServices = {
  getPergolaById(id){
    return requests.post(`/pergola/byid/${id}`);
  },
  getAllPergola(){
    return requests.post("/pergola/all");
  },
  getPergolaByCatId(id){
    return requests.post(`/pergola/bycatid/${id}`);
  },
  getPergolaByName(name){
    return requests.post(`/pergola/byname/${name}`);
  }
}

export default pergolaServices;