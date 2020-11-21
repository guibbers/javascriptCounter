const span = document.querySelector('#span');
const btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach((btn) => {
   btn.addEventListener('click', (e) =>{
      const styles = e.currentTarget.classList;
      if (styles.contains('decrease')) {
         count--;
      } else if(styles.contains('reset')){
         count = 0;
      } else if(styles.contains('increase')){
         count++;
      }
      if (count < 0) {
         span.style.color = 'red';
      } else if (count == 0) {
         span.style.color = 'black';
      } else if (count > 0) {
         span.style.color = 'green';
      }
      span.textContent = count;
   });   
});