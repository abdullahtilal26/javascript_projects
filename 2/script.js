const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat");
const count = document.getElementById("count");
const total = document.getElementById("total");
const selectMovie = document.getElementById("movie");
//get price from selcted movie
let ticketPrice = +selectMovie.value; /*+ sign converts string to number-**/

const updateCount = () => {
  //getting index of slected seats
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  //saving data
  localStorage.setItem("selectedSeats", JSON.stringify(seatIndex)); //OVERWRITES EVERYTIME,STRINGIFY CONVERTS array INTO AN striing because we need to send data in string to the server
  //update count and tootal price
  count.innerText = selectedSeats.length;
  total.innerText =
    selectedSeats.length * ticketPrice; /*innetext means text bw tags*/
};

function updateUi() {
  //get seast from local
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")); //parse convert string ino array
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      /*foreach->apply function to the elment and return undefine while map->return an array of return values'*/
      if (selectedSeats.indexOf(index) > -1) {
        /*indexof is function which search an element is the array of elements and return the index if that element is found*/
        seat.classList.add("selected");
      }
    });
  }

  //get movie from local
  const movieIndex = localStorage.getItem("movieIndex"); /*local filing*/
  if (movieIndex !== null) {
    selectMovie.selectedIndex = movieIndex;
    ticketPrice =
      localStorage.getItem(
        "moviePrice"
      ); /*getitem recieves the key and return values inside that key*/
    updateCount();
  }
}
updateUi();
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains(
      "seat"
    ) /*classlist is an array which contains the classes applied to the element*/ &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle(
      "selected"
    ); /*toggle check if the selcted is present then it removes and if its not present then it adds "selected" class"*/
    updateCount();
  } else {
  }
});

selectMovie.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateCount();
  //save movie data to local storage
  localStorage.setItem(
    "movieIndex",
    e.target.selectedIndex
  ); /*selectedindex is current index selected in drop down*/
  localStorage.setItem("moviePrice", e.target.value);
});
