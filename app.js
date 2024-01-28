function success(position) {
  console.log(position);
}

function error() {
  alert("Position not accessible!");
}

function userLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported in your browser!");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

function index() {
  let app = document.getElementById("app");
  let h3 = document.createElement("h3");
  h3.innerHTML = "Prayer Times";

  app.appendChild(h3);

  userLocation();
}

index();
