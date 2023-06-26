"use strict";
const getData = (a) => {
    if (typeof a !== "number") {
        a.length;
    }
};
const Check = (a) => {
    if (a) {
        for (let i of a) {
            console.log(i);
        }
    }
};
function time(key) {
    let data = new Date;
    switch (key) {
        case "ll":
            return `${data.getDate()} ${data.getDay()} ${data.getFullYear()}`;
        case "l":
            return `${data.getDate()} ${data.getDay()}`;
        default: return `${data.getDate()} ${data.getDay()}`;
    }
}
// console.log(time("ll"))
// console.log(time("l"))
function get(str) {
    let title = str;
    if (typeof str === "string") {
    }
}
function gets() {
    throw new Error("SDFASFASfa");
}
// never  hichnima qaytarilmaydi 
let man;
//  hechqanday qiymatga qaytmaydi bu ayb bizda emas😂😂😂😂
