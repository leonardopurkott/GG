// Ao clicar na seta, faz a animação de transição para a tela de login
const arrow = document.querySelector('.arrow-circle');
const welcomeScreen = document.getElementById('welcome-screen');
const loginScreen = document.getElementById('login-screen');

arrow.addEventListener('click', () => {
  welcomeScreen.classList.add('hidden');
  setTimeout(() => {
    loginScreen.classList.remove('hidden');
  }, 500);
});