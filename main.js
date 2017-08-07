
let ulNode = document.querySelector("ul")
let imgNode = document.querySelector(".avatar")

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/may1038")
req.addEventListener("load", githubData)
req.send();


function githubData(){

  let data = JSON.parse(this.responseText)

  let dataString = `
    <li>Name: ${data.name}</li>
    <li>Github URL: ${data.url}</li>
    <li>Email: ${data.email}</li>
    <li>Company: ${data.company}</li>
    <li>Website: ${data.html_url}</li>
  `

  let img = `
    <img src=${data.avatar_url} alt="Avatar">
  `

  imgNode.innerHTML = img
  ulNode.innerHTML = dataString
  console.log(data)
}
