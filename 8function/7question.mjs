//make a function name proNoun pass a input,if the input is "male" return "he"if the input is female retur "she" if input is other return "they"
const proNoun= function(gender){
    if(gender=="male"){
        return "he"
    } else if(gender=="female"){
        return "she"
    } else {
        return "they"
    }
}
console.log(proNoun("male"))
console.log(proNoun("female"))
console.log(proNoun("other"))   