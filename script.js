let formSet = document.getElementById("postSet");
let formBtn = document.getElementById("formBtn");


let myform = document.getElementById("post");
myform.addEventListener("submit", function(event) {
    event.preventDefault();
    myform.reset();
});
// console.log();
function addPost(){
    let postImageSrc = document.querySelector("#link").value;
    let postContent = document.querySelector("#content").value;
    let postHeading = document.querySelector("#title").value;

    let newPost = document.createElement('div');
    newPost.classList.add('card');
    newPost.classList.add('m-2');
    newPost.style.width = '18rem';
    let postImg = document.createElement('img');
    postImg.classList.add('card-img-top');
    postImg.src = postImageSrc;
    postImg.alt = 'image disabled';

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let cardHeading = document.createElement('h3');
    cardHeading.classList.add('card-heading');
    cardHeading.textContent = postHeading;
    let cardPara = document.createElement('p');
    cardPara.classList.add('card-text');
    cardPara.textContent = postContent;
    cardBody.appendChild(cardHeading);
    cardBody.appendChild(cardPara);
    newPost.appendChild(postImg);
    newPost.appendChild(cardBody);
    formSet.appendChild(newPost);
}
