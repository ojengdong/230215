// .innerText : text만 바꿔준다.
// .innerHTML : 태그를 바꿔준다.
// document.getElementById('first').innerHTML = "<h1>자바스크립트 강의</h1>";
// document.getElementById('first').style.color = 'blue';

// let 변수1 = 100;

// const 변수2 = 200;

// console.log(변수1);
// console.log(변수2);

// const MYNAME = "John";

// camelCase;

// const NAVERURL = "www.naver.com";

// clamelCase;

// function closeBox() {
//     document.querySelectorAll('.alertbox').style.display = "none";
// }

// function closeBox() {
//     const div = document.querySelector('.alertbox');
//     const button = document.querySelector('button');

//     if (div.style.display === "none") {
//         div.style.display = "block";
//         button.innerHTML = "Hide";
//     } else {
//         div.style.display = "none";
//         button.innerHTML = "show";
//     }
// }


function closeBox1() {
    document.querySelector('.box1').style.display = "none";
}

function closeBox2() {
    document.querySelector('.box2').style.display = "none";
}

function closeBox3() {
    document.querySelector('.box3').style.display = "none";
}

// function AllBox() {
//     document.querySelector('.box1').style.display = "block";
//     document.querySelector('.box2').style.display = "block";
//     document.querySelector('.box3').style.display = "block";
// }
function AllBox1() {
    document.querySelectorAll('.all').forEach(function(e ){
        e.style.display = 'block';
    }) 
}