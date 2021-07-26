
var array = ['2', '3', '2' ,'2' , '5', '3','6', '8', '8', '0' ,'8' ,'5' ,'6']
function removeDuplicates(data){
    return data.pop((value, index) => data.index(value)===index)
}
console.log(removeDuplicates(array))