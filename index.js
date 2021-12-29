'use strict';

const util = require('util');

const RedisSMQ = require('rsmq');

class RedisSMQPromise {

    constructor(options) {
        this.rsmq = new RedisSMQ(options);
    };

    get listQueues() {
        return util.promisify(this.rsmq.listQueues);
    };

    get changeMessageVisibility() {
        return util.promisify(this.rsmq.changeMessageVisibility);
    };

    get createQueue() {
        return util.promisify(this.rsmq.createQueue);
    };

    get setQueueAttributes() {
        return util.promisify(this.rsmq.setQueueAttributes);
    };
    
    get getQueueAttributes() {
        return util.promisify(this.rsmq.getQueueAttributes);
    };

    get deleteQueue() {
        return util.promisify(this.rsmq.deleteQueue);
    };

    get sendMessage() {
        return util.promisify(this.rsmq.sendMessage);
    };

    get receiveMessage() {
        return util.promisify(this.rsmq.receiveMessage);
    };

    get deleteMessage() {
        return util.promisify(this.rsmq.deleteMessage);
    };
    
    get popMessage() {
        return util.promisify(this.rsmq.popMessage);
    };

    get quit() {
        return util.promisify(this.rsmq.quit);
    };
}

module.exports = RedisSMQPromise;
