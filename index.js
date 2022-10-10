// change all elements of the same id
const spans = document.querySelectorAll("#span");
const changeSpan = () => {
  for (let span of spans) {
    span.style.color = "orangered";
    span.style.fontWeight = "bold";
  }
};

// ---------------------------------------------------------------------------------------------------
// generate a ul with dynamic list
const createElSection = document.querySelector(".ul-elements");
const generateList = (nr) => {
  // we empty the ul every time

  // 1. CREATE THE ELEMENT
  const ulList = document.createElement("ul");

  // 2. MODIFYING THE ELEMENT
  ulList.innerText = "Temporary text for ul"; // just testing [this is only temporary in memory]
  ulList.style.background = "orangered"; // just testing [the styling is only temporary in memory]

  // Create the list items
  for (let i = 0; i < nr; i++) {
    const li = document.createElement("li"); // we create the li
    li.innerText = `li ${i + 1}`; // we sequencially name the lis
    ulList.appendChild(li); // we append the li to the ul
  }

  // 3. APPEND THE CHILD [ulList] TO THE PARENT [textSection]
  createElSection.appendChild(ulList); // we are attaching the ul to the DOM
};
// generateList(5);

// ---------------------------------------------------------------------------------------------------
// hide the #text
const hideText = () => {
  // SOLUTION #1: using the ATTRIBUTE of hidden
  createElSection.hidden = !createElSection.hidden;

  // or

  // SOLUTION #2: we use classList & the METHOD toggle
  // we need to create a css class .hidden with display:none
  // createElSection.classList.toggle("hidden");
};

// ---------------------------------------------------------------------------------------------------
// generate images
const imgContainer = document.querySelector(".img-elements");
const generateImage = () => {
  // we want our container to be emptied
  imgContainer.innerHTML = "";

  const img = document.createElement("img"); // we CREATE an img NODE
  console.dir(img); // we INSPECT the img NODE and see that it has the PROPERTY src
  img.src =
    "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2dyb3VuZCUyMHVuaXZlcnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  img.alt = "image of the universe";
  console.dir(img);
  img.style = "width: 100%";

  imgContainer.appendChild(img);
};

const generateImages = () => {
  // we want our container to be emptied
  imgContainer.innerHTML = "";

  // we create an array with the image links that we want
  const imagesLinks = [
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFja2dyb3VuZCUyMHVuaXZlcnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1507499739999-097706ad8914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmQlMjB1bml2ZXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjB1bml2ZXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  ];

  for (let imageLink of imagesLinks) {
    const img = document.createElement("img"); // we CREATE an img NODE
    img.src = imageLink; // we set the src
    img.alt = "beautiful background image of nature and the universe"; // we set the alt
    img.style.width = "33.333%"; // we style the img
    img.style.aspectRatio = "1/1"; // NEW FEATURE
    img.style.objectFit = "cover";
    imgContainer.appendChild(img); // we APPEND TO THE DOM
  }
};
