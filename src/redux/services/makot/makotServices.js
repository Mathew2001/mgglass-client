import requests from "../httpService";

const makotServices = {
  getMakotById(id){
    return requests.post(`/makot/byid/${id}`);
  },
  getAllMakot(){
    return requests.post("/makot/all");
  },
  getMakotsByCatId(id){
    return requests.post(`/makot/bycatid/${id}`);
  },
  getMakotByName(name){
    return requests.post(`/makot/byname/${name}`);
  }
}

export default makotServices;