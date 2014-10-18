(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		//store the listeners somewhere
		this.listeners = {};
	};

	EE.prototype.on = function (eventName, listener, context) {
        this.listeners[eventName] = listener;
        var currentListenersContext = this.listeners[eventName];
        
        currentListenersContext[currentListenersContext.length] = listener;
        for (var key in context)
        {
            this.listeners.eventName.prototype.key = context.key;
        }
        
        return function() { delete this.listeners[eventName] };
	};

	EE.prototype.emit = function (eventName /*, other args...*/) {
        var currentListenersContext = this.listeners[eventName];
        
        for(var item in currentListenersContext)
        {
            item.apply(arguments);   
        }
	};

//	var ee = new EE();
//
//	var removeListener = ee.on('test', function (arg1, arg2) {
//		console.log(arg1, arg2, this.key);
//	}, { key: 'value' });
//
//	ee.emit('test', 1, 2); // 1, 2 value
//
//	removeListener(); //removes my listener from the event emitter;
//
//	ee.emit('test'); //nothing will execute

	global.UAM.EventEmitter = EE;

}(window));
