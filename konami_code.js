const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function

  // const main = document.getElementById('body')

  document.addEventListener('keydown', onKeyDownHandler)

  let index = 0

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]){
      index++

      if (index === code.length){
        alert("30 lives granted!")

        index = 0
      }
    } else {
      index = 0
    }
  }
}