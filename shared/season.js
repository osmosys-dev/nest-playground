"use strict";
exports.__esModule = true;
exports.compareSeasons = void 0;
function compareSeasons(s1, s2) {
    var compare = s1.seqNo - s2.seqNo;
    if (compare > 0) {
        return 1;
    }
    else if (compare < 0) {
        return -1;
    }
    else
        return 0;
}
exports.compareSeasons = compareSeasons;
