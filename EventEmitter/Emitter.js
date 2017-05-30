function Emitter() {
    this.props = {}
}

Emitter.prototype.on = function(type, callback){
    this.props[type] = this.props[type] || [];
    this.props[type].push(callback);
}

Emitter.prototype.emit = function(type){
    if(this.props[type]){
        this.props[type].forEach(function(callback){
            callback();
        });
    }
}

module.exports = Emitter;
