var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

    var addNewGame = function(gameObject) {
        var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;,
        var homeScore = parseInt(gameObj.homeTeamScore);
        var awayScore = parseInt(gameObj.opponentScore);
            if(homeScore > awayScore) {
                gameObj.won = true;
            else {
                gameObj.won = false;   
                }
            };
            this.postWins = function() {
                var posting = $http ({
                    method: 'POST',
                    url: 'url'
                    });.then(function() {
                        var status = response.status;
                    if(status === 200) {
                        var data = response.data;
                        };
                    })
                };
            };
    
    var getTeamData = function(team) {
            var deferred = $q.defer();
                console.log(deferred);
//                deferred.reject();
//                    if(true) {
//                        deferred.resolve();
//                    }
//                    else {
//                        deferred.reject();
//                    };
                var url = 'https://api.parse.com/1/classes/' + team;
                $http({
                    method: 'GET',
                    url:"url"
                });
                .then(function(data) {
                    var results = data.data.results;
                    var wins = 0;
                    var losses = 0;
                    for(var i = 0; i < results.length; i++) {
                        if(results[i].won === true) {
                            wins += 1;
                        }
                        else {
                            losses += 1;
                        };
            };
                results.win = wins;
                results.losses = losses;
                            deferred.resolve(results);
        });
            return deferred.promise;
        };
});