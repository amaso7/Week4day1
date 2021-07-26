function palindromeChk(str){
    var reversed = ''
    for (var char of str){
        reversed=char +reversed
    }
    return reversed === str
}
console.log(palindromeChk('cat'))