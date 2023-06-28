function lazyLoad() {
  const images = document.querySelectorAll('[data]');

  images.forEach((images) => {
    if(images.getBoundingClientRect().top < window.innerHeight + 200) {
      images.src = images.getAttribute('data');
      images.removeAttribute('data');
    }
  });
}

window.onload = ()=> {
  lazyLoad()
}

window.onscroll = ()=> {
  lazyLoad()
}