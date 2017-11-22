"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function string(code, desc) {
    const val = process.env[code];
    if (typeof val == 'undefined') {
        fail('Missing required environment variable', code, desc);
        // trick typescript into realizing this can never happen.
        throw new Error('');
    }
    return val;
}
exports.string = string;
function int(code, desc) {
    const str = string(code, desc);
    const val = parseInt(str);
    if (Number.isNaN(val)) {
        fail(`Expected environment variable to be parseable as an int, but it was "${str}"`, code, desc);
    }
    return val;
}
exports.int = int;
function float(code, desc) {
    const str = string(code, desc);
    const val = parseFloat(str);
    if (Number.isNaN(val)) {
        fail(`Expected environment variable to be parseable as a float, but it was "${str}"`, code, desc);
    }
    return val;
}
exports.float = float;
function fail(msg, code, desc) {
    const field = code + (desc ? ': ' + desc : '');
    const error = `[ENVY] [${field}] ${msg}`;
    throw new Error(error);
}
