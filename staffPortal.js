//Turn on load animation and hide main content until loaded.
document.getElementById('pageTitle').style.display = "none";
document.getElementById('mainPageSection').style.display = "none";
document.getElementById('sessionsSection').style.display = "none";

//Get the data to populate the field
let staffName = "Kelly Polis"
//sessionStorage.getItem('staffName');
document.getElementById('staffName').innerHTML = staffName
const url = 'https://pffm.azurewebsites.net/employee'
const uri = `${url}/?name=${staffName}`
console.log(uri)
fetch(uri)
  .then(response => response.json())
  .then(data => populatePage(data))    
    //.then(data => )
  .catch(err => showErrorMsg(err))

//Populate the portal
function populatePage(data) {
    document.getElementById('name').innerHTML = data.name;
    document.getElementById('email').innerHTML = data.email;
    document.getElementById('phone').innerHTML = data.phone;
    document.getElementById('address').innerHTML = data.address;
    document.getElementById('city').innerHTML = data.city
    document.getElementById('state').innerHTML = data.state;
    document.getElementById('zip').innerHTML = data.zip;
    document.getElementById('emergencyContact').innerHTML = data.emergencyContactName;
    document.getElementById('emergencyPhone').innerHTML = data.emergencyContactPhone;
    /*client section once relationships are known
    document.getElementById('client1').innerHTML = client[0];
    document.getElementById('client2').innerHTML = client[1];
    document.getElementById('client1').innerHTML = client[2];
    document.getElementById('client2').innerHTML = client[3];
    */
    /*add functionality once we have the payment system added
    document.getElementById('hrsWorked').innerHTML = data.hrsWorked
    document.getElementById('payDate').innerHTML = data.payDate
    */
    //more to come as we get more data
    showPage()
}

//Turns off animation and shows the page with data fields completed
function showPage() {
    document.getElementById('loadingAnimation').style.display = "none"
    document.getElementById('pageTitle').style.display = "block";
    document.getElementById('mainPageSection').style.display = "block";
    document.getElementById('sessionsSection').style.display = "block";
}

//Turns off animation and shows error message
function showErrorMsg(err) {
	document.getElementById('loadingAnimation').style.display = "none"
    document.getElementById('errorMessage').innerHTML = `There was and error: ${err} when retrieving the data`
    document.getElementById('errorMessageSection').style.display = "block"
}
