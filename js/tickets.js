window.addEventListener("load", () => {
  Ultimate();
});

const buttons = ["Ultimate", "Playhouse", "Cake", "MeetVip", "Meet"];

function btnChange(btn) {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] == btn.id) {
      console.log("Match: " + buttons[i] + " = " + btn.id);
      btn.style.background = "var(--blue)";
      btn.style.border = "0";
      btn.style.color = "#ffffff";
    } else if (buttons[i] != btn.id) {
      let btn = document.getElementById(buttons[i]);
      btn.style.background = "transparent";
      btn.style.border = "1px solid var(--border-bottom)";
      btn.style.color = "var(--grey-text)";
    }
  }
}

function Ultimate() {
  const target = document.getElementById("Ultimate");
  btnChange(target);
  createImage(
    "/images/poster/ultimate_vip_package.gif",
    "/images/poster/photos/ultimate_vip.svg"
  );
}

function Playhouse() {
  const target = document.getElementById("Playhouse");
  btnChange(target);
  createImage(
    "/images/poster/playhouse_vip.gif",
    "/images/poster/photos/playhouse_vip.svg"
  );
}

function CakeVip() {
  const target = document.getElementById("Cake");
  btnChange(target);
  createImage(
    "/images/poster/cake_vip_package.gif",
    "/images/poster/photos/cake_face_vip.svg"
  );
}

function MeetVip() {
  const target = document.getElementById("MeetVip");
  btnChange(target);
  createImage(
    "/images/poster/vip_meet_greet_package.gif",
    "/images/poster/photos/vip_meet_and_greet.svg"
  );
}

function MeetNormal() {
  const target = document.getElementById("Meet");
  btnChange(target);
  createImage(
    "/images/poster/meet_great_package.gif",
    "/images/poster/photos/meet_and_greet.svg"
  );
}

function createImage(urlPoster, urlPhoto) {
  var element = document.getElementById("poster");
  var poster = document.createElement("img");
  var photo = document.createElement("img");

  element.innerHTML = "";

  poster.src = urlPoster;
  poster.classList = "poster_img fadeInDown";
  poster.alt = "package";

  photo.src = urlPhoto;
  poster.classList = "fadeInDown";
  photo.alt = "photo";

  element.appendChild(poster);
  element.appendChild(photo);
}
