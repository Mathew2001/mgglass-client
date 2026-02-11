import requests from "./httpService";

const pageServices = {
  getPageBySlug(slug) {
    return requests.get(`/page/getbyslug/${slug}`);
  },
  getAllPages() {
    return requests.get("/page/getall");
  },
};

export default pageServices;