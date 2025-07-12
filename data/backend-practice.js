const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  xhr.response; // This will be the response from the server
  console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev");
xhr.send();
