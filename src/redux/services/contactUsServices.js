import requests from "./httpService";

const contactUsServices = {
  createContactUs(data){
    return requests.post("/contactUs/add", data);
  },
}

export default contactUsServices;