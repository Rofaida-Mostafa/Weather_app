
let li = document.querySelectorAll(".screen .menu .menu-item");
let active = document.querySelectorAll(".screen .menu .menu-item .item");
let firstItem_Li = document.querySelector(".screen .menu .first-item");
let firstItem_A = document.querySelector("#item");
let contact = document.querySelector("#contact");
let firstItemNav_A = document.querySelector("#item-nav");
let contactNav = document.querySelector("#contact-nav");
console.log(contact);

if (window.location.pathname == "/weather2/contact.html") {
  window.addEventListener("load", () => {
    contact.classList.add("active");
  });
} else {
  window.addEventListener("load", () => {
    firstItem_A.classList.add("active");

  })
}
if (window.location.pathname == "/weather2/contact.html") {
  window.addEventListener("load", () => {
    contactNav.classList.add("active");
  });
} else {
  window.addEventListener("load", () => {
    firstItemNav_A.classList.add("active");

  })
}


for (let i = 0; i < li.length; i++) {
  li[i + 1].addEventListener("click", () => {
    if (active[i + 1].getAttributeNode("href").value == "#") {
      active[i + 1].style.cssText = "  border: 0.11px dashed #fff;";
      return false;
    }

    if (active[i + 1].getAttributeNode("href").value != "#") {
      active[i].classList.remove("active");
      active[i + 1].classList.add("active");
      active.classList.remove("active");
      firstItem_A.classList.remove("active");
      if (i == li.length - 1) {
        i = 0
      }
      return true;
    }
  });
};
