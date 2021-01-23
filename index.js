export function select_tab(id) {
  document.querySelectorAll(".navbar-link").forEach(item => item.classList.remove('active'));
  document.querySelectorAll("#" + id).forEach(item => item.classList.add('active'));
}

function push(event) {
  let id = event.target.id;
  select_tab(id);
  document.title = ``;
  document.title = `smartCINEMA | ${id.toUpperCase()}`;
  window.history.pushState({id}, `${id}`, `${id}`);
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



let contentDiv = document.getElementById('content');

let routes = {
  '/': homepage,
  '/home': homepage,
  '/index.html': homepage,
  '/popular': popular,
  '/now_playing': now_playing,
  '/top_rated': top_rated,
  '/upcoming': upcoming,
  '/search': search,
  '/favourites': favourites,
  '/bookmarks': bookmarks
};

window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
}

let onNavItemClick = (pathName) => {
  contentDiv.innerHTML = routes[pathName];
  // window.history.pushState({}, pathName, window.location.origin + pathName);
}
contentDiv.innerHTML = routes[window.location.pathname];

window.addEventListener("popstate", event => {
  let stateId = event.state.id;
  console.log("stateId = ", stateId);
  select_tab(stateId);
    document.title = ``;
    document.title = `smartCINEMA | ${stateId.toUpperCase()}`;
});








// let contentDiv = document.getElementById('content');

// let routes = {
//   '/': homepage,
//   '/index.html': homepage,
//   '/popular': popular,
//   '/now_playing': now_playing,
//   '/top_rated': top_rated,
//   '/upcoming': upcoming,
//   '/search': search,
//   '/favourites': favourites,
//   '/bookmarks': bookmarks
// };

// window.onpopstate = () => {
//   contentDiv.innerHTML = routes[window.location.pathname];
// }

// let onNavItemClick = (pathName) => {
//   window.history.pushState({}, pathName, window.location.origin + pathName);
//   contentDiv.innerHTML = routes[pathName];
// }

// contentDiv.innerHTML = routes[window.location.pathname];




// let contentDiv = document.getElementById('content');

// let routes = {
//   '/': homepage,
//   '/index.html': homepage,
//   '/popular': popular,
//   '/now-playing': now_playing,
//   '/top-rated': top_rated,
//   '/upcoming': upcoming,
//   '/search': search,
//   '/favourites': favourites,
//   '/bookmarks': bookmarks
// };

// window.onpopstate = () => {
//   contentDiv.innerHTML = routes[window.location.pathname];
// }

// let onNavItemClick = (pathName) => {
//   window.history.pushState({}, pathName, window.location.origin + pathName);
//   contentDiv.innerHTML = routes[pathName];
// }

// contentDiv.innerHTML = routes[window.location.pathname];