
function superbowlWin(record) {
let win = record.find(record => record.result === 'W')
if (win === undefined) {
    return undefined 
} else {return win.year}
}
