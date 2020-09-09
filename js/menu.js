var screen_width = outerWidth;
const open = document.getElementById("open-menu");
const close = document.getElementById("close-menu");
const menu = document.getElementById("menu");
const tour = document.getElementById("tour-title");
const tour_arrow = document.getElementById("drop-tour");
const tour_options = document.getElementById("tour-options");
const media = document.getElementById("media-title");
const media_arrow = document.getElementById("drop-media");
const media_options = document.getElementById("media-options");

if (screen_width < 1280) {
  const tour_link = document.getElementById("dates_link");
  const tickets_link = document.getElementById("tickets_link");

  tour_link.addEventListener("click", () => {
    toggleBurgerMenu("of");
  });

  tickets_link.addEventListener("click", () => {
    toggleBurgerMenu("of");
  });

  open.addEventListener("click", () => {
    toggleBurgerMenu("on");
  });

  close.addEventListener("click", () => {
    toggleBurgerMenu("of");
  });

  tour.addEventListener("click", () => {
    toggleClassRow(tour_arrow, tour_options);
  });

  media.addEventListener("click", () => {
    toggleClassRow(media_arrow, media_options);
  });
} else {
  tour.addEventListener("mouseover", () => {
    toggleSubMenu(tour_arrow, tour_options, 1);
  });

  tour.addEventListener("mouseout", () => {
    toggleSubMenu(tour_arrow, tour_options, 0);
  });

  tour_options.addEventListener("mouseover", () => {
    toggleSubMenu(tour_arrow, tour_options, 1);
  });

  tour_options.addEventListener("mouseout", () => {
    toggleSubMenu(tour_arrow, tour_options, 0);
  });

  media.addEventListener("mouseover", () => {
    toggleSubMenu(media_arrow, media_options, 1);
  });

  media.addEventListener("mouseout", () => {
    toggleSubMenu(media_arrow, media_options, 0);
  });

  media_options.addEventListener("mouseover", () => {
    toggleSubMenu(media_arrow, media_options, 1);
  });

  media_options.addEventListener("mouseout", () => {
    toggleSubMenu(media_arrow, media_options, 0);
  });
}

function toggleClassRow(menu, sub_menu) {
  if (menu.classList == "up-arrow") {
    menu.classList.remove("up-arrow");
    menu.style.transform = " rotate(-180deg);";
    sub_menu.style.display = "none";
  } else {
    menu.classList.add("up-arrow");
    sub_menu.style.display = "grid";
  }
}

function toggleSubMenu(menu, sub_menu, status) {
  if (status == 0) {
    menu.classList.remove("up-arrow");
    menu.style.transform = " rotate(-180deg);";
    sub_menu.style.display = "none";
  } else {
    menu.classList.add("up-arrow");
    sub_menu.style.display = "grid";
    sub_menu.style.position = "absolute";
    sub_menu.style.background = "var(--black-background)";
    sub_menu.style.top = "4rem";
    sub_menu.style.padding = "0 0 10px 0";
    if (sub_menu == tour_options) {
      sub_menu.style.width = "86.69px";
    } else {
      sub_menu.style.width = "10rem";
      sub_menu.style.right = "0";
    }
  }
}

function toggleBurgerMenu(option) {
  if (option === "on") {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
}
