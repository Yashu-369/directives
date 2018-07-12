var app=angular.module('myApp',['ng-Route']);

app.config(function($routeProvider)
{
  $routeProvider
  .when('/', {
  templateUrl : 'index.html'
})
.when('/mytemplate.html',{
  templateUrl : 'pages/mytemplate.html'
})
.otherwise({redirectTo:'/'});
});


app.controller('myController',['$scope',function($scope)
{
 $scope.greeting='Hola!';
    $scope.submit=function(){
     var Name = $scope.username;
     var EId = $scope.email;

   }
}]);

angular.module('myApp').directive('myDirective',function()
{
  return{
    template: {{username}} <br>
    {{email}}

  };
});
