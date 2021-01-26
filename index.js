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

function select_tab(id) {
  navbarLinks.forEach(item => item.classList.remove('active'));
  document.querySelectorAll("#" + id).forEach(item => item.classList.add('active'));
};

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
        window.history.pushState({id}, `${id}`, `${id.}`);
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

// let onNavItemClick = (pathName) => {
//   console.log(this)
//   // console.log(pathName);
//   let pathLink = pathName.substring(1);
//   console.log(pathLink);
//   //   window.history.pushState({id}, `${id}`, `${id.toUpperCase()}`);

//   window.history.pushState({pathLink}, `${pathLink}`, `${pathLink}`);
// }


// var newPath = pathName.substring(1);
// load_content = new Function(`return GET_DATA_${newPath}()`);
// load_content();








function push(event) {

  let id = event.target.id;

  // load_content = new Function(`return GET_DATA_${id.toUpperCase()}()`);
  // load_content();


  // document.title = `smartCINEMA | ${id.toUpperCase()}`;
}



window.onload = event => {
  window["home"].addEventListener("click", event => push(event))
  window["popular"].addEventListener("click", event => push(event))
  window["now_playing"].addEventListener("click", event => push(event))
  window["top_rated"].addEventListener("click", event => push(event))
  window["upcoming"].addEventListener("click", event => push(event))
  window["search"].addEventListener("click", event => push(event))
  window["favourites"].addEventListener("click", event => push(event))
  window["bookmarks"].addEventListener("click", event => push(event))
}

// window.addEventListener("popstate", event => {
//   var stateId;
//   if (event.state === null ){
//     stateId = "home";
//     select_tab(stateId);
//       document.title = ``;
//       document.title = `smartCINEMA | HOME`;

//   } else {
//        stateId = event.state.id;
//       select_tab(stateId);
//         document.title = ``;
//         document.title = `smartCINEMA | ${stateId.toUpperCase()}`;
//   }
// });