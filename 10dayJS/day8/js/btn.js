// @ts-ignore
const btn = document.getElementById('btn');
let count = 0;
btn.addEventListener('click', () => {
  count += 1;
  btn.innerHTML = count;
});
