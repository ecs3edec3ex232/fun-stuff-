player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1_score = 0; 
player2_score = 0;

document.getElementById("username1").innerHTML = player1 + " :";
document.getElementById("username2").innerHTML = player2 + " :";

document.getElementById("score1").innerHTML = player1_score;
document.getElementById("score2").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn - "+ player1;
document.getElementById("player_answer").innerHTML = "Answer turn - "+ player2;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Lower case word"+ word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length-1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1,"_");
    remove_charAt2 = remove_charAt1.replace(charAt2,"_");
    remove_charAt3 = remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    Question_word = "<h4 id='word_display'> Q. "+ remove_charAt3+"</h4>";
    Input_box = "<br> Answer : <input id='Input_check_box' type='text'>";
    Check_button = "<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";
    Row = Question_word + Input_box + Check_button;
    document.getElementById("output").innerHTML = Row; 

    document.getElementById("word").innerHTML ="";
}

answer_turn ="player2";
question_turn="player1";

function check(){
    get_answer = document.getElementById("Input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case -"+ answer );
    if(answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score+1;
            document.getElementById("score1").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score+1;
            document.getElementById("score2").innerHTML = player2_score;
        }
    }
if(question_turn =="player1"){
    question_turn ="player2";
    document.getElementById("player_question").innerHTML = "Question turn -"+ player2 ;
}
else{
    question_turn ="player1";
    document.getElementById("player_question").innerHTML = "Question turn-"+ player1;
}

if(answer_turn =="player1"){
    answer_turn ="player2";
    document.getElementById("player_answer").innerHTML = "Answer turn -"+ player2;
}
else{
    answer_turn ="player1";
    document.getElementById("player_answer").innerHTML = "Answer turn -"+player1;
}

document.getElementById("output").innerHTML ="";
}