'use strict';

angular.module('collaborators')
  .directive('menu', function () {
    return {
      restrict: 'E',
      templateUrl: '/app/components/menu/menu.html',
      scope: {
        'allCollaborators': '=',
        'current': '=',
        'parsedResponse': '='
      },
      controller: function ($scope) {
        $scope.select = function (collaborator) {
          console.log(collaborator);
          $scope.current.collaborator = $scope.allCollaborators[collaborator];
          for(var node in $scope.parsedResponse.nodes) {
            if($scope.parsedResponse.nodes[node].fullPath===collaborator) {
              $scope.current.collaborator = $scope.parsedResponse.nodes[node];
              d3.select($scope.current.collaborator)[0][0].center = true;
              force.resume();
            }
          }
        }
      }
    }

  });
