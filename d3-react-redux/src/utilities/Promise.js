class Promise {
    constructor(promiseFunc) {
        this.promiseFunc = promiseFunc;
    }

    then(functionToExecute) {
        const data = this.promiseFunc();
        functionToExecute(data);
    }
}

export default Promise;