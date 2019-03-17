import request from "../utils/request";
import qs from "qs";
export async function getTopImg(params) {
  return request("/api/finmarket_topimg");
}

export async function getIndexList(params) {
  return request("/api/finmarket_product");
}
export async function getCardList(params) {
  return request("/api/finmarket/cardlist");
}
export async function getLoanList(params) {
  return request("/api/finmarket/loanlist");
}

export async function getIp(params) {
  return request(`/api/index?${qs.stringify(params)}`, { noRes: true });
}

export async function getProduct(params) {
  return request(`/api/product?${qs.stringify(params)}`, { noRes: true });
}
