function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (hasDrivingLiscence===false){
        return("You cannot drive")
    }
    else if (isTired===false)
    {
        if(hasDrivingLiscence===true && isSober===true)
        {
            return("You can drive")
        }
        return("You shouldn't drive")
    }
    else if (isSober===false)
    {
        return("You shouldn't drive")
    }
    else {

        return("You can drive")
    }
}

module.exports = CanDrive;
