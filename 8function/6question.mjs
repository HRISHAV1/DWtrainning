// make a function named canVote that takes 1 input as age, it must return true if the given age is greater than 18 else return false.
const canVote= function(age){
    if(age>18){
        return  "he/she can vote"
    } else {
        return "he/she cannot vote"
    }
}
console.log(canVote(19))
console.log(canVote(17))