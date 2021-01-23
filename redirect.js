function select_tab(id) {
  document.querySelectorAll(".navbar-link").forEach(item => item.classList.remove('active'));
  document.querySelectorAll("#" + id).forEach(item => item.classList.add('active'));
};

let redirect404 = () => {
  select_tab("popular");
  var segmentCount = 0;
  var location = window.location;
  location.replace(
    location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') +
    location.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?p=/' +
    location.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
    (location.search ? '&q=' + location.search.slice(1).replace(/&/g, '~and~') : '') +
    location.hash
  );
  select_tab("popular");
}

let recieveRedirect = () => {
  select_tab("popular");

  (function(location) {
    if (location.search) {
      var q = {};
      location.search.slice(1).split('&').forEach(function(v) {
        var a = v.split('=');
        q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
      });
      if (q.p !== undefined) {
        window.history.replaceState(null, null,
          location.pathname.slice(0, -1) + (q.p || '') +
          (q.q ? ('?' + q.q) : '') +
          location.hash
        );
      }
    }
  }(window.location));
  select_tab("popular");
}
