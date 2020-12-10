var Utility;
(function (Utility) {
    function log(msg) {
        console.log(msg);
    }
    Utility.log = log;
    function error(msg) {
        console.log(msg);
    }
    Utility.error = error;
})(Utility || (Utility = {}));
// usage
Utility.log('Call me');
Utility.error('maybe');
//# sourceMappingURL=%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4.js.map