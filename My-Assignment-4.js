

function calculateTax(income, expenses) {

    if(typeof income !== "number" || typeof expenses !== "number" ) {
 
          return "Invalid Input";
    }
     else if(income < expenses){
          return  "Invalid Input";
 
     }
     else if( expenses < 0 ){
          return  "Invalid Input";
 
     }
     if(income >= expenses) {
     const difference = income - expenses;
     const soHisTaxWillBe =  difference *.20; 
     return soHisTaxWillBe;
   }
     
 }
 
 
 
 
 
 
 
 
 function sendNotification(email) {
 
     if(typeof email !== "string"){
         return "Invalid Email";
     }
 
     else if (email.includes("@") == false){
         return "Invalid Email";
     }
 
     const emailSplit = email.split('');
     let newArray1 = [];
     let newArray2 = [];
 
     for(let char of emailSplit){
         if( char =="@") {
             break; 
         }
          newArray1.push(char);
     
              
     }
     const userNameOfemail = newArray1.join('');
     const emailSplitReversed = emailSplit.reverse();
 
     for(let char of emailSplitReversed){
         if( char =="@") {
             break; 
         }
          newArray2.push(char);
         
     }
 
     const contre = newArray2.reverse();
     const domainNameOfemail = contre.join('');
     const firstText2 = newArray2.join('');
 
     const ruslit = userNameOfemail + " sent you an email from " + domainNameOfemail;
     return ruslit;
 }
 
 
 
 
 
 
 
 
 function checkDigitsInName(name) {
     if(typeof name !== "string"){
      return "Invalid Email";
     }
     const nameSplit = name.split('');
     for(let char of nameSplit){
         if ( char === "0" ){
            return true;
 
         }
         else if ( char === "1" ){
            return true;
 
         }
         else if ( char === "2" ){
            return true;
 
         }
         else if ( char === "3" ){
            return true;
 
         }
         else if ( char === "4" ){
            return true;
 
         }
         else if ( char === "5" ){
            return true;
 
         }
         else if ( char === "6" ){
            return true;
 
         }
         else if ( char === "7" ){
            return true;
 
         }
         else if ( char === "8" ){
            return true;
 
         }
         else if ( char === "9" ){
            return true;
 
         }
     }
     return false;
     
 }
 
 
 
 
 
 
 
 
 function calculateFinalScore(obj) {
     if(typeof obj !== "object"){
      return "Invalid Email";
     }
     if(obj.isFFamily === true){
         obj.isFFamily = 20;
     }
     else {
         obj.isFFamily = 0;
     }
     const isFGrade = obj.isFFamily;
 
     let totalScore = rajib.testScore + rajib.schoolGrade + isFGrade;
 
     if(totalScore >= 80 )  {
         return true;
     }
     else{
         return false;
     }
 
 }
 
 
 
 
 
 
 
 
 function  waitingTime(waitingTimes  , serialNumber) {
     if(Array.isArray(waitingTimes) === false  || typeof serialNumber !== "number" ){
              return "Invalid Email";
             }
     let sumOfWitinmes = 0;
     for(let num of waitingTimes) { 
         sumOfWitinmes =  sumOfWitinmes + num;
     }
     const averageTime = sumOfWitinmes / waitingTimes.length;
     const averageWaitingTime = Math.round(averageTime);
     const uncompletedParsonInterviwe =  serialNumber - waitingTimes.length ;
     const isSeiralNmberTimebefore = uncompletedParsonInterviwe - 1;
    const isSeiralNmberTimeNeed  = isSeiralNmberTimebefore * averageWaitingTime;
    return isSeiralNmberTimeNeed;
 }
 
 
 