/**
 * Created by user on 7/28/16.
 */
function route(handle, pathname, response, request) {
    console.log("About to route " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        console.log("No handler for" + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found.");
        response.end();
    }
}

exports.route = route;
