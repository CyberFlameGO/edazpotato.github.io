var rick = {
  roll: function(){
    document.getElemntById("rick_modal").checked = true;
  }
}

/* picnic.css javascript stuff */
document.onkeydown = function(e){
  if (e.keyCode == 27) {
    var mods = document.querySelectorAll('.modal > [type=checkbox]');
    [].forEach.call(mods, function(mod){ mod.checked = false; });
  }
}