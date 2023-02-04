const navToggler = document.querySelector(".nav__toggler");
const navigation = document.querySelector(".nav");

navToggler.addEventListener("click", function() {
    navigation.classList.toggle("nav--expanded");
});

// window.onscroll = () => {
//     this.scrollY > 20 ? navigation.classList.add("sticky") : navigation.classList.remove("sticky");
// }