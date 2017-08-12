// app.service('socket', [function () {
//     let socket = io();
//
//     this.send_message = (message) => socket.emit('chat message', message);
//     this.writing_message = () =>  socket.emit('chat write_message', true);
//
//
// }]);

app.factory('socket', function ($rootScope) {
    let socket = io.connect();
    return {
        on: function (eventName, callback) {
            socket.on(eventName, function () {
                let args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                let args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
});