/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a-b); //Important JS Comparator
    var currentBoat = [];
    var numBoat = 0;

    //Learned how to use Array.Reduce to find Sum of Array
    var checkWeight = function(currentBoat){
        return currentBoat.reduce((returnValue, arrayValue) => returnValue + arrayValue, 0);
    }

    while (people.length > 0){
        //console.log("PRE-LOAD\n PeopleRemaing: "+ people + ", numBoats: " + numBoat);

        //Load in Heavy
        currentBoat.push(people.pop());

        //Is this the last passenger?
        if (people.length == 0)   {
            numBoat++;
            currentBoat = []
            break;
        }

        //Load in Light
        currentBoat.push(people.shift());

        //Check Weight Limit
        if (checkWeight(currentBoat) > limit){
            people.unshift(currentBoat.pop()); //return back to passenger line
        }

        //Send Boat
        numBoat++;                              
        currentBoat = [];
    }//END WHILE   

    return numBoat;
    
}//END Function
