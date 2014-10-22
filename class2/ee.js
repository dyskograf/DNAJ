(function(global) {
    var EE;
    if (!global.UAM) {
        global.UAM = {};
    }
    
    EE = function() {
        //store the listeners somewhere
        this.listeners = {};
    };
    
    EE.prototype.on = function(eventName, listener, context) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        
        var events = this.listeners[eventName];
        var binded = listener.bind(context);
        events.push(binded);
        
        return function() {
            var index = events.indexOf(binded);
            if (index >= 0) {
                events.splice(index, 1);
            }
        };
    };
    EE.prototype.emit = function(eventName) {
        var copied_arguments = [];
        
        for (var x = 1; x < arguments.length; x++) {
            copied_arguments.push(arguments[x]);
        }
        
        for (var item in this.listeners[eventName]) {
            this.listeners[eventName][item].apply(this, copied_arguments);
        }
    };
    // var ee = new EE();
    //
    // var removeListener = ee.on('test', function (arg1, arg2) {
    // global.console.log(arg1, arg2, this.key);
    // }, { key: 'value' });
    //
    // ee.emit('test', 1, 2); // 1, 2 value
    //
    // removeListener(); //removes my listener from the event emitter;
    //
    // ee.emit('test'); //nothing will execute
    global.UAM.EventEmitter = EE;
}(window));
