axios.get("https://api.hostelduniya.com/api/hostel/rooms?hostel_id=1")
    .then((res) => {
        console.log(res.data.data.hostel[0].food)
    })
    .catch((err) => {
        console.log(err);
    })