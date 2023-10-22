function like(){
    console.log("callback");
}
function asyncFunction(callback) {
    console.log("Start");
    setTimeout(() => {
    callback();
    }, 2000);
    console.log("Waiting");
   }

   asyncFunction(like);

 