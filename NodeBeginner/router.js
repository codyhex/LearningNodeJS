/**
 * Created by user on 7/28/16.
 */
function route(handle, pathname) {
    console.log("About to route " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log("No handler for" + pathname);
    }
}

exports.route = route;
