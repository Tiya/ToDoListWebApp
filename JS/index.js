//************callback***********
// function dating(callback){
//     const dateDetails ={
//         name: 'Taj Hotel',
//         place: 'Cochin',
//         table: 7
//     }
// callback(dateDetails);
// }
// function message(date){
//     console.log('Date Details: ',date)
// }
// dating(message);

//**********promise*************

var weather=true;

const dating = new Promise(function(resolve,reject){
    if(weather){
        const dateDetails ={
            name: 'Taj Hotel',
            place: 'Cochin',
            table: 7
        }
        resolve(dateDetails);
    }
    else{
        reject('Bad Weather!! Date Cancelled!');
    }
})

 
function travel(dateDetails){
   return new Promise(function(resolve,reject){
        resolve(`Get him a Uber to ${dateDetails.name} ${dateDetails.place}`);
    })
}

dating
.then(travel)
.then(function(date){
    console.log('Date Details: ',date);
}).catch(function(err){
    console.log(err);
});

//Asyn
async function mydate(){
    try{
        let date= await dating;
        let message= await travel(date);
        console.log(`Date Details: `, message);
    }catch(e){
        console.log(e)
    }
}
mydate();