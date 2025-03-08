function findLongest(str) {
  var spl = str.split("");
  var longest = 0;

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
    
  }
  return longest;
}
console.log(findLongest("The quick white fox jumped around the massive dog"));


const friendsList = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
  }]
/* 
{
  offline: ['Lucy'],
  away: ['Bob']
}

*/

  const whosOnline = (friends) => {
    console.log(friends[0].lastActivity)
    const newArray = []
    let status = {
        online:[],
        offline:[],
        away:[]
    }
    for(let i = 0; i<friends.length;i++){
    
        const friend = friends[i]


        if(friend.status === `online` ){
            if(friend.lastActivity<10){
                status.offline.push(friend.username)


            }else if (friend.lastActivity>10) {
                status.offline.push(friend.username)

            }
           
        }else if(friend.status === "away"){
            status.away.push(friend.username)
        }

      
    
    }
    console.log(newArray)
 return status

  }

  console.log(whosOnline(friendsList))