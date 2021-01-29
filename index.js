// Select All Navbar Links On The App
let navbarLinks = document.querySelectorAll('.navbar-link');

// Select The Current App Path Without "/" 
var pathLink = window.location.pathname.substring(1);

// Load App Content Due To The Current Path
var load_content = new Function (`return GET_DATA_${pathLink}()`);

// Load Default HomePage App Content
(pathLink == "" || pathLink == "index.html" ? load_content = new Function (`return GET_DATA_home()`) : null)
load_content();
(pathLink == `movie`+/x([0-9]+)/ ? load_content = new Function (`return GET_DATA_movie()`) : null)
load_content();

///////////////////////////
///   Set App Routes   ///
//////////////////////////

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
    '/movie' : movie,
};

// Change Browser Title Due To the Current Path
(pathLink != "" ? document.title = `smartCINEMA | ${pathLink.toUpperCase()}` : null);
(pathLink === "index.html" ? document.title = `smartCINEMA | HOME` : null);
  
// Select The Tab (Navbar) That Is Clicked Function
function select_tab(id) {
    navbarLinks.forEach(item => item.classList.remove('active'));
    document.querySelectorAll("#" + id).forEach(item => item.classList.add('active'));
};


///////////////////////////////////////////
///   Navbar Items Click Functions   ///
/////////////////////////////////////////

// ONCLICK Function
let onNavItemClick;

// Loop Each Element On The NavList To Apply The Functions
navbarLinks.forEach(element => {
  element.onNavItemClick = function(pathName) {

        // GET The ID & Pathlink Of Clicked Item
        let id = element.id;
        let pathLink = pathName.substring(1);

        // Select The Clicked Tab
        select_tab(id);

        // If the Clicked Tab Is "HOME"
        if (pathLink == ""){
            load_content = new Function (`return GET_DATA_home()`);
            load_content();
        }
        // If The Clicked Tab Is not "HOME"
        else{
            load_content = new Function (`return GET_DATA_${pathLink}()`);
            load_content();
        }

        ////////////////////////////////////////////
        ///////           SET HISTORY API        ///////
        //////////////////////////////////////////
        
        // Set The History State
        (history.state === null ? window.history.pushState({id}, `${id}`, `${id}`) : null);

        // Avoid Repeat The State
        ( history.state != null && id != history.state.id ?  window.history.pushState({id}, `${id}`, `${id}`) : null);
      
        // Change Browser Title To The Name Of Selected Tab
        document.title = `smartCINEMA | ${id.toUpperCase()}`;
    }
});

// History Back (POPSTATE)
window.addEventListener("popstate", event => {

  // Seleect the current Tab ID
  var stateId;

  // Assign the state to "HOME" if its nulll
  if (event.state === null ){
  stateId = "home";

    // Load content of the current tab
    select_tab(stateId);
    load_content = new Function (`return GET_DATA_${stateId}()`);
    load_content();

    // Update the browser title to the cuerrent tab
    document.title = ``;
    document.title = `smartCINEMA | HOME`;
} 
  else {
    // Update the state ID to the current tab and load content
    stateId = event.state.id;
    select_tab(stateId);
    load_content = new Function (`return GET_DATA_${stateId}()`);
    load_content();

    // Update browser title
    document.title = ``;
    document.title = `smartCINEMA | ${stateId}`;
    }
  });

// Select HOME tab when popstate to it
if (pathLink  == ""){
  id = "home";
  select_tab(id);
} else if (pathLink != ""){
  select_tab(pathLink);
}


///////////////////////////////////////////
///////          APP THEME MOD        ///////
//////////////////////////////////////////

let modSwitch = document.getElementById("modSwitch");
modSwitch.onclick = function(){
    (modSwitch.checked === false ? document.body.className = "darkMod" : null)
    (modSwitch.checked === true ?  document.body.className = "lightMod" : null)
};


///////////////////////////////////////////
///////          LOADING PAGE          ///////
//////////////////////////////////////////

$(document).ready(function() {
var counter = 0;
var c = 0;
var i = setInterval(function(){
$(".loading-page .counter h1").html(c + "%");
$(".loading-page .counter hr").css("width", c + "%");
counter++;
c++;

if(counter == 101) {
clearInterval(i);
$(".loading-page").css("opacity" , "0");
setInterval(() => {
$(".loading-page").css("display" , "none");
}, 1900);
}
}, 50);
});