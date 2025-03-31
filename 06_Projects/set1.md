# Projects related to DOM

## project link: 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

### Project 1 
```javascript
const btn = document.querySelector('.btn');
const heading = document.querySelector('.heading');
btn.addEventListener('click', () => {
  heading.style.color = 'red';
});
```