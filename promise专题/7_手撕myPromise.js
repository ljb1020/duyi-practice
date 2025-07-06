function MyPromise(executor) {

    this.promiseState = "pending";
    this.promiseResult = null;
    this.callbacks = [];
    const self = this;
    // resolve 函数
    function resolve(data) {
        if (self.promiseState !== "pending") return;
        // 修改对象状态(promiseState)
        self.promiseState = 'fullfilled';
        // 设置对象结果值(promiseResult)
        self.promiseResult = data;
        // 调用成功的回调函数
        self.callbacks.forEach(item => {
            item.onResolved(data);
        })
    }
    // reject 函数
    function reject(data) {
        if (self.promiseState !== "pending") return;
        // 修改对象状态(promiseState)
        self.promiseState = 'rejected';
        // 设置对象结果值(promiseResult)
        self.promiseResult = data;
        // 调用失败的回调函数
        self.callbacks.forEach(item => {
            item.onRejected(data);
        })
    }

    //同步调用

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }

}

MyPromise.prototype.then = function (onResolved, onRejected) {
    return new MyPromise((resolve, reject) => {
        if (this.promiseState === 'fullfilled') {
            onResolved(this.promiseResult);
        }
        if (this.promiseState === 'rejected') {
            onRejected(this.promiseResult);
        }

        if (this.promiseState === 'pending') {
            // 保存回调函数
            this.callbacks.push({
                onResolved,
                onRejected
            })
        }
    })
}