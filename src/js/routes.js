function select_tab(id) {
    // remove selected class from all buttons
    document.querySelectorAll(".route").forEach(item => item.classList.remove('active'));
    // select clicked element (visually)
    document.querySelectorAll("#" + id).forEach(item => item.classList.add('active'));
}
function load_content(id) {
    console.log("Loading content for {" + id + "}");
    // Update text "Content loading for {id}..."
    // Of course, here you would do you content loading magic
    // Perhaps run Fetch API to update resources
    document.querySelector("#view").innerHTML = 'Content loading for /' + id + '...';
}
function push(event) {
    // Get id attribute of the box or button or link clicked
    let id = event.target.id;
    // Visually select the clicked button/tab/box
    select_tab(id);
    // Update Title in Window's Tab
    document.title = id;
    // Load content for this tab/page
    load_content(id);
    // Finally push state change to the address bar
    window.history.pushState({id}, `${id}`, `${id}`);
}
window.onload = event => {
    // Add history push() event when boxes are clicked
    window["Home"].addEventListener("click", event => push(event))
    window["Popular"].addEventListener("click", event => push(event))
    window["Now_Playing"].addEventListener("click", event => push(event))
    window["Top_Rated"].addEventListener("click", event => push(event))
    window["Upcoming"].addEventListener("click", event => push(event))
    window["Search"].addEventListener("click", event => push(event))
    window["Favourites"].addEventListener("click", event => push(event))
    window["Bookmarks"].addEventListener("click", event => push(event))
}
// Listen for PopStateEvent (Back or Forward buttons are clicked)
window.addEventListener("popstate", event => {
    // Grab the history state id
    let stateId = event.state.id;
    // Show clicked id in console (just for fun)
    console.log("stateId = ", stateId);
    // Visually select the clicked button/tab/box
    select_tab(stateId);
    // Load content for this tab/page
    load_content(stateId);
});