
let landing_content_h1 = document.querySelector('.landing_content h1');
let landing_content_p = document.querySelector('.landing_content p');
let landing_space = document.querySelector('#landing').offsetTop;


let features_content_i = document.querySelectorAll('.features_content i');
let features_content_h3 = document.querySelectorAll('.features_content h3');
let features_content_p = document.querySelectorAll('.features_content p');
let features_space = document.querySelector('#features').offsetTop;



let protoflio_1 = document.querySelector('.protoflio_1');
let protoflio_2 = document.querySelector('.protoflio_2');
let protoflio_header = document.querySelector('.protoflio_header');
let protoflio_3 = document.querySelector('.protoflio_3');


let about_img = document.querySelector('.about_img');
let About_content_p = document.querySelector('.About_content_p');
let About_header = document.querySelector('.About_header');


let services_header = document.querySelector('.services_header');
let services_col1 = document.querySelector('.services_col1');
let services_col2 = document.querySelector('.services_col2');
let services_img = document.querySelector('.services_img');


let Contact_header = document.querySelector('.Contact_header');
let contact_p1 = document.querySelector('.contact_p1');
let contact_p2 = document.querySelector('.contact_p2');
let social_contact = document.querySelector('.social');
let Contact_space = document.querySelector('#Contact').offsetTop;




const section_protoflio_space = document.querySelector('#protoflio').offsetTop;
const section_About_space = document.querySelector('#About').offsetTop;
const services_section_top = document.querySelector('#services').offsetTop;





// start Animation of section protoflio

window.addEventListener('scroll', function () {

    if (this.window.scrollY > section_protoflio_space - 350) {

        protoflio_header.style.transform = 'translateY(0px)';
        protoflio_header.style.opacity = '1';

        protoflio_1.style.opacity = "1";

        protoflio_2.style.opacity = "1";

        protoflio_3.style.opacity = "1";



    }

    // else{

    //     protoflio_1.style.opacity = "0";

    //     protoflio_2.style.opacity = "0";

    //     protoflio_3.style.opacity = "0";



    // }





});

// End Animation of section protoflio

// ================================================================================
// ================================================================================



// start Animation of section About

window.addEventListener('scroll', function () {

    if (this.window.scrollY > section_About_space - 250) {

        About_header.style.transform = 'translateY(0px)';
        About_header.style.opacity = '1';

        about_img.style.transform = 'translateX(0px)';
        About_content_p.style.opacity = '1';





    }

    // else{
    //     about_img.style.transform='translateX(-500px)';

    //     About_content_p.style.opacity='0';

    // }





});

// End Animation of section About

// ================================================================================
// ================================================================================


// start Animation of section services


window.addEventListener('scroll', function () {

    if (this.window.scrollY > services_section_top - 200) {

        services_header.style.transform = 'translateY(0px)';
        services_header.style.opacity = '1';

        services_col1.style.transform = 'translateX(0px)';
        services_col2.style.opacity = '1';

        services_img.style.transform = 'translateX(0px)';

    }



});

// End Animation of section services
// ===============================================================
// ===============================================================



// Start Animation of section Contact

// window.addEventListener('scroll', function () {

//     if (this.window.scrollY >= Contact_space - 200) {
//         Contact_header.style.transform = 'translateY(0px)'
//         Contact_header.style.opacity = '1'

//         contact_p1.style.transform = 'translateX(0px)'
//         contact_p2.style.transform = 'translateX(0px)'
//         social_contact.style.transform = 'translateY(0px)'

//     }



// });

// End Animation of section Contact
// ===============================================================
// ===============================================================



// Start Animation of section landing

window.addEventListener('load', function () {


    if (this.window.scrollY >= landing_space - 200) {
        landing_content_h1.style.transform = 'translateX(0px)'
        landing_content_p.style.transform = 'translateX(0px)'


    }

});

// End Animation of section landing
// ===============================================================
// ===============================================================





// Start Animation of section features
window.addEventListener('scroll', function () {
    if (scrollY >= features_space - 200) {

        for (let i = 0; i < features_content_i.length; i++) {
            features_content_i[i].style.opacity = '1'
        };

        for (let z = 0; z < features_content_h3.length; z++) {
            features_content_h3[z].style.color = 'black';
        };


        for (let i = 0; i < features_content_p.length; i++) {
            features_content_p[i].style.transform = 'translateY(0px)';
        };
    }

})

// End Animation of section features
// ===============================================================
// ===============================================================

