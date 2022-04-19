function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}


// function sayHiToHeadphonedRoommate(string) {
//     if (string.toLowerCase()) {
//         return "I can't hear you!";
//     } else { (string.toUpperCase())
//         return "YES INDEED";
//     } 

// }


function sayHiToHeadphonedRoommate(string) {

    console.log("string", string)
    if ("Let's have dinner together!" === string) {
        return "I would love to!"
    } else if (whisper(string) === string) {
        return "I can't hear you!"
    } else if (shout(string) === string) {
        return "YES INDEED!"
    }
}