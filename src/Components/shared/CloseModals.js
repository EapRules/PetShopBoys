const closeAllModals = () => {

  const modals = document.getElementsByClassName('modal');
  const modalsBackdrops = document.getElementsByClassName('modal-backdrop');

  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.remove('show');
    document.body.classList.remove('modal-open')
    modals[i].setAttribute('aria-hidden', 'true');
    modals[i].setAttribute('style', 'display: none');
  }
  for (let i = 0; i < modalsBackdrops.length; i++) {
    document.body.removeChild(modalsBackdrops[i]);
    window.location.reload()
  }

}
export default closeAllModals;