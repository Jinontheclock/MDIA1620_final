//1)

let customerAges = [1, 3, 6, 9, 11, 15, 20, 40, 60, 80];


//2) 

let setting = {
    isBreakableItems: true,
    allowedAge: 10,
}


function customerAgeChecker (){
    for (let i = 0; i < customerAges.length; i++){
        if(setting.isBreakableItems){
            if(customerAges[i] > setting.allowedAge){
                console.log("Please come in!")
            } else{
                console.log("Please wait in line!")
            }
        } else{
            console.log("Everyone, come inside!")
        }
    } 
}
customerAgeChecker(customerAges);


//3) Challenge:

function updateAllowedAge (newAllowedAge){
    setting.allowedAge = newAllowedAge;
    console.log(`The new allowed age is updated. It's over ${newAllowedAge}.`);
    
    customerAgeChecker()
    };

updateAllowedAge(40);
