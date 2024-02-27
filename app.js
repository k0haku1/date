let mode = 'time'

const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

update()
setInterval(update, 1000)

function zamTry (name) {
  return function() {
    mode = name
    update()
  }
}

fullBtn.onclick = zamTry('full')
dateBtn.onclick = zamTry('date')
timeBtn.onclick = zamTry('time')

function update () {
  output.textContent = format(mode)
}

function format (formatMode) {
  const now = new Date()

  switch (formatMode) {
		case 'time':
			return now.toLocaleTimeString()
		case 'date':
			return now.toLocaleDateString()
		case 'full':
			return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
    default :
      return now.toLocaleTimeString()
	}
}
