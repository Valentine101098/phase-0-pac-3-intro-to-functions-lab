function shout(string) {
  // todo
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log("HELLO".toLowerCase())
}

function logShout(string) {
  console.log("hello".toUpperCase())
}

function sayHiToHeadphonedRoommate(string) {
  if (string === "Let's have dinner together!") {
    return "I would love to!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else {
    return "I can't hear you!";
  }
}