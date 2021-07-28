
const rightArr = document.getElementById('leftArr')
const leftArr = document.getElementById('rightArr')
const carouselContent = document.getElementById('carouselContent')

let position = 0;

rightArr.addEventListener('click', () => {
  if(position - 345 < -4565) {
    carouselContent.style.transform = `translateX(-4565px)`;
    position = -4565
    return;
  }
  carouselContent.style.transform = `translateX(${position - 345}px)`;
  position -= 345;
})

leftArr.addEventListener('click', () => {
  if(position === 0 || position + 345 > 0 ) {
    position = 0;
    return
  }
  carouselContent.style.transform = `translateX(${position + 345}px)`;
  position += 345;
})

carouselContent.addEventListener('')