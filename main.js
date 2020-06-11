
const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const rowElements = document.querySelectorAll(".row")

function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}
replaceAllButton.addEventListener("click", function () {
    let find = findInput.value
    let replace = replaceInput.value
    let counter = 0

    for (let rowCounter = 0; rowCounter < rowElements.length; rowCounter ++) {
       
        const currentRowElement = rowElements[rowCounter]
        let rows = getCellElements(currentRowElement)
        for (let cellCounter = 0; cellCounter < rows.length; cellCounter ++) {
           
            const cell = rows[cellCounter]
            let cellString = cell.innerHTML
            while(cellString.includes(find)) {
               

                cellString = cellString.replace(find, replace)
                counter = counter + 1
            }
            cell.innerHTML = cellString
           
        }
    }
    
   
})

