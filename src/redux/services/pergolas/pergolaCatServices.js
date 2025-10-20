import requests from "../httpService";

const pergolaCatServices = {
  getAllPergolaCat(){
    return requests.post("/pergolaCat/all");
  },
  getPergolaCatById(id){
    return requests.post(`/pergolaCat/byid/${id}`);
  },
  getPergolaCatByName(name){
    return requests.post(`/pergolaCat/byname/${name}`);
  }
}

export default pergolaCatServices;