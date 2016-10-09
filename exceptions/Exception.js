/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Exception {
    constructor(message) {
        if(typeof message !== 'undefined' && message != null)
            this.message = message;
    }
}

module.exports = Exception;