import fetchJSON from "./modules/dataLoader.js";
function myFunction() {
var auth = document.getElementById('auth').value;
var request = document.getElementById('request').value;

var my_headers = {
'authorization': header,
'content-type': `application/json`
}

var myData = await fetchJSON(request, my_headers)

return myData
}
