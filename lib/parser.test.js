"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const Parser = require("./parser");
ava_1.default('parse', t => {
    const body = `
ABC=5
# Comment
DEF=hello
`;
    t.deepEqual({
        ABC: '5',
        DEF: 'hello'
    }, Parser.parse(body));
});
