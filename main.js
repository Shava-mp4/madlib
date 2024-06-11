document.getElementById("madLib").addEventListener("click", MadLib);

function MadLib() {
  let Song = document.getElementById("song").value;
  let friend = document.getElementById("friendName").value;
  let animal = document.getElementById("Animal").value;

  let Lib = `I was listening to ${Song} when ${friend} tripped on a(n) ${animal}.`;

  document.getElementById("textLib").innerHTML = Lib;
}

document.getElementById("Clear").addEventListener("click", ClearButton);

function ClearButton() {
  document.getElementById("textLib").innerHTML = "--------";
}
