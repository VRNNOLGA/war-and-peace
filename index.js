const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");
buttonOne.addEventListener("click", Anatol);
buttonTwo.addEventListener("click", Andrew);
buttonThree.addEventListener("click", Peter);
function Anatol() {
    image.setAttribute("src", "https://intorrents.net/files/picture/medium/1420775.jpg");
    text.innerHTML = "ПОЖЕНЯТСЯ?";
    buttonOne.innerHTML = "ДА";
    buttonTwo.innerHTML = "НЕТ";
    buttonThree.style = "display:none";
    buttonOne.addEventListener("click", yes);
    buttonTwo.addEventListener("click", no);
}
function yes() {
    image.setAttribute("src", "https://i.ytimg.com/vi/mwSYBqAyZQU/maxresdefault.jpg");
    text.innerHTML = "НО ОН БУДЕТ ПОСТОЯННО КУТИТЬ И ИЗМЕНЯТЬ ЕЙ, И ОНИ РАЗОЙДУТСЯ.";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display:none";
}
function no() {
    image.setAttribute("src", "https://i.pinimg.com/originals/35/14/46/35144610543dd6ad411db0325539fd6d.jpg");
    text.innerHTML = "ОНА ПОЙМЁТ, ЧТО ЕЁ ЧУВСТВА БЫЛИ НЕСЕРЬЁЗНЫ.";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display:none";
}
function Andrew() {
    image.setAttribute("src","http://funart.pro/uploads/posts/2020-09/1600007797_11-p-voina-i-mir-film-21.jpg");
    text.innerHTML = "ПОЖЕНЯТСЯ?";
    buttonOne.innerHTML = "ДА";
    buttonTwo.innerHTML = "НЕТ";
    buttonThree.style = "display:none";
    buttonOne.addEventListener("click", married);
    buttonTwo.addEventListener("click", neverMarried);
}
function married() {
    image.setAttribute("src", "https://сезоны-года.рф/sites/default/files/images/shkolnikam/Andrey_Bolkonskiy_Natasha_Rostova_3.jpg");
    text.innerHTML = "ОНА БУДЕТ СТРЕМИТЬСЯ СДЕЛАТЬ АНДРЕЯ СЧАСТЛИВЫМ.";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display:none";
}
function neverMarried() {
    image.setAttribute("src", "https://sun9-63.userapi.com/impf/c622922/v622922138/247be/Gp4Wjv5FGZE.jpg?size=1280x853&quality=96&sign=f9acb0274e1eb5fa1f5d7b8052cf3717&c_uniq_tag=ozya5q5lz0EKrzTu3dSPg0hLcM8kD6vt8MMUkU87PSw&type=album");
    text.innerHTML = "ОТЕЦ АНДРЕЯ НЕ ПОЗВОЛИТ ЕМУ ЖЕНИТЬСЯ НА НАТАШЕ.";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display:none";
}
function Peter() {
    image.setAttribute("src", "https://ic.pics.livejournal.com/vulgata/12165147/9267/9267_1000.jpg"); 
    text.innerHTML = "ПОЖЕНЯТСЯ?";
    buttonOne.innerHTML = "ДА";
    buttonTwo.innerHTML = "НЕТ";
    buttonThree.style = "display:none";
    buttonOne.addEventListener("click", wedding);
    buttonTwo.addEventListener("click", neverWedding);
}
function wedding() {
    image.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BZWZlNTFlZDQtNjJhNS00ZjYxLWEwZjctNDI4YzEwYzA1MTg5XkEyXkFqcGdeQXVyMjc3MTYwNQ@@._V1_.jpg");
    text.innerHTML = "БУДУТ СЧАСТЛИВЫ, И У НИХ БУДЕТ ТРОЕ ДЕТЕЙ.";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display:none";
}
function neverWedding() {
    image.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BMjM2MjUwNTI1Nl5BMl5BanBnXkFtZTgwNjIxMzc5MDE@._V1_FMjpg_UX1000_.jpg");
    text.innerHTML = "ОТВЕРГНЕТ ПЬЕРА И ОСТАНЕТСЯ ОДНА.";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display:none";
}

