const moment = require('moment');


exports.isMirrorHour = function() {
    moment.locale('fr');
    const now = moment();
    if (now.hour() === now.minutes()) {
        return true;
    }
    return false;
}

moment.locale('fr');
const now = moment();

var time = new Date();
var secondsRemaining = (60 - time.getSeconds()) * 1000;

setTimeout(function() {
    console.log('Mirror Hour ? ⏱ : ' + (this.isMirrorHour ? 'Yes' : 'No'))
    setInterval(function() {
        console.log('Mirror Hour ? ⏱ : ' + (this.isMirrorHour ? 'Yes' : 'No'))
    }, 60000);
}, secondsRemaining);