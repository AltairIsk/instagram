let post = document.getElementById("firstPost"); 
let postsBox = document.getElementById("postsBox");

let imgurls = [ 
    "Aldik228-removebg-preview.png", 
    "Artemiy228-removebg-preview.png",
    "beach.jpg",
    "santehnik.jpg",
    "rtx4090.jpg"
];

for(let i = 0; i < 100; i++) { 
    let newpost = post.cloneNode(true); 
    let imgpost = newpost.getElementsByClassName("img")[0]; 
    let text = newpost.getElementsByClassName("text")[0];
    if (i % 5 === 1) {
        text.textContent = "С днем рождения Артемий";
    }
     else if (i % 5 === 2) {
        text.textContent = "Друзья решили подшутить надо мной на пляже пока я спал(";
    }
     else if (i % 5 === 3) {
        text.textContent = "Сегодня взяли на первую работу";
    }
    else if (i % 5 === 4) {
        text.textContent = "Сегодня родители купили мне новую видеокарту, я хотел видеокарту помощнее, это всего-лишь rtx 4090((((";
    }
     else {
        text.textContent = "Всем привет! Лучший футбольный клуб! Надеемся на победу в этом сезоне🙌";
    }
    imgpost.setAttribute("src", imgurls[i % imgurls.length]); 
    postsBox.appendChild(newpost); 
}

function likePost(heart) {
    let likeCountElement = heart.parentElement.querySelector('.like-count');
    let currentLikes = parseInt(likeCountElement.textContent);
    currentLikes++;
    likeCountElement.textContent = currentLikes;
}
let counter = 0;
function Send(){
    let inputText = document.getElementById("inputName").value;
    let h1 = document.getElementById("bigtext");
    h1.textContent ="Altfizzzzz:" + inputText;
}
