var prevBtn, nextBtn;
var warp;
var inner_disk;
var pageNum=0;
var totalNum=0;
var album;
var dotAll;
var title;
var bgColors = [
    ["#a5ffee","#6b5bc5", "ITZY - ICY"],
    ["#ecb157","#f9574c", "NCT127 - Love Song"],
    ["#9c9be9","#ee7b93", "Red Velve - Umpah Umpah"],
    ["#16843d","#ff4c26", "Shinee - Don’t Let Me Go"],
    ["#ad8e52","#26304c", "TWICE - Dance The Night Away"],
];

window.onload = function(){
    prevBtn = document.querySelectorAll("button")[0];
    nextBtn = document.querySelectorAll("button")[1];
    warp = document.querySelector(".wrap");
    inner_disk = document.querySelectorAll(".inner_disk");
    album = document.querySelectorAll(".album");
    dotAll = document.querySelectorAll(".dot li");
    totalNum = album.length;
    title = document.querySelector(".title p");

    prevBtn.addEventListener("click", function(){
        if(pageNum > 0){
            pageNum--;
        }else{
            pageNum = totalNum - 1;
        }
        pageChangeFunc();
    });

    nextBtn.addEventListener("click", function(){
        if(pageNum < totalNum - 1){
            pageNum++;
        }else{
            pageNum = 0;
        }
        pageChangeFunc();
    });

    for(var i=0; i<dotAll.length; i++){
        (function(index){
            dotAll[index].onclick = function(){
                pageNum = index;
                pageChangeFunc();
            }
        })(i);
    }

    pageChangeFunc();


}

function pageChangeFunc(){
    warp.style.background = "linear-gradient(120deg, "+ bgColors[pageNum][0]+"," + bgColors[pageNum][1]+")";

    for(var i=0; i<totalNum; i++){
        if(pageNum == i){
            album[i].classList.add("active");
            dotAll[i].classList.add("active");
        }else{
            album[i].classList.remove("active");
            dotAll[i].classList.remove("active");
        }
    }

    inner_disk[pageNum].style.background = bgColors[pageNum][0];
    title.innerText = bgColors[pageNum][2];
}
