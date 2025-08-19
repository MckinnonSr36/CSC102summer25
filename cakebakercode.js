function updateBakerStats() {
    let totalCakes = parseInt(document.getElementById("divTotalCakes").textContent);
    let newCakesNum = parseInt(document.getElementById("numCakes").value);

    if (isNaN(newCakesNum)) {
        alert("Please enter a valid number of cakes.");
        return;
    }

    let newCakeTotal = totalCakes + newCakesNum;
    let bakerLevel = "";

    if (newCakeTotal > 100) {
        bakerLevel = "Cakes Baker Guru";
    } else if (newCakeTotal > 80) {
        bakerLevel = "Cake Baker Extraordinaire";
    } else if (newCakeTotal > 60) {
        bakerLevel = "Cake Baker Chief";
    } else if (newCakeTotal > 20) {
        bakerLevel = "Cake Baker Apprentice";
    } else {
        bakerLevel = "Beginner";
    }

    document.getElementById("divTotalCakes").textContent = newCakeTotal;
    document.getElementById("divBakingLevel").textContent = bakerLevel;
}