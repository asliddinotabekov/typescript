var getData = function (a) {
    typeof a !== "number" && a.repeat(3);
};
var Check = function (a) {
    if (a) {
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var i = a_1[_i];
            console.log(i);
        }
    }
};
function time(key) {
    var data = new Date;
    switch (key) {
        case "ll":
            return "".concat(data.getDate(), " ").concat(data.getDay(), " ").concat(data.getFullYear());
        case "l":
            return "".concat(data.getDate(), " ").concat(data.getDay());
        default: return "".concat(data.getDate(), " ").concat(data.getDay());
    }
}
// console.log(time("ll"))
// console.log(time("l"))
function get(str) {
    var title = str;
    if (typeof str === "string") {
    }
}
function gets() {
    throw new Error("SDFASFASfa");
}
// never  hichnima qaytarilmaydi 
var man;
