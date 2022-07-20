const portfolio1Btn = document.querySelectorAll('.btn-one')
const portfolioBtn = document.querySelectorAll('.btn-one1')
const overlay    = document.getElementById('overlay')
const overlayClass    = document.querySelectorAll('.overlay')
const modalContainer = document.querySelector('.modal')
const closemodal = document.querySelectorAll('.close-button')

portfolio1Btn.forEach((n) => n.addEventListener('click', () => {
    //alert('hello')
    modalContainer.style.display = 'flex';
    overlay.style.display = 'inline-block';
  }));
  portfolioBtn.forEach((n) => n.addEventListener('click', () => {
    //alert('hello')
    modalContainer.style.display = 'flex';
    overlay.style.display = 'inline-block';
  }));
  
  closemodal.forEach((y) => y.addEventListener('click', () => {

    modalContainer.style.display = 'none';
    overlay.style.display = 'none';
  }))

  overlayClass.forEach((o) => o.addEventListener('click', () => {
    modalContainer.style.display = 'none';
    overlay.style.display = 'none';
  }))