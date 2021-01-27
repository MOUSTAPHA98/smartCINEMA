let navbarLinks = document.querySelectorAll('.navbar-link');


var pathLink = window.location.pathname.substring(1);
var load_content = new Function (`return GET_DATA_${pathLink}()`);
load_content();






let routes = {
  '/': home,
  '/index.html': home,
  '/popular' : popular,
  '/now_playing' : now_playing,
  '/top_rated' : top_rated,
  '/upcoming' : upcoming,
  '/search' : search,
  '/favourites' : favourites,
  '/bookmarks' : bookmarks,
};

if (pathLink != ""){
  document.title = `smartCINEMA | ${pathLink.toUpperCase()}`;
};

function select_tab(id) {
  navbarLinks.forEach(item => item.classList.remove('active'));
  document.querySelectorAll("#" + id).forEach(item => item.classList.add('active'));
};

let onNavItemClick;
navbarLinks.forEach(element => {
    element.onNavItemClick = function(pathName) {
      let id = element.id;
      let pathLink = pathName.substring(1);
      select_tab(id);
      load_content = new Function (`return GET_DATA_${pathLink}()`);
      load_content(pathName);
      if (history.state === null && id != "home"){
        window.history.pushState({id}, `${id}`, `${id}`);
      } else if ( history.state != null && id != history.state.id) {
        window.history.pushState({id}, `${id}`, `${id}`);
      }
      document.title = `smartCINEMA | ${id.toUpperCase()}`;
  }
});

window.addEventListener("popstate", event => {
  var stateId;
  if (event.state === null ){
    stateId = "home";
    select_tab(stateId);
    load_content = new Function (`return GET_DATA_${stateId}()`);
    load_content();
      document.title = ``;
      document.title = `smartCINEMA | HOME`;

  } else {
       stateId = event.state.id;
      select_tab(stateId);
      load_content = new Function (`return GET_DATA_${stateId}()`);
      load_content();
        document.title = ``;
        document.title = `smartCINEMA | ${stateId}`;
  }
});


if (location.pathname != "/") {
  let tabID = location.pathname.substring(1);
  function select_tab(id) {
  document.querySelectorAll(".navbar-link").forEach(item => item.classList.remove('active'));
  document.querySelectorAll("#" + tabID).forEach(item => item.classList.add('active'));
};
select_tab();
}



let modSwitch = document.getElementById("modSwitch");
modSwitch.onclick = function(){
  if (modSwitch.checked === false){
      document.body.className = "darkMod"
  }
  if(modSwitch.checked === true){
      document.body.className = "lightMod"
  }
};
