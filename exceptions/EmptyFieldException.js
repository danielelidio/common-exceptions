/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Exception = require('./Exception');

class EmptyFieldException extends Exception {
    constructor(message) {
        super(message);
    }
}

module.exports = EmptyFieldException;