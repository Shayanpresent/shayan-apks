function searchAPK() {
    let query = document.getElementById("search-input").value;
    if (query) {
        let searchURL = `https://www.apkpure.com/search?q=${query}`;
        window.open(searchURL, "_blank");
    }
}