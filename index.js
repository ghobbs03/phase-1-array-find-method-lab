// code your solution here

function superbowlWin(array) {
    const obj = array.find(element => element.result === "W");

    if (obj === undefined) {
        return undefined;
    }
    
    return obj.year;
}

