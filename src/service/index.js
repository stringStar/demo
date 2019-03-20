import request from "../utils/request";
import qs from "qs";
export async function enroll(params) {
  return request("/api/v1/enroll", {
    method: "POST",
    body: JSON.stringify({ ...params })
  });
}
