import requests from "../httpService";

const mecklahonCatServices = {
  getAllMeklahonCat(){
    return requests.post("/mecklahonCat/all");
  },
  getMeklahonCatById(id){
    return requests.post(`/mecklahonCat/byid/${id}`);
  },
  getMeklahonCatByName(body){
    return requests.post(`/mecklahonCat/byname/${body.name}`,body);
  }
}

export default mecklahonCatServices;