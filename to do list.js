const list = document.querySelector('ul')
const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
  const inp = document.querySelector('input')
  const todo = document.createElement('li')
  todo.textContent = ` ${inp.value} `
  list.appendChild(todo)
  inp.value = ''

  e.preventDefault()
})
