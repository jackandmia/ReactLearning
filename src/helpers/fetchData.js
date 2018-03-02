const fetchData = ({method="GET",URL,data={}}) => {
    console.log("Calling FetchData with URL " + URL);
    var config = {
        method: method,
        headers: { 
        'Content-Type': "application/json",
        'Authorization': 'Bearer ' + window.sessionStorage.accessToken}
      };
 
      if(method!=="GET") config = Object.assign({},config,{body:data});

      return fetch(URL, config)
      .then(response => {
          console.log(response);
        return response;
      }).catch(function (e) { 
        console.log("An error has occured while calling the API. " + e); 
      });
}

export default fetchData;