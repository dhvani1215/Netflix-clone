import navbar from "/d_components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar();

import {footer} from "/d_components/footer.js"

document.querySelector("#footer").innerHTML=footer();

document.querySelector("#next").addEventListener("click",()=>{
    window.location.href="./password_creation.html"
})

document.querySelector("#right_menu").addEventListener("click",()=>{
    console.log(1);
    event.preventDefault();
    window.location.href="/Signup/signup.html";
})