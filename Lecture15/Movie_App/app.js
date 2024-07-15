const form = document.querySelector("#form");
const div = document.querySelector("div");
// const url =https://api.tvmaze.com/singlesearch/shows?q=girls


async function getTVshows(searchText) {
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`);

    for (const item of res.data) {
        if (item.show.image) {
            const imgUrl = item.show.image.medium;
            const image = document.createElement('img');
            image.style.margin = "10px";
            image.src = imgUrl;
            div.append(image);
        }
    }

}

function removeSeachResult() {
    while (div.firstChild) {
        div.firstChild.remove();
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchText = form.elements[0].value;
    // console.log(searchText);
    removeSeachResult();
    getTVshows(searchText);
    form.elements[0].value = "";
})