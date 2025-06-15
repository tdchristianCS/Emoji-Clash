const emoji_points=[];
emoji_points["Smile"]=["😃", 10];
emoji_points["Cry"]=["😭", 9];
emoji_points["Angry"]=["😤", 13];
emoji_points["Laugh"]=["🤣", 17];
emoji_points["Money"]=["🤑", 15];
emoji_points["Devil"]=["😈", 9];
emoji_points["Angel"]=["😇", 16];
emoji_points["Love"]=["😍", 20];
emoji_points["Dog"]=["🐶", 18];
emoji_points["Cat"]=["🐈", 16];
emoji_points["Cool"]=["😎", 15];
emoji_points["Nerd"]=["🤓", 14];
emoji_points["Profanity"]=["🤬", 14];
emoji_points["Ghost"]=["👻", 17];
emoji_points["Turd"]=["💩", 20000000000];
emoji_points["Family"]=["👨‍👩‍👦", 20];
emoji_points["Gym"]=["🏋️‍♀️", 17];

emoji_names = ["Smile","Cry","Angry","Laugh","Money","Devil","Angel","Love","Dog","Cat","Cool","Nerd","Profanity","Ghost","Turd","Family","Gym"];

explosion = '<img id="explosion" src= "https://media.tenor.com/nANqORN7qhQAAAAM/explosion-explode.gif"></img>'


function display() {
    for (emo in emoji_points) {
        // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
        let emoji = emoji_points[emo][0];
        let addition = `<div id = "${emo}">${emoji}<div/>`
        $(".comp_well").append(addition);
        $(".player_well").append(addition);
        }
    }

function reset() {
    let randomint = Math.floor(Math.random() * emoji_names.length);
    computer = emoji_names[randomint];
    let computer_emoji = emoji_points[computer][0]
    comp_points = emoji_points[computer][1];
    


    $(".comp_box").text(computer_emoji);
    $(".player_box").text("❎");
    $(".comp_box_label").text(computer);
    $(".player_box_label").text("Choose 1/17 Emoji");

    
    // sources: https://www.youtube.com/watch?v=KjIur9ABjeg&ab_channel=DavidAnuson
    // https://www.youtube.com/watch?v=gTPf7WN0Bnw&t=3s&ab_channel=QuickProgrammingTips
}

const choose_player = (e) => {
    chosen_player = e.target.id;
    let emoji = emoji_points[chosen_player][0];
    $(".player_box").text(emoji);
    $(".player_box_label").text(chosen_player);

    player_points = emoji_points[chosen_player][1];

    
}



function fight() {
    console.log("fight")
    console.log(comp_points, player_points)
    if (comp_points > player_points) {
        console.log("comp wins")
        $(".player_box").html(explosion);
        $(".player_box_label").text(`${chosen_player} lost!`);
    }
    else if (comp_points < player_points) {
        console.log("player wins")
        $(".comp_box").html(explosion);
        $(".comp_box_label").text(`${computer} lost!`);
    }
    else {
        console.log("tie")
        $(".comp_box").html(explosion);
        $(".comp_box_label").text(`Tie!`);
        $(".player_box").html(explosion);
        $(".player_box_label").text(`Tie!`);
    }
}


display();
reset();
$('.player_well').click(choose_player);
$('.comp_button').click(reset);
$('.fight_button').click(fight);