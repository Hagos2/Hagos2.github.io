// Fix the slow function to be asynchronous/non-blocking
/*function slow(callback) {
    setTimeout(function () {
        for (let i = 0; i <= 5e8; i++) {}
    }, 0)

    if (Math.random() > 0.5) {
        return callback("Error", null)
    }
    callback(null, {
        id: 12345
    })
}

function exec(fn) {
    // Complete the code here to implement chaining with callback
    let item = {};

    fn(function (err, data) {
        item.done = function (callback) {
            callback(data);
            return item;
        }
        item.fail = function (callback) {
            callback(err);
            return item;
        }

        err === null ? item.fail = function (callback) {
            return item;
        } : item.done = function (callback) {
            return item;
        };
    });

    return item;
}

exec(slow).done(function (data) {
        console.log(data);
    })
    .fail(function (err) {
        console.log("Error: " + err);
    });*/

    function slow(callback) {

        if (Math.random() > 0.5) {
            return callback("Error", null)
        }
        return callback(null, { id: 12345 })
    }
    
    function exec(fn) {
        let obj = {};
    
        fn(function (err, data) {
            obj.done = function (cb) {
                if (err === null) {
                    cb(data);
                }
                return this;
            }
            obj.fail = function (cb) {
                if (err !== null) {
                    cb(err);
                }
                return this;
            }
        });
        return obj;
    }
    
    exec(slow).done(function (data) { console.log(data); })
        .fail(function (err) { console.log("Error: " + err); });
    