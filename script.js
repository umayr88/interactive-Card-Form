const inputName = document.querySelector(".input-name");
const cardHolder = document.querySelector(".card__holder");

const inputNumber = document.querySelector(".input__number");
const cardNumber = document.querySelector(".card__number");

const expDateMonth = document.querySelector(".exp__date--month");
const expDateYear = document.querySelector(".exp__date--year");
const inputMonth = document.querySelector(".input__month");
const inputYear = document.querySelector(".input__year");

const inputCVC = document.querySelector(".input__CVC");
const textCVC = document.querySelector(".cvc__code");

const thankYouMessage = document.querySelector('.thank-you')

const btnThankYou = document.querySelector('.btn--thank')

const form = document.querySelector(".form")

const errorName = document.querySelector(".error__name")
const errorNumber = document.querySelector(".error__number")
const errorNext = document.querySelector(".error__next")

const blankName = document.querySelector('.error__name--blank')
const blankNumber = document.querySelector('.error__number--blank')
const blankNext = document.querySelector('.error__next--blank')

inputName.addEventListener("input", function (e) {
  cardHolder.textContent = e.target.value;
  if (cardHolder.textContent.length == 0) {
    cardHolder.textContent = "Jane Appleseed";
  }

  if(inputName.value === '') {
    inputName.classList.remove('red__input')
    errorName.style.display = 'none'
    blankName.style.display = 'none'
  }
  else if(!/^[a-zA-Z\s]+$/.test(cardHolder.textContent)) {
    inputName.classList.add('red__input')
    cardHolder.textContent = "Jane Appleseed";
    errorName.style.display = 'block'
    blankName.style.display = 'none'
  } else {
    inputName.classList.remove('red__input')
    errorName.style.display = 'none'
    blankName.style.display = 'none'
  }
});

inputNumber.addEventListener("input", function (e) {
    try {
        cardNumber.textContent = e.target.value.match(/.{1,4}/g).join(" ");
        if (cardNumber.textContent.length == 0) {
          cardNumber.textContent = "0000 0000 0000 0000";
        }
      
      
        console.log(inputNumber.value)
      
        if(inputNumber.value === '') {
          inputNumber.classList.remove('red__input')
          errorNumber.style.display = 'none'
          blankNext.style.display = 'none'
        }
        else if(!/^[0-9]+$/.test(inputNumber.value)) {
          inputNumber.classList.add('red__input')
          cardNumber.textContent = "0000 0000 0000 0000";
          errorNumber.style.display = 'block'
          blankNumber.style.display = 'none'
        } else {
          inputNumber.classList.remove('red__input')
          errorNumber.style.display = 'none'
          blankNext.style.display = 'none'
        }
    } catch(err) {
        cardNumber.textContent = "0000 0000 0000 0000";
    }

});

inputMonth.addEventListener("input", function (e) {
  expDateMonth.textContent = String(e.target.value).padStart(2, "0");

  if(inputMonth.value === '') {
    inputMonth.classList.remove('red__input')
    errorNext.style.display = 'none'
    blankNext.style.display = 'none'
  }
  else if(!/^[0-9]+$/.test(expDateMonth.textContent)) {
    inputMonth.classList.add('red__input')
    expDateMonth.textContent = "00";
    errorNext.style.display = 'block'
    blankNext.style.display = 'none'
  } else {
    inputMonth.classList.remove('red__input')
    errorNext.style.display = 'none'
    blankNext.style.display = 'none'
  }
});

inputYear.addEventListener("input", function (e) {
  expDateYear.textContent = String(e.target.value).padStart(2, "0");

  if(inputYear.value === '') {
    inputYear.classList.remove('red__input')
    errorNext.style.display = 'none'
    blankNext.style.display = 'none'
  }
  else if(!/^[0-9]+$/.test(expDateYear.textContent)) {
    inputYear.classList.add('red__input')
    expDateYear.textContent = "00";
    errorNext.style.display = 'block'
    blankNext.style.display = 'none'
  } else {
    inputYear.classList.remove('red__input')
    errorNext.style.display = 'none'
    blankNext.style.display = 'none'
  }
});

inputCVC.addEventListener("input", function (e) {
  textCVC.textContent = String(e.target.value).padStart(3, '0')

  if(inputCVC.value === '') {
    inputCVC.classList.remove('red__input')
    errorNext.style.display = 'none'
  }
  else if(!/^[0-9]+$/.test(textCVC.textContent)) {
    inputCVC.classList.add('red__input')
    textCVC.textContent = "000";
    errorNext.style.display = 'block'
    blankNext.style.display = 'none'
  } else {
    inputCVC.classList.remove('red__input')
    errorNext.style.display = 'none'
  }
});


form.addEventListener('submit', function(e) {
  e.preventDefault()
  
   if(inputCVC.value === "" ||  inputMonth.value === ""  || inputYear.value === '') {
    blankNext.style.display = 'block'
    inputYear.classList.add('red__input')
    inputCVC.classList.add('red__input')
    inputMonth.classList.add('red__input')
  }

  if(inputName.value === "") {
    blankName.style.display = 'block'
    inputName.classList.add('red__input')
  }

  if(inputNumber.value === "") {
    blankNumber.style.display = 'block'
    inputNumber.classList.add('red__input')
  }

  if(inputCVC.classList.contains('red__input') || inputYear.classList.contains('red__input') || inputMonth.classList.contains('red__input') || inputNumber.classList.contains('red__input') || inputName.classList.contains('red__input') || inputCVC.value === "" ||  inputMonth.value === ""  || inputYear.value === '' || inputName.value === "" || inputNumber.value === "") return;

  // || inputName.value === "" || inputNumber.value === ""

  thankYouMessage.style.display = 'flex'
  form.style.display = 'none'
  inputCVC.value = inputMonth.value = inputName.value = inputNumber.value = inputYear.value = ''
})

btnThankYou.addEventListener('click', function() {
    thankYouMessage.style.display = 'none'
  form.style.display = 'grid'

  cardHolder.textContent = "Jane Appleseed";
  cardNumber.textContent = "0000 0000 0000 0000";
  textCVC.textContent = "000";
  expDateYear.textContent = "00";
  expDateMonth.textContent = "00";
})