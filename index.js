// var load_content = new Function(`return GET_DATA_${location.pathname.substr(1).toUpperCase()}()`);
// load_content();


let routes = {
  // '/': home,
  // '/index.html': home,
  // '/POPULAR' : popular,
  // '/NOW_PLAYING' : now_playing,
  // '/TOP_RATED' : top_rated,
  // '/UPCOMING' : upcoming,
  '/SEARCH' : search,
  // '/FAVOURITES' : favourites,
  // '/BOOKMARKS' : bookmarks,
};






// var newPath = pathName.substring(1);
// load_content = new Function(`return GET_DATA_${newPath}()`);
// load_content();


// function select_tab(id) {
//   document.querySelectorAll(".navbar-link").forEach(item => item.classList.remove('active'));
//   document.querySelectorAll("#" + id).forEach(item => item.classList.add('active'));
// };





function push(event) {

  let id = event.target.id;

  // load_content = new Function(`return GET_DATA_${id.toUpperCase()}()`);
  // load_content();

  // if (history.state === null && id != "home"){
  //   window.history.pushState({id}, `${id}`, `${id.toUpperCase()}`);
  // } else if ( history.state != null && id != history.state.id) {
  //   window.history.pushState({id}, `${id}`, `${id.toUpperCase()}`);
  // }

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