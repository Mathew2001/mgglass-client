import requests from "../httpService";

const makotCatServices = {
  getAllMakotCat(){
    return requests.post("/makotCat/all");
  },
  getMakotCatById(id){
    return requests.post(`/makotCat/byid/${id}`);
  },
  getMakotCatByName(body){
    return requests.post(`/makotCat/byname/${body.name}`,body);
  }
}

export default makotCatServices;