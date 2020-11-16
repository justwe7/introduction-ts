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
//# sourceMappingURL=命名空间.js.map