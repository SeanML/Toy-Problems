// var mixEvents = function(obj) {
  
//   var events = {};

//   obj.trigger = function (event) {
//     if(arguments.length > 1) {
//       var slicedArgs = Array.prototype.slice.call(arguments);
//       slicedArgs.forEach(function(arg) {
//         if(arg === events.event) {
//           events.callback.apply(arg);
//         }
//       });
//     } else {
//       if(event === events.event) {
//         events.callback.apply(event);
//       }
//     }
//   };

//   obj.on = function (event, callback) {
//     events.event = event;
//     events.callback = callback;
//   };
  
//   return obj;
// };

var mixEvents = function(obj) {
  
  var events = {};

  obj.trigger = function (event) {
    var slicedArgs = Array.prototype.slice.call(arguments, 1);
    if(events[event]) {
      slicedArgs.forEach(function(arg) {
        events.callback.apply(arg);
      })
    }
  };

  obj.on = function (event, callback) {
    events.event = event;
    events.callback = callback;
  };
  
  return obj;
};

/* Make an eventing system mix-in that adds .trigger() and .on() to any input object.

Example usage:
var obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function(){ // On takes an event name and a callback function
  console.log('Age changed');
});
obj.age++;
obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
Caveats:
- mixEvents should return the original object it was passed after extending it.
- If we repeatedly call .on with the same event name, it should
continue to call the old function as well. That is to say, we can have multiple
listeners for an event.
- If obj.trigger is called with additional arguments, pass those to the
listeners.
- It is not necessary to write a way to remove listeners.
*/