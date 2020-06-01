document.addEventListener('DOMContentLoaded', () => {
    let elemsSidenav = document.querySelectorAll('.sidenav');
    let instancesSidenav = M.Sidenav.init(elemsSidenav); // Remove 'options' from (elems, options)
    let elemsModal = document.querySelectorAll('.modal');
    let instancesModal = M.Modal.init(elemsModal, {
        dismissible: false,
        endingTop: "40%",
        inDuration: "200"
    });
});