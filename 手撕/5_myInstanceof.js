

const _instanceof = (target, Fn) => {
    Obj = Fn.prototype;
    while(true){
        target = target.__proto__;
        if(Obj === target) return true;
        if(target === null) return false;
    }

}