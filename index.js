let routes = {
  '/': home,
  '/home': home,
  '/index.html': home,
  '/popular' : popular,
  '/now_playing' : now_playing,
  '/top_rated' : top_rated,
  '/upcoming' : upcoming,
  '/search' : search,
  '/favourites' : favourites,
  '/bookmarks' : bookmarks,
};

var pathLink = window.location.pathname.substring(1);
document.title = `smartCINEMA | ${pathLink.toUpperCase()}`;

var load_content = new Function (`return GET_DATA_${pathLink}()`);
load_content();


let navbarLinks = document.querySelectorAll('.navbar-link');

function select_tab(id) {
  navbarLinks.forEach(item => item.classList.remove('active'));
  document.querySelectorAll("#" + id).forEach(item => item.classList.add('active'));
};
select_tab(pathLink);


let onNavItemClick;
navbarLinks.forEach(element => {
    element.onNavItemClick = function(pathName) {
      let id = element.id;
      let pathLink = pathName.substring(1);
      console.log(id);
      console.log(pathLink);
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