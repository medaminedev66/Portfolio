const forma= document.querySelector("#contactme")

var data ={
    name : forma.elements.name.value,
    email : forma.elements.email.value,
    comment : forma.elements.comment.value
}

var storeData = JSON.stringify(data)

localStorage.setItem('newData',storeData)

if(!localStorage.getItem('newData')) {
  localStorage.setItem('newData', storeData);
  var currentData = localStorage.getItem('newData');
  console.log(currentData)
  var storedD = JSON.parse(currentData)
  console.log(storedD)
  forma.elements.name.value = storedD.name;
  forma.elements.comment.value = storedD.comment;
  forma.elements.email.value = storedD.email;
} else {
  var currentData = localStorage.getItem('newData');
  console.log(currentData)
  var storedD = JSON.parse(currentData)
  console.log(storedD)
  forma.elements.name.value= storedD.name;
  forma.elements.comment.value= storedD.comment;
  forma.elements.email.value= storedD.email;
}

// console.log()
// console.log(data.name)
// console.log(data.email)
// console.log(data.comment)


// var p=localStorage.getItem('newdata');
// console.log(p)
// var storedD = JSON.parse(p)
// console.log(storedD)
// console.log(storedD.name)
// console.log(storedD.email)