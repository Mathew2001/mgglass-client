import requests from "../httpService";

const pergolaCatServices = {
  getAllPergolaCat(){
    return requests.post("/pergolaCat/all");
  },
  getPergolaCatById(id){
    return requests.post(`/pergolaCat/byid/${id}`);
  },
  getPergolaCatByName(body){
    return requests.post(`/pergolaCat/byname/${body.name}`,body);
  }
}

export default pergolaCatServices;