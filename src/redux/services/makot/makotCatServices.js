import requests from "../httpService";

const makotCatServices = {
  getAllMakotCat(){
    return requests.post("/makotCat/all");
  },
  getMakotCatById(id){
    return requests.post(`/makotCat/byid/${id}`);
  },
  getMakotCatByName(name){
    return requests.post(`/makotCat/byname/${name}`);
  }
}

export default makotCatServices;