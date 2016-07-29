/**
 * Created by user on 7/29/16.
 */

function start() {
    console.log("Handler start was called");
}

function upload() {
    console.log("Handler 'upload' was called.");
}

exports.start = start;
exports.upload= upload;
