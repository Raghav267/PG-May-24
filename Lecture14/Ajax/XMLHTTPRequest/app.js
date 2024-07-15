const req = new XMLHttpRequest();

req.onload = function () {
    const responsefromapi = (JSON.parse(this.response));
    console.log(responsefromapi.data.hostel[0].name)
}

req.onerror = function (err) {
    console.log(err)
}

const url = "https://api.hostelduniya.com/api/hostel/rooms?hostel_id=1"

req.open("GET", url);

req.send();