import localStor from './storage.js'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchInput = document.querySelector('.js-switch-input');
const body = document.querySelector('body');

const isChecked = localStor.load('isChecked');
switchInput.checked = isChecked;
// switchInput.checked = true;

console.log(isChecked);

if (isChecked) {
  body.classList.add(Theme.DARK);
  switchInput.checked = true;
  console.log('isChecked');
}

switchInput.addEventListener('change', handleSwitchTheme);

function handleSwitchTheme(event){
  if(event.target.checked){
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStor.save('isChecked', true);
    return;
  }
  body.classList.remove(Theme.DARK);
  body.classList.add(Theme.LIGHT);
  localStor.save('isChecked', false);
}


