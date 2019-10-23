const navList = document.querySelectorAll('.nav__item');

console.log(navList);
for(let i=0; i<navList.length; i++) {
  navList[i].addEventListener('mouseover', function() {
    this.classList.add('active');
  })
}

for(let i=0; i<navList.length; i++) {
  navList[i].addEventListener('mouseleave', function() {
    this.classList.remove('active');
  })
}
