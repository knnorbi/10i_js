var ratings = [];

// JSON

function saveRating() {
    var ratingNumber = document.getElementById("ratingNumber").value;
    var ratingText = document.getElementById("ratingText").value;
    
    var newRating = {
        number: ratingNumber,
        text: ratingText
    };
    
    ratings.unshift(newRating);
}

function displayRatings() {
    document.getElementById("ratings").innerHTML = "";
    var filteredRatings = ratings.filter(filterRatings);
    filteredRatings.forEach(displayOneRating);
}

function displayOneRating(value, index, array) {
    document.getElementById("ratings").innerHTML += '<div><span class="rating">' + value.number + " </span>" + "<span>" + value.text + "</span></div>";
}

function filterRatings(value, index, array) {
    var filterNumber = document.getElementById("filterNumber").value;
    return value.number == filterNumber;
}
