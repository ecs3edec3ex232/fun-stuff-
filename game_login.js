function Next_page(){
    player1 = document.getElementById("username1").value ;
player2 = document.getElementById("username2").value ;

if(player1 =="" ||  player2 ==""){
    alert("Enter player1 and player2's name!");
}
else{
localStorage.setItem("player1", player1);
localStorage.setItem("player2", player2);

window.location = "game_page.html";
}
}