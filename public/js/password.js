const checKey = 'checked'
let sma = 'abcdefghijklmnopqrstuvwxyz'
let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let sym = '@#$&-+()/?!*;:"✓[/\\}{°¥}]=£¢'
const num = '0123456789'
const ch = 'ㄦㄕㄋㄅㄓㄞㄌㄙㄝㄠㄤま'
const jp ='あおえかくきそとちのぬふまもゆろや'
const kr = 'ㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔㅒㅖㅁㄴㅇㄹㅎㅗㅓㅏㅣㅋㅌㅊㅍㅠㅜㅡㅆㅉ'
const korean = document.getElementById('korean')
const japan = document.getElementById('japan')
const savep = document.getElementById('savep')
const getp = document.getElementById('getp')
let saved = document.getElementById('saved')
const key = 'savedpass'
let small = document.getElementById('small')
let capital = document.getElementById('capital')
let symbols = document.getElementById('symbols')
let text = document.getElementById('text')
const numbers = document.getElementById('numbers')
const length = document.getElementById('length')
let generate = document.getElementById('generate')

const lenKey = 'lenkey'

generate.addEventListener('click', function() {
  let letter = '';
  let passw = '';
  let len = length.value
  if (small.checked) {
    letter += sma
  }
  if (capital.checked) {
    letter += cap
  }
  if (symbols.checked) {
    letter += sym
  }
  if (numbers.checked) {
    letter += num
  }
  if (japan.checked) {
    letter += jp
  }
  if (korean.checked) {
    letter += kr
  }

  for (var i = 0; i <= len - 1; i++) {
    let random = Math.floor(Math.random() * letter.length)
    passw += letter.charAt(random)
  }
  text.value = passw
  let lenValue = localStorage.setItem(lenKey, JSON.stringify(length.value))
  localStorage.setItem(checKey, JSON.stringify(porps))
  
})

savep.addEventListener('click',
  function() {
    let v = JSON.parse(localStorage.getItem(key))

    if (v) {
      localStorage.setItem(key, JSON.stringify(v.concat(text.value, '\n ===================================== \n')))
    }
    else {
      localStorage.setItem(key, JSON.stringify(text.value + '\n ===================================== \n'))
    }
  }
)

getp.addEventListener('click', function() {
  const temp = JSON.parse(localStorage.getItem(key))
  saved.value = temp
})

const clear = document.getElementById('clear');

clear.addEventListener('click', function() {
  localStorage.removeItem(key)
  saved.value = ''
})



let defult = document.getElementById('defult')

defult.addEventListener('click', () => {
  
  small.checked = true;
  capital.checked = true;
  symbols.checked = true;
  numbers.checked = true;
  korean.checked = true;
  japan.checked = false;
  length.value = 20;
  
})

// save values to localStorage
function reload() {
  let porp = [small, capital, symbols, numbers, korean, japan]
  let statu = JSON.parse(localStorage.getItem(checKey))
  for (i in porp) {
    porp[i].checked = statu[i]
  }
  let lenValue = JSON.parse(localStorage.getItem(lenKey))
  length.value = lenValue
}

reload()
//make checkpoint for checked boxes and save it to localStorage object
function checkpoint(){
  let porps = [small.checked, capital.checked, symbols.checked, numbers.checked, korean.checked, japan.checked]
  
  let lenValue = localStorage.setItem(lenKey, JSON.stringify(length.value))
  localStorage.setItem(checKey, JSON.stringify(porps))
}

//every time checkboxes checked invoke checkpoint function to update it statu in localStorage
small.addEventListener('click',checkpoint)
capital.addEventListener('click',checkpoint)
numbers.addEventListener('click',checkpoint)
korean.addEventListener('click',checkpoint)
japan.addEventListener('click',checkpoint)
symbols.addEventListener('click',checkpoint)

length.addEventListener('click', checkpoint)