fetch("https://api.hostelduniya.com/api/hostel/rooms?hostel_id=1")
    .then((res) => {
        // console.log(res.json());
        return res.json();
    })
    .then((data) => {
        console.log(data.data.hostel[0].pincode);
    })
    .catch((error) => {
        console.log(error);
    })