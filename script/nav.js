function toggle_menu() {
  let mobile_nav = document.querySelector('#mobile-nav-container');
  let header_button = document.querySelector('.header-button');

  if (mobile_nav.classList.contains('close')) {
    mobile_nav.classList.remove('close');
    mobile_nav.classList.add('open');
    header_button.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100%' height='100%' viewBox='0,0,256,256' style='fill:#000000;'> <g fill-opacity='0' fill='#dddddd' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,256v-256h256v256z' id='bgRectangle'></path></g><g fill='#ffffff' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><g transform='scale(5.12,5.12)'><path d='M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z'></path></g></g></svg>";
  } else {
    mobile_nav.classList.contains("open");
    mobile_nav.classList.remove("open");
    mobile_nav.classList.add('close');
    header_button.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100%' height='100%' viewBox='0,0,256,256' style='fill:#000000;'> <g fill-opacity='0' fill='#dddddd' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,256v-256h256v256z' id='bgRectangle'></path></g><g fill='#ffffff' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><g transform='scale(5.12,5.12)'><path d='M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z'></path></g></g> </svg>"
  }
}