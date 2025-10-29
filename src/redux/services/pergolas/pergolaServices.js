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
  getPergolaByName(body){
    return requests.post(`/pergola/byname/${body.name}`,body);
  }
}

export default pergolaServices;