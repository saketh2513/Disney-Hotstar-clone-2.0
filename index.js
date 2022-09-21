let movies = [
  {
    name: "Loki",
    desc:
      "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of 'Avengers:Endgame'",
    image: "images/loki.PNG"
  },
  {
    name: "Doctor Strange In Multiverse Of Madness",
    desc:
      "When the Multiverse is unlocked, Docotor Strange must enlist help from old and new allies in order to confront a Surprising adversary.  ",
    image: "images/doc.JPG"
  },

  {
    name: "Moon Knight",
    desc:
      "Mild-mannered Steven Grant has dissociative identity disorder and shares a body with a mercenary.",
    image: "images/moon.png"
  },
  {
    name: "Ms.Marvel",
    desc:
      "Kamala Khan,a Muslim American teen growing up in Jersey city,is a Superhero mega fan who discovers she has super powers.",
    image: "images/khan.png"
  },
  {
    name: "Game Of Thrones",
    desc:
      "Summers span decades.Winters can last a lifetime.Whilst kingdoms fight each other for the control of Westeros, a sinister force lurks beyond the Wall.",
    image: "images/game.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].desc));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// Recommended Movies
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
