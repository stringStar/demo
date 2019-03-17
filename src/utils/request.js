import fetch from "dva/fetch";
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  const { noRes, ...rest } = options || {};
  const option = {
    ...rest,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "include",
    mode: "cors"
  };
  // console.log('loading');

  // function loadingToast() {

  // }
  //   if(option.method == 'POST') {
  //       const formData = new FormData();
  //       for(let k in option.body) {
  //         if(option.body[k] != undefined){
  //           formData.append(k, option.body[k]);
  //         }
  // 		  }
  //       option.body = formData
  //   };
  const response = await fetch(url, option);

  checkStatus(response);
  if (noRes) return true;
  const data = await response.json();
  // Toast.hide();

  //   if (ret.code == '0' || ret.code == 4) {
  return data;
  //   } else {
  //     const error = new Error(ret.message);
  //     throw error;
  //   }
}
