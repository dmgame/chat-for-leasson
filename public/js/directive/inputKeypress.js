app.directive('inputKeypress', function (socket) {
    return function ($scope, element, attrs) {
        element.on('keyup', function () {
           socket.emit('chat write_message', true);
       });
    }
});