const fetchData = ({method="GET",URL,data={}}) => {
    var config = {
        method: method,
        headers: { 
        'Content-Type': "application/json",
        'Authorization': 'Bearer ' + window.sessionStorage.accessToken}
      };
 
      if(method!=="GET") config = Object.assign({},config,{body:data});

      return fetch(URL, config)
      .then(response => {
        return response;
      }).catch(function (e) { 
        console.log("An error has occured while calling the API. " + e); 
      });
}

export default fetchData;