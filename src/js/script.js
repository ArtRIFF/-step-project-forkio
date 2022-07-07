const btnMenu = document.querySelector('.btn-menu');
const btnCheckBox =document.querySelector('#menu_checkbox');
const mobMenu = document.querySelector('.header-nav-mob');

document.addEventListener('click', (e) => {
  e.stopPropagation();
  const its_menu = !!e.target.closest(".header-nav-mob");
  const its_btnMenu = !!e.target.closest(".btn-menu");
  const menu_is_hide = mobMenu.classList.contains("hide");

  if (btnCheckBox.checked && its_btnMenu) {
    btnCheckBox.checked = true;
    mobMenu.classList.toggle('hide');
  } else if (!its_menu && !menu_is_hide) {
      btnCheckBox.checked = false;
       mobMenu.classList.add('hide');
  }

})