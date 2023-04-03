"use strict";

const text = document.querySelector("#task"),
      button = document.querySelector("#task-btn");

button.addEventListener("click", addList);

function addList() {
    const notCompleted = document.querySelector(".notCompleted"),
          completed = document.querySelector(".completed");


    // CREATE NEW ELEMENTS

    const newLi = document.createElement("li"),
          checkBtn = document.createElement("button"),
          delBtn = document.createElement("button");

    checkBtn.innerHTML = "<i class='fa fa-check'></i>";
    delBtn.innerHTML = "<i class='fa fa-trash'></i>";


    if(text.value) {
        newLi.textContent = text.value;
        text.value = "";
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    } else {
        alert("Please comlete all inputs!");
    }

    checkBtn.addEventListener("click", function() {
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkBtn.style.display = "none"
    });

    delBtn.addEventListener("click", function() {
        const parent = this.parentNode;
        parent.remove();
    });
}

