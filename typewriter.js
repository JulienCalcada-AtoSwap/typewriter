// Script made by CALCADA Julien
// Website : calcada.tk
// 30 juillet 2019

// CONFIGURATION
let writeSpeed = 1
let eraseSpeed = 5
let delayBetweenWords = 3 // in seconds

// DON'T MODIFY THE CODE BELOW
let wordsListLength = 0
let wichWord = 0
let wordsList = []
let iWrite = 0
let iErase = 0

$(document).ready(function() {
    wordsListLength = $(".typeIt").length
    let i = 0
    while(i < wordsListLength) {
        wordsList[i] = $(".typeIt:eq("+i+")").html()
        i++
    }
    $(".typeIt").hide()
    write()
})

function write() {
    let wordLength = wordsList[wichWord].length
    
    $('.typeIt-container').append(wordsList[wichWord].charAt(iWrite))
    iWrite++
    if(iWrite < wordLength) {
        setTimeout(function(){write()}, 100 / writeSpeed)
    }
    else {
        iWrite = 0
        wichWord++
        setTimeout(function(){erase()}, 1000 * delayBetweenWords)
    }

    if(wichWord == wordsListLength) {
        wichWord = 0
    }
}

function erase() {
    let wordLength = $(".typeIt-container").text().length

    if(wordLength > 0) {
        $(".typeIt-container").text(function(_, text) {
            return text.slice(0, -1)
        })
        setTimeout(function(){erase()}, 100 / eraseSpeed)
    }
    else {
        write()
    }
}