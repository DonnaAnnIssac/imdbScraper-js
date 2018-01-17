let info = document.getElementById('info')

window.addEventListener('load', () => {
  console.log('Making request')
  let xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://localhost:9191/top', true)
  xhr.onload = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      info.innerText = JSON.parse(xhr.responseText).title
    }
  }
  xhr.send()
})

document.querySelector('button').addEventListener('click', () => {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://localhost:9191/movie?id=tt1229340', true)
  xhr.onload = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      info.innerText = JSON.parse(xhr.responseText).title
    }
  }
  xhr.send()
})
