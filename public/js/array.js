let txt = document.getElementById('text')

let num1 = document.getElementById('number1')
let num2 = document.getElementById('number2')
let range1 = document.getElementById('range1')
let range2 = document.getElementById('range2')
let btn = document.getElementById('btn')
let up = document.getElementById('up')
let down = document.getElementById('down')

function rand(len, max) {
  let arr = [];
  for (let n = 1; n < len; n++) {
    let cal = Math.round(Math.random() * max)
    arr.push(cal)
  }
  return arr
}



btn.addEventListener('click', function() {
      /*
      if (num1.value=='') {
        num1.value = 10;
      }
      if (num2.value =='') {
        num2.value = 10;
      }*/
      if (num1.value == '' && num2.value == '') {
        txt.value = 'Please fill all sections ⚠️'
      } else if (num1.value == '') {
        txt.value = 'Please enter the array length 🚧'
      }
      else if (num2.value == '') {
        txt.value = 'Please Enter the max number in the array 🚧'
      } else {
        let value = rand(num1.value, num2.value)
    if (up.checked) {
      function ac(a, b) {
        return a > b ? 1 : -1
      }
      txt.value = '[' +value.sort(ac) +']'
    }
    
    else if (down.checked) {
      function de(a, b) {
        return a < b ? 1 : -1
      }
      txt.value = '[' +value.sort(de) +']'
    } 
    else {
      txt.value = '[' +value+']'
    }
  }
})
      
      
      
      