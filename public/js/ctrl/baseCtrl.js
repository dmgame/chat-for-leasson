let app = angular.module('chat', []);

app.controller('baseCtrl', ['$scope', 'socket',
    function ($scope, socket) {

        console.log(socket);

        $scope.message = '';
        $scope.messages = [];

        $scope.send_message = function () {
            socket.emit('chat message', $scope.message);
            console.log('send message');
        };

        socket.on('chat connection', function () {
            console.log('chat start');
            $scope.messages.push('Welcome to chat');
        });

        socket.on('chat message', function(msg){
            $scope.messages.push(msg);
        });

        socket.on('chat write_message', function(msg){
           console.log('write message');
        });

}]);