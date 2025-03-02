const rootElement = document.getElementById("root")
const header = document.createElement("header")
header.setAttribute("class","header")

/* creating nav */
const headerNav = document.createElement("nav")
header.append(headerNav)
headerNav.setAttribute("class","header-nav")

/* creating image */
const image = document.createElement("img")
image.src= "images/logo.png"
image.setAttribute("class","logo-image")
/* created ul and li */
const navUL = document.createElement("ul")
navUL.setAttribute("class","nav-ul")
headerNav.appendChild(image)
headerNav.appendChild(navUL)
const navLIIITem = ["Home","About Us", "contact"]
navLIIITem.forEach((item)=>{
    const navLi= document.createElement("li")
    navLi.setAttribute("class","nav-li")
    navLi.innerText= item
   navUL.appendChild(navLi)
   
})

rootElement.appendChild(headerNav)


const para1 = document.createElement("p")
para1.innerText= "Hello this is Paragraph"
rootElement.appendChild(para1)
const primaryButton = document.createElement("button")
primaryButton.innerText = "Click Me"
primaryButton.setAttribute("class","primary-button")
rootElement.appendChild(primaryButton)
const ulList = document.createElement("ul")
primaryButton.addEventListener("click", ()=>{

    const list = document.createElement("li")
    list.setAttribute("class","li-list")
    list.innerText= "Hi i am List"
    ulList.appendChild(list)
    
})
rootElement.appendChild(ulList)
