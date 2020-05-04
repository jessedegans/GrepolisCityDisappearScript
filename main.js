function find(){
    //get all towns
    var data = WMap.mapData.getData(["towns", "wonders", "islands"])
    var towns = []

    //iterate over them and find one with 175 points which is most likely to vanish
    for (let [id, town] of Object.entries(data.towns)) {
        if(town.id > 0){
            if(town.points == 175)
            {
                towns.push(town); 
            }
        }
    }
    //now that we have all towns we can sort them by distance. A more smarter way i found is comparing which townid is the closest to your townid
    var myTownId = Game.townId;
    towns.sort((a, b) => Math.abs(a.id - myTownId) - Math.abs(b.id - myTownId));

    towns.forEach(function(town){
        console.log(town.player_name + "|| disappears : " + whenDisappear(town.protection_end)); 
    });
}

function whenDisappear(protectionEnd){
    const TwoHours = 1000 * 60 * 60 * 2; // two hours in millis
    const FourthyEightHours = 1000 * 60 * 60 * 24 * 2;  // 48 hours in millis
    const beginnerProtection = 1000 * 60 * 60 * 24 * 6; // 6 days beginner protection in millis

    //calculate start time
    var startTime = protectionEnd - beginnerProtection;
    
    //calculate how much time has gone by since player spawned
    var playTime = startTime - Date.now();

    //calculate if the player will disappear tonight based on the time of inactivity
    if(playTime > FourthyEightHours || (playTime + timeToMidnight() + TwoHours) > FourthyEightHours ){
        return "Next night between 2 en 4";
    } else{
        return "Players playtime is " + showNormalHoursMinutes(playTime) + " and will disappear the next night after 48 hours";
    }

}
//helper method to calculate the time to midnight
function timeToMidnight() {
    var midnight = new Date();
    midnight.setHours( 24 );
    midnight.setMinutes( 0 );
    midnight.setSeconds( 0 );
    midnight.setMilliseconds( 0 );
    return ( midnight.getTime() - new Date().getTime() );
}

function showNormalHoursMinutes(time){
    return new Date(time).toISOString().substr(11, 8)
}
