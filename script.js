const mainBtn = document.querySelector(".start__button");
const scoreBtn = document.querySelectorAll(".rating-button");
let score = 0;


const clearSelect = () =>{
    scoreBtn.forEach(element => {
        if (element.classList.contains("select")){
            element.classList.remove("select");
        }
    });
};


mainBtn.addEventListener("click", submit = () => {
    const sectionCards = document.querySelectorAll(".rating-card");
    if (score !== 0){
        sectionCards.forEach(element => {
        if (element.classList.contains("hidden")){
            element.classList.remove("hidden")
            document.getElementById("rating").textContent= score;
        } else{
            element.classList.add("hidden");
        }
        });
    };
});
scoreBtn.forEach((element) => {
    element.addEventListener("click", scoreSelect = () => {
        clearSelect();
        element.classList.add("select");
        score = element.textContent;
        console.log("ye", score);
    })
});