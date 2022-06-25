const addMovie = document.getElementById("add-modal");
//const movieBtn = document.querySelector("header").lastElementChild;
// another way of selecting the button
const movieBtn = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancel = addMovie.querySelector(".btn--passive");
const add = cancel.nextElementSibling;
const input = addMovie.querySelectorAll("input")
console.log(movieBtn);

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovie.classList.toggle("visible");
  toggleBackdrop();
};
const cancelAddEvent = () => {
  toggleMovieModal();
}; 
const addMovies = ()=>{
    const title = input[0].value
    const img = input[1].value
    const rating = input[2].value
    if(title.trim()=== ""|| img.trim()=== "" || rating.trim()==="" || +rating < 1|| +rating> 5){
        alert ("please enter valid values")
        return

    }

}
const backdropClick = () => {
  toggleMovieModal();
};
movieBtn.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", toggleMovieModal);
cancel.addEventListener("click", cancelAddEvent);
add.addEventListener("click",addMovies)
