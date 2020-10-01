/*Variables and Elements*/
let clickMeEl = document.getElementById('clickme')
let clickCountEl = document.getElementById('clickcount')
let clickCount = 0
let doublerButton = document.getElementById('doubler')
let tripleButton = document.getElementById('triple')
let countChange = 1
let goldenEl = document.getElementById('golden')
let celebrationEl = document.getElementById('celebration')
let goldenTextEl = document.getElementById('goldenText')
let bodyEl = document.getElementById('change')

/*Functions*/
function hasBeenClicked() {
    clickCount = clickCount + countChange
    // console.log(`${clickCount}`)
    clickCountEl.innerHTML = `${clickCount}`

    //make the button appear at score 10
    if (clickCount >= 10) {
        if (countChange === 1){
            doublerButton.classList.remove('remove')
        }
        if (countChange === 2) {
        tripleButton.classList.remove('remove')
        }
        if (countChange === 3) {
        goldenEl.classList.remove('hide')
        goldenTextEl.classList.remove('remove')
        }
        if (clickCount % 10 === 0) {
            celebrationEl.classList.remove('remove')
        } else {
            celebrationEl.classList.add('remove')
        }
    }
}

/*Double and Triple Buttons*/

function buyDoubler() {
    clickCount = clickCount - 10
    clickCountEl.innerHTML = clickCount

    doublerButton.classList.add('remove')
    countChange = countChange + 1
}

doublerButton.addEventListener('click', buyDoubler)

function buyTriple() {
    clickCount = clickCount - 10
    clickCountEl.innerHTML = clickCount

    tripleButton.classList.add('remove')
    countChange = countChange + 1
}

tripleButton.addEventListener('click', buyTriple)

/*Golden Cookie*/

function clickGolden(e) {
    if (countChange === 3)
    console.log(`${e.code}`)
    goldenTextEl.classList.add('remove')
    countChange = countChange + 1
    clickCount = clickCount + countChange
    clickCountEl.innerHTML = `${clickCount}`
}

document.addEventListener('keydown', clickGolden)

/*Changing Background Color every click*/

bodyEl.classList.remove('change')
function changeColor() {
    bodyEl.classList.add('change')
}

function reChangeColor() {
    bodyEl.classList.remove('change')
}

// bodyEl.addEventListener('mousedown', reChangeColor)
// bodyEl.addEventListener('mouseup', changeColor)

/*Cookie Mechanics + Show/Remove Buttons*/

clickMeEl.addEventListener('click', hasBeenClicked)
clickMeEl.addEventListener('mousedown', shrink)
clickMeEl.addEventListener('mouseup', grow)

function shrink() {
    clickMeEl.classList.add('shrink')
}

function grow() {
    clickMeEl.classList.remove('shrink')
}

let showButton = document.getElementById('show')
let removeButton = document.getElementById('remove')

function showCookie() {
    clickMeEl.classList.remove('hide')

    showButton.classList.add('remove')
    removeButton.classList.remove('remove')
}

function hideCookie() {
    clickMeEl.classList.add('hide')

    showButton.classList.remove('remove')
    removeButton.classList.add('remove')
}

showButton.addEventListener('click', showCookie)
removeButton.addEventListener('click', hideCookie)

showButton.classList.add('remove')