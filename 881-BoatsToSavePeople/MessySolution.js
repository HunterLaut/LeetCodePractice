/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    // new idea Parse the list into substrings that add up to the limit
    // count the number of substrings

    // for (let i=0; i < people.length; i++)
    // {
    //     k= i+1;
    //     while (k<people.length){
    //         if (i)
    //     }
    //     if (i + k <= limit)
    //     else
    // }





    people.sort((a,b) => a-b);
    var currentBoat = [];
    var numBoat = 0;

    var checkWeight = function(currentBoat){
        return currentBoat.reduce((returnValue, arrayValue) => returnValue + arrayValue, 0);

    }

    while (people.length > 0){
        //Checking people remaining
        //console.log("PRE-LOAD\n PeopleRemaing: "+ people + ", numBoats: " + numBoat);

        //Load in Heavy
        currentBoat.push(people.pop());

        //Check Proper load
        //console.log("HEAVY IN\n PeopleRemaing: "+ people + ", Current Boat: "+ currentBoat + ", numBoats: " + numBoat);

        //Is this the last passenger?
        if (people.length == 0)   {
            console.log("Sending Last Boat!");
            numBoat++;
            currentBoat = []
            break;
        }

        //Can We Fit the lightest person?      
        currentBoat.push(people.shift());
        //console.log("LIGHT IN\n PeopleRemaing: "+ people + ", Current Boat: "+ currentBoat + ", numBoats: " + numBoat);
        if (checkWeight(currentBoat) > limit){
            people.unshift(currentBoat.pop()); //Too Much Weight
            //console.log("LIGHT out\n PeopleRemaing: "+ people + ", Current Boat: "+ currentBoat + ", numBoats: " + numBoat);
        }

        //console.log("Sending Boat");
        numBoat++;                              
        currentBoat = [];
        //console.log("Boat Sent\n PeopleRemaing: "+ people + ", Current Boat: "+ currentBoat + ", numBoats: " + numBoat);
    }//END WHILE   
    return numBoat;
}//END Function
    

    
//     for (let i = people.length; i>0; i--){
        
//         if (currentBoat.sum()){}

//         currentBoat = newBoat(people)

//     });











//     var totalWeight = 0; 
//     var eligibleDuo = 0; //Number of people with weight less than half the limit
//     var numBoats = people.length; //assume there is one boat for each person
//     var maxWeight = 
    
//     people.forEach(i => {   //Ah Good ole ArrowFunctions ^u^
//         totalWeight+=i      //Find Total Weight of people
//         if (i < limit/2){   //do we have eligible Duo?
//             eligibleDuo++;
//             }
//     }); 
//     console.log("numPeople: "+ people.length + "\nTotalWeight: " + totalWeight + "\nEligible People to Duo: " + eligibleDuo);
    
//     if (eligibleDuo != 0){
//         numBoats = totalWeight/limit;
//     }
//     return numBoats;
// };
