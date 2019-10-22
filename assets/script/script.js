const navItem = document.querySelectorAll('.nav__item');
console.log(navItem);
navItem.forEach(function(element, index) {
  console.log(element.innerText)
})

const para = document.querySelector('.paragraph');
console.log(para)
para.addEventListener('mouseover', function() {
  this.classList.add('active');
})

para.addEventListener('mouseleave', function() {
  this.classList.remove('active');
})

const testLink = document.querySelector('.test');
console.log(testLink);
testLink.addEventListener('mouseover', function() {
  this.classList.add('active');
})

testLink.addEventListener('mouseleave', function() {
  this.classList.remove('active');
})