/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Exception = require('./Exception');

class NotImplementedException extends Exception {
    constructor() {
        super();
    }
}

module.exports = NotImplementedException;