const targets = Array.from(document.querySelectorAll('.js-scroll-trigger'));

const getOffsetTop = (element) => {
    element = element.slice(1);
    console.log('ell', element);
    return document.getElementById(element).offsetTop - 71;

}
  
const animateScroll = (element, event) => {
    event.preventDefault();
    console.log('ell', element);

    window.scroll({
          top: getOffsetTop(element),
          behavior: 'smooth'
    })

}
const targetsFunctions = (element, event) => {
    animateScroll (element, event);
    console.log('ell', element);

}

targets.map(el => {
    el.addEventListener('click', (event) => targetsFunctions(el.hash, event));
})