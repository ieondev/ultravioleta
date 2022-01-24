const myform = document.getElementById("myForm");

myForm.addEventListener("submit",(e) => {
  e.preventDefault();

  const request = new XMLHttpRequest();
  request.open("post", "agenda.php");
  request.onload = function () {
    console.log(request.response.text);
  }
  request.send(new FormData(myForm));
});
