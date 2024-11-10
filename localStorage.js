
let func;
func = (id) => {
  const input = document.getElementById("testinput").value;

  let names = JSON.parse(localStorage.getItem("name") || "[]");

  names.push(input, id);

  names = names.filter(item => item && item.trim() !== "");

  localStorage.setItem("name", JSON.stringify(names));
};


console.log(localStorage.getItem("name"))