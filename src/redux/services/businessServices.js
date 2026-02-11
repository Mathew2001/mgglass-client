import requests from "./httpService";

const businessServices = {
  getBusiness(){
    return requests.get("/business/get");
  },
}

export default businessServices;