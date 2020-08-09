window.onload = () => {
  var userLogged = window.sessionStorage.getItem('logged');
  if (!userLogged || userLogged === "false") {
    if (window.location.pathname !== "/") {
      window.location.replace(window.location.origin);
    }
  }
} 