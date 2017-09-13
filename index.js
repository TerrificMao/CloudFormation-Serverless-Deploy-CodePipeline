var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("Asia/Shanghai");
    callback(null, {
        statusCode: '200',
        body: 'Hello, The beijing time is: ' + currentTime.toString(),
    });
};
