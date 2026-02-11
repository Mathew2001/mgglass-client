import requests from "./httpService";

const reviewServices = {
  createReview(data){
    return requests.post("/review/add", data);
  },
  getReviewsByIsApproved(){
    return requests.post("/review/byisapproved");
  }
}

export default reviewServices;