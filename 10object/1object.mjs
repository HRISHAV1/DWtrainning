let info={
    name:"Rishav", // key:value = property 
    age:17,
    city:"Kathmandu",
    weight:60
}



// object stores multiple values in a single variable and these values are stored in key value pair

// call object using key
console.log(info)
console.log(info.name)
console.log(info.age)
console.log(info.city)
console.log(info.weight)


// change value of object
info.weight=65
console.log(info)




//add new property to object
info.hobby="Riding bike"
console.log(info)

// delete property of object
delete info.city
console.log(info)
