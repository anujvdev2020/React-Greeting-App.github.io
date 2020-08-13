import React from 'react'

function App() {
  let time = new Date()
  time = time.getHours()

  let greet = ''
  let Fcolor = {
    color: '',
  }
  let nColor = {
    color: '',
  }

  if (time < 12) {
    greet = 'Good Morning'
    Fcolor.color = 'limegreen'
    nColor.color = '#d62228'
  } else if (time >= 12 && time < 19) {
    greet = 'Good Evening'
    Fcolor.color = 'gold'
    nColor.color = 'brown'
  } else {
    greet = 'Good Night'
    Fcolor.color = 'silver'
    nColor.color = '#9419b7'
  }
  return (
    <>
      <div>
        <h1 style={nColor}>
          Hello Anuj , <span style={Fcolor}>{greet}</span>
        </h1>
      </div>
    </>
  )
}

export default App
