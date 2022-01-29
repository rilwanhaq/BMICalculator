function CreateObject(arr) {
    // Write your code here
    var objname = {};
    for(var i=0; i<arr.length; i+=2) {
        var key = arr[i]
        var value = arr[i+1]
        objname [key] = value;
    }
    return objname

}

module.exports = CreateObject;
