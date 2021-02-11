window.addEventListener('load', () => {

  const btn = document.getElementById('btn')
  const arr = [
    '1.jpeg',
    '2.jpg',
    '3.jpeg',
    '4.jpg'
  ]

  function createImg(imgPath, imgId) {
    return new Promise((resolve, reject) => {
      try {
        let img = document.createElement('img')
        img.setAttribute('src', imgPath)
        img.setAttribute('id', imgId)
        const body = document.querySelector('body')
        body.appendChild(img)
        let imgNewTag = document.getElementById(imgId)
        imgNewTag.addEventListener('load', () => resolve('Фото загружено'))
        imgNewTag.addEventListener('error', () => reject('Фото НЕ загружено'))
      } catch (err) {
        reject(`Ошибка - ${err}`)
      }
    })
  }

  btn.addEventListener('click', () => {

    createImg(arr[0], 'id01')

      .then(response => {
          return createImg(arr[1], 'id02')
        },
        response => createImg(arr[1], 'id02'))

      .then(response => {
          return createImg(arr[2], 'id03')
        },
        response => createImg(arr[2], 'id03'))

      .then(response => {
          return createImg(arr[3], 'id04')
        },
        response => createImg(arr[3], 'id04'))

      .catch(err => console.log(err))
  })

})