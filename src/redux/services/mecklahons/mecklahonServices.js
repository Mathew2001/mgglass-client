import requests from "../httpService";

const mecklahonServices = {
  getMeklahonById(id){
    return requests.post(`/mecklahon/byid/${id}`);
  },
  getAllMeklahon(){
    return requests.post("/mecklahon/all");
  },
  getMeklahonByCatId(id){
    return requests.post(`/mecklahon/bycatid/${id}`);
  },
  getMeklahonByName(body){
    return requests.post(`/mecklahon/byname/${body.name}`,body);
  }
}

export default mecklahonServices;