// Select Elements
let allSpans = document.querySelectorAll(".buttons span");

let results = document.querySelector(".results > span");

let theInput = document.getElementById("the-input");

allSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }

    if (e.target.classList.contains("add-item")) {
      addItem();
    }

    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }

    if (e.target.classList.contains("show-items")) {
      showItems();
    }
  });
});

function showMessage() {
  results.innerHTML = "Input can not be Empty";
}

function checkItem() {
  if (theInput.value === "") {
    showMessage();
  } else {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`;
      // theInput.value = "";
    } else {
      results.innerHTML = `No Local Storage Item With the Name <span>${theInput.value}<span/>`;
      // theInput.value = "";
    }
  }
}
function addItem() {
  if (theInput.value === "") {
    showMessage();
  } else {
    localStorage.setItem(theInput.value, "Test");
    results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;
    theInput.value = "";
  }
}

function deleteItem() {
  if (theInput.value === "") {
    showMessage();
  } else {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value);
      results.innerHTML = `Local Storage Item Called <span>${theInput.value}</span> Deleted`;
      theInput.value = "";
    } else {
      results.innerHTML = `No Local Storage Item with the Name <span>${theInput.value}</span>`;
      // theInput.value = "";
    }
  }
}

function showItems() {
  if (localStorage.length) {
    // console.log(`Found Elements ${localStorage.length}`);
    results.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class="show">${key}</span>`;
    }
  } else {
    results.innerHTML = `Local Storage Is Empty Now`;
  }
}
