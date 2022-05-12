// console.log('drumkit.js');

window.addEventListener('keydown', function(e) {
    // retriving the keyCode linked to any pushed key
    // console.log(e.keyCode)
    const key = document.querySelector(`.keyContainer[data-key="${e.keyCode}"]`);
    // console.log(key);
    // selecting each unique audio element that has the same data-key value as the pushed key 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    // console.log(audio);
    // stoping fct from running on keys that dont have a corresponding audio element
    if(!audio) return 
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing'); // same as key.addClass('playin')
    
    // building a removetransition fct
    function removeTransition(e) {
        // console.log("file: drumkit.js ~ line 19 ~ removeTransition ~ e", e)
        // console.log(`all ended transitions are :  + ${e}`);
        // console.log(e);
        if(e.propertyName !== 'transform')  {
            return
        } // Dom't try to remove anything if the key(div) doesn't have a transform propertyNAME 
        // like in our case "border-bottom-left" or 
        else {
            // console.log(e.propertyName);
            this.classList.remove('playing'); // this relate to the div keyContainer that is keydowned
        }
        
    }

    // Gathering all the keyContainers div in an array
    const allKeys = document.querySelectorAll('.keyContainer')
    // console.log(allKeys);
    // filtering all the the array and find the elemnt that have been through a transition
    allKeys.forEach( key => 
        key.addEventListener(
            'transitionend',// the transitionend event listen if a psecified element is going through a transform process
             removeTransition,
            //  console.log(key)
        )
        
    )
});