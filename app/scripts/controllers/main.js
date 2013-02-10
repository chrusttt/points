'use strict';

pointApp.controller('MainCtrl', function($scope) {
  $scope.players = [];

  $scope.addPlayer = function(){
  	$scope.players.push({name: $scope.formPlayerName, score: 0});
  	$scope.formPlayerName = "";
	};

  $scope.removePlayers = function(){
    $scope.players = _.reject($scope.players, function(player){
      return player.delete == true;
    })
  };

  $scope.incrementScore = function(player){
  	return player.score = player.score + 1;
  };

  $scope.decrementScore = function(player){
  	return player.score = player.score - 1;
  };

  $scope.getPlayerScore = function(player){
  	return player.score;
  };
});
