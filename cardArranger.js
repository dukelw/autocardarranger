const imageContainer = document.getElementById('imageContainer');
// Check number of current card in print file
var maximumCards = 9
// Handle delete card
var cardIndex = 0
var order
const deleteBtn = document.querySelector('.deleteBtn')

function sortImages() {
  if (fileNameValidator()) {
    // Add name of the file
    const fileName = document.querySelector('#nameFile')
    document.title = fileName.value
  
    // Other handle
    const uploadInput = document.getElementById('uploadInput');
    const selectedFiles = uploadInput.files;
    if (maximumCards >= selectedFiles.length) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i]
        order = ++cardIndex
  
        // Checkbox
        const checkboxElement = document.createElement('input')
        checkboxElement.type = 'checkbox'
        checkboxElement.classList.add('checkbox')
        checkboxElement.setAttribute('checkboxOrder', order)
        imageContainer.append(checkboxElement)
        
        // Card
        const imageElement = document.createElement('img')
        imageElement.src = URL.createObjectURL(file)
        imageElement.setAttribute('cardOrder', order)
        imageContainer.appendChild(imageElement);
        --maximumCards
      }
    }
  }
}

function sortImagesOption() {
  if (fileNameValidator()) {
    const uploadOptionInput = document.querySelector('#uploadOptionInput')
    const cardQuantity = document.querySelector('.inputNumberOfCardBtn').value
    // Add name to the file
    const fileName = document.querySelector('#nameFile')
    document.title = fileName.value
  
    // If at least a card is input
    if (uploadOptionInput) {
      // If still have valid position
      if (maximumCards >= cardQuantity) {
        for (let i = 0; i < cardQuantity; i++) {
          // Checkbox
          const checkboxElement = document.createElement('input')
          checkboxElement.type = 'checkbox'
          checkboxElement.classList.add('checkbox')
          checkboxElement.setAttribute('checkboxOrder', order)
          imageContainer.append(checkboxElement)
  
          const imageElement = document.createElement('img');
          imageElement.src = URL.createObjectURL(uploadOptionInput.files[0]);
          imageElement.setAttribute('cardOrder', order)
          imageContainer.appendChild(imageElement);
          --maximumCards
        }
      }
    }
  }
}

function deleteCard() {
  // Get card's index to delete
  var deleteCards = document.querySelectorAll('input[class="checkbox"]:checked')
  
  var deleteOrder = []
  // Get order
  for (var i = 0; i < deleteCards.length; i++) {
    deleteOrder.push(deleteCards[i].getAttribute('checkboxorder'))
  }

  const cardNeedToDelete = document.querySelectorAll('img')
  const checkboxNeedToDelete = document.querySelectorAll('input[class="checkbox"]')
  for (var i = 0; i < cardNeedToDelete.length; i++) {
    if (deleteOrder.includes(cardNeedToDelete[i].getAttribute('cardOrder'))) {
      imageContainer.removeChild(cardNeedToDelete[i])
      imageContainer.removeChild(checkboxNeedToDelete[i])
      ++maximumCards
    }
  }
}

const checkALlBtn = document.querySelector('.checkAllBtn')

checkALlBtn.onchange = function() {
  const isCheckAll = checkALlBtn.checked
  const checkBoxs = document.querySelectorAll('.checkbox')
  if (checkBoxs) {
    for (var i = 0; i < checkBoxs.length; i++) {
      checkBoxs[i].checked = isCheckAll
    }
  }
}

function fileNameValidator() {
  const fileName = document.querySelector('#nameFile').value
  var isValidName = false
  if (!fileName) {
    alert('Vui lòng nhập tên file')
  } else {
    isValidName = true
  }
  return isValidName
}







