
function reloadPage(){
  location.reload(true);
}

  function stateChange(newState) {
    setTimeout(function () {
        if (newState == -1) {
          reloadPage();
        }
    }, 1000);
}
