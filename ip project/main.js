// check if there is main color option
let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {
  console.log("local Storge is not empty you can set it on root now");
}

// Toggle Span Class On Icon
document.querySelector(".toggle-setting .fa-gear").onclick = function () {
  // toggle class fa-spin for Rotation on self
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open");
};
// switch color
const colorsli = document.querySelectorAll(".color-list li");
colorsli.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log( e.target.dataset.color );

    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
  });
});

// select skills selector
let OurSkills = document.querySelector(".skills");
window.onscroll = function () {
  // skills offset top
  let skillsRffsetTop = OurSkills.offsetTop;

  // skills outer height
  let skillsOuterHight = OurSkills.offsetHeight;

  // window hight
  let windowHight = this.innerHeight;

  // window scrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > (skillsRffsetTop = skillsOuterHight - windowHight)) {
    // this.console.log("skill section");

    let allSkills = document.querySelectorAll(
      ".our-skills .our-skills-porgress span "
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// creat popup with the image
let OurGallary = document.querySelectorAll(".item img");
OurGallary.forEach((img) => {
  img.addEventListener("click", (e) => {
    // create overlay element
    let overlay = document.createElement("div");

    //   add class to overlay
    overlay.className = "popup-overlay";

    // appendoverlay to the body
    document.body.appendChild(overlay);

    //   create the popup box
    let popupBox = document.createElement("div");

    //   add class to the popue box
    popupBox.className = "popup-box";

    //   create the image
    let popupImage = document.createElement("img");
    //   set image source
    popupImage.src = img.src;
    popupBox.appendChild(popupImage);

    //   append the  popup box to body
    document.body.appendChild(popupBox);

    //
    //
    /////

    // create close span
    let closeButton = document.createElement("span");

    //   create close button
    let closeButtonText = document.createTextNode("X");

    // append text to class button
    closeButton.appendChild(closeButtonText);

    // add class to button
    closeButton.className = "close-button";

    // add close button to the popup box
    popupBox.appendChild(closeButton);
  });
});

// close popup
document.addEventListener("click", function (e) {
  document.body.style.overflow = "hidden";
  if (e.target.className == "close-button") {
    // remove the current popup
    e.target.parentNode.remove();

    //   remove overlay
    document.querySelector( ".popup-overlay" ).remove();
  document.body.style.overflow = "auto";
  }
});
