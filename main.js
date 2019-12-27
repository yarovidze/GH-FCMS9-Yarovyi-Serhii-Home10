function sum() {
  x = Number(prompt("Введіть число а:", 0))
  y = Number(prompt("Введіть число b:", 0))
  z = x + y
  alert(x + " + " + y + "=" + z)
}

function subtraction() {
  x = Number(prompt("Введіть число а:", 0))
  y = Number(prompt("Введіть число b:", 0))
  z = x - y
  alert(x + " - " + y + "=" + z)
}

function multiplication() {
  x = Number(prompt("Введіть число а:", 0))
  y = Number(prompt("Введіть число b:", 0))
  z = x * y
  alert(x + " * " + y + "=" + z)
}

function division() {
  x = Number(prompt("Введіть число а:", 0))
  y = Number(prompt("Введіть число b:", 0))
  z = x / y
  alert(x + " / " + y + "=" + z)
}


function pow() {
  let x = prompt("Введіть число x:", '')
  let n = prompt("Введіть степінь n:", '')
  if (n < 1) {
    alert(`Степінь ${n} не підтримується, використовуйте натуральне число`)
  } else {

    let result = x
    for (let i = 1; i < n; i++) {
      result *= x
    }
    alert(`Число ${x} в степені ${n} =` + result)
  }
}

function sqrt() {
  x = Number(prompt("Введіть число а:", 0))
  alert(`Корінь квадратний із числа ${x} =  ` + Math.sqrt(x))
}

function cos() {
  x = Number(prompt("Введіть число а:", 0))
  alert(`cos(${x}) =  ` + Math.cos(x))
}

function sin() {
  x = Number(prompt("Введіть число а:", 0))
  alert(`sin(${x}) =  ` + Math.sin(x))
}

function factorial() {
  let x = prompt("Введіть число x:", '')
  if (x < 1) {
    alert("Факторіалу від'ємного числа не існує!")
  } else {
    var z = 1
    for (i = 1; i <= x; i++)
      z = z * i
    alert(`Факторіал числа ${x} = ` + z)
  }
}

