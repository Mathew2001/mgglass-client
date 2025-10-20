import requests from "../httpService";

const mecklahonCatServices = {
  getAllMeklahonCat(){
    return requests.post("/mecklahonCat/all");
  },
  getMeklahonCatById(id){
    return requests.post(`/mecklahonCat/byid/${id}`);
  },
  getMeklahonCatByName(name){
    return requests.post(`/mecklahonCat/byname/${name}`);
  }
}

export default mecklahonCatServices;