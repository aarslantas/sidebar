

let toggle = document.getElementById("toggle");
let sidebarToggle = document.querySelector(".sidebar__toggle");
let toggleItems = document.querySelectorAll(".toggle__item");
let itemHeaders = document.querySelectorAll(".sidebar__item-header");
let sidebarItem =  document.querySelectorAll(".sidebar__item");
let sidebarLink =  document.querySelectorAll(".sidebar__link");
let links =  document.querySelectorAll(".sidebar__link > span");
let icons =  document.querySelectorAll(".sidebar__link > svg");
let arrows =  document.querySelectorAll(".sidebar__link + svg");
let sidebar = document.querySelector(".sidebar");
let sidebarImage = document.querySelector(".sidebar__image");
let sidebarUser = document.querySelector(".sidebar__user");
let sidebarButton = document.querySelector(".sidebar__button");

let container = document.querySelector(".container");
let profile = document.querySelector(".sidebar__profile");

sidebar.style.transition = "all .2s";
icons.forEach(item => item.style.transition = 'all .2s');


let isSidebarClose = false;



toggle.addEventListener('click',function(e){

    if(!isSidebarClose ){

        sidebarImage.style.visibility ="hidden";

        sidebar.style.transform = 'translate(-75%)';
        icons.forEach(item => {
            item.style.transform = 'scale(1.2)';
            item.style.paddingRight = .4 +"rem";


        });


        itemHeaders.forEach(item => item.style.display = "none");
        links.forEach(item => item.style.display = "none");
        arrows.forEach(item => item.style.display = "none");
        sidebarLink.forEach(item => item.style.justifyContent = "flex-end");
        sidebarButton.style.display="none";




        isSidebarClose = true;
        console.log(isSidebarOpen);

    }
    else{
        sidebar.style.transform = 'translate(0)';
        isSidebarClose = false;
        itemHeaders.forEach(item => item.style.display = "block");
        links.forEach(item => item.style.display = "block");
        arrows.forEach(item => item.style.display = "block");
        sidebarLink.forEach(item => item.style.justifyContent = "flex-start");
        sidebarButton.style.display="block";

        icons.forEach(item => {
            item.style.transform = 'scale(0.8)';
            item.style.padding = 0;



        });
        sidebarImage.style.visibility ="visible";
        console.log(isSidebarOpen);




    }




});


sidebarItem.forEach(item => item.addEventListener('mouseover',function(){
    if(isSidebarClose){
        this.style.position = "relative";
        let selected = item.children[0];
        selected.textContent
        let selectedItem  = document.createElement("div");
        selectedItem.innerHTML = selected.textContent;


        this.appendChild(selectedItem);
        selectedItem.classList.add("selectedItemClass");
        selectedItem.style.position = "absolute";
        selectedItem.style.right = 0;
        selectedItem.style.transform = "translate("+ (105) +"%";
    }





}));

sidebarItem.forEach(item => item.addEventListener('mouseout',function(){
    if(isSidebarClose){
        let itemCount = item.children.length;
        let selectedItem = item.children[itemCount-1];
        item.removeChild(selectedItem);

    }


}));

















