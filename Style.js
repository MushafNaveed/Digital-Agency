let Sec=document.querySelectorAll("section");
let NavLinks=document.querySelectorAll("#Header nav li a");


window.onscroll=()=>{
    Sec.forEach(element => {
        let Top=window.pageYOffset;
        let OffSet=element.offsetTop -150;
        let Height=element.offsetHeight;
        let Id=element.getAttribute("id");


        if(Top>OffSet && Top<OffSet+Height)
        {
            NavLinks.forEach(Link=>{
                Link.classList.remove("active");
                document.querySelector("#Header nav li a[href*=" + Id+ "]").classList.add("active");
            })
        }

        
    });
}

// Sticky Navbar

window.addEventListener("scroll", function () {
    let Header = document.querySelector(".navbar");
    Header.classList.toggle("Sticky", window.pageYOffset>100);
});

// Scroll Animation

let Sections=document.querySelectorAll("section");

// window.onscroll=()=>{
//     Sections.forEach(Div =>{
//         let Top=window.pageYOffset;
//         let OffSet=element.offsetTop -150;
//         let Height=element.offsetHeight;

//         if(Top>=OffSet && Top<OffSet+Height)
//         {
//             element.className.add("Show-Animation")
//         }
//         else
//         {
//             element.className.remove("Show-Animation")
//         }
//     })
// }