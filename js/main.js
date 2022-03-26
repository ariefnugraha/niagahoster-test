// MAKE STICKY SIDEBAR HAVE MAX WIDTH SAME AS ASIDE
document.querySelector("aside .sticky").style.maxWidth =
  document.querySelector("aside").offsetWidth + "px";

// HANDLE NAVBAR & STICKY SIDEBAR WHEN SCROLL
window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  let mainContainerPos = document
    .querySelector(".main-content")
    .getBoundingClientRect().top;
  let invitationPos = document
    .querySelector(".invitation")
    .getBoundingClientRect().top;

  if (
    document.querySelector("header").classList.contains("change-bg")
  ) {
    scrollPos > 120
      ? document.querySelector("header").classList.add("bg-primary-blue-1")
      : document.querySelector("header").classList.remove("bg-primary-blue-1");
  }

  if (mainContainerPos < 120 && invitationPos > 610) {
    document.querySelector("aside .sticky").classList.add("scroll");
    document.querySelector("aside .sticky").classList.remove("absolute");
  } else if (invitationPos <= 608) {
    document.querySelector("aside .sticky").classList.remove("scroll");
    document.querySelector("aside .sticky").classList.add("absolute");
  } else {
    document.querySelector("aside .sticky").classList.remove("scroll");
    document.querySelector("aside .sticky").classList.remove("absolute");
  }
});

// OPEN / CLOSE ACCORDION
document.querySelectorAll(".accordion .accordion-item").forEach((item) => {
  item.querySelector("button").addEventListener("click", (e) => {
    let btn = e.target;
    if (item.querySelector(".accordion-content").classList.contains("show")) {
      item
        .querySelectorAll(".accordion-content")
        .forEach((content) => content.classList.remove("show"));
      btn.querySelector("svg").style.transform = "unset";
    } else {
      item
        .querySelectorAll(".accordion-content")
        .forEach((content) => content.classList.add("show"));
      btn.querySelector("svg").style.transform = "rotate(180deg)";
    }
  });
});
