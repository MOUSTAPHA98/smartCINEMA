let routes = {
  '/': home,
  // '/HOME': home,
  // '/index.html': home,
  '/POPULAR' : popular,
  '/NOW_PLAYING' : now_playing,
  '/TOP_RATED' : top_rated,
  '/UPCOMING' : upcoming,
  '/SEARCH' : search,
  '/FAVOURITES' : favourites,
  '/BOOKMARKS' : bookmarks,
};

// console.log(routes);


// var back_to_fn = new Function(`return GET_DATA_()`);
// back_to_fn();

// window.onpopstate = () => {
//   contentDiv.innerHTML = routes[window.location.pathname];
// }


let onNavItemClick = (pathName) => {
  var newPath = pathName.substring(1);
  // var back_to_fn = new Function(`return GET_DATA_${newPath}()`);


  // back_to_fn();
}






// window.history.pushState({}, pathName, window.location.origin + pathName);



function select_tab(id) {
  document.querySelectorAll(".navbar-link").forEach(item => item.classList.remove('active'));
  document.querySelectorAll("#" + id).forEach(item => item.classList.add('active'));
}


// function load_content(id) {
//   console.log("Loading content for {" + id + "}");
//   document.querySelector("#view").innerHTML = 'Content loading for /' + id + '...';
// }



function push(event) {
  let id = event.target.id;
  if (history.state === null && id != "home"){
    window.history.pushState({id}, `${id}`, `${id.toUpperCase()}`);
  } else if ( history.state != null && id != history.state.id ) {
    window.history.pushState({id}, `${id}`, `${id.toUpperCase()}`);
  } 

  // if ( id != "home" && id === null) {
  //   window.history.pushState({id}, `${id}`, `${id.toUpperCase()}`);
  // } else if (id = window.history.state.id){
  //   null
  // }
  // if (id == null && id != window.history.state.id){
  // }

  select_tab(id);
  // Update Title in Window's Tab
  document.title = `smartCINEMA | ${id.toUpperCase()}`;
  // Load content for this tab/page
  // load_content(id);
  // Finally push state change to the address bar
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



window.addEventListener("popstate", event => {
  var stateId;
  if (event.state === null ){
    stateId = "home";
    select_tab(stateId);
      document.title = ``;
      document.title = `smartCINEMA | HOME`;

  } else {
       stateId = event.state.id;
      select_tab(stateId);
        document.title = ``;
        document.title = `smartCINEMA | ${stateId.toUpperCase()}`;
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
