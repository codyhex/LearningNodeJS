'use strict';

var greet = require('../src/greet');

describe('greet', function () {

    it('should greet the given name', function () {
        expect(greet('HP')).toEqual('Hello HP!');
    });

    it('should greet no-one', function () {
        expect(greet()).toEqual('Hello world');
    });
});
