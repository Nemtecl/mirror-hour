const moment = require('moment');


exports.isMirrorHour = function() {
    moment.locale('fr');
    const now = moment();
    if (now.hour() === now.minutes()) {
        return true;
    }
    return false;
}

