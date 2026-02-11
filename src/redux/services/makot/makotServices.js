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
  getMakotByName(body){
    return requests.post(`/makot/byname/${body.name}`,body);
  }
}

export default makotServices;