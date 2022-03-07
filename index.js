console.log("from index.js")

// String constant that indicates the action
const BUY_CAKE = 'BUY_CAKE'

 
// Action creator is a function that does a function
function buyCake(){

    // Object has a type property
    // this is an action
    return  {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}


