var sampleApp = angular.module('angApp', ['ngRoute','ngMessages']);
sampleApp.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'mainController'
            })
             .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'mainController'
            })
            .when('/page1', {
                templateUrl: 'views/page1.html',
                controller: 'page1Controller'
            })
            .when('/page2', {
                templateUrl: 'views/page2.html',
                controller: 'page2Controller'
            })
            .when('/page3', {
                templateUrl: 'contact.html',
                controller: 'ContactController'
            });
           
    });
        sampleApp.controller('mainController', function ($scope) {
            $scope.author="by Deep"
            $scope.message = 'Welcome to the Angular Practice Site';
            var json = {
                "products":
                    [
                            {
                                "sign": "fa fa-users",
                                "title": "About",
                                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur, odio at volutpat ullamcorper, turpis turpis aliquet lacus, nec semper magna dui at metus. Nunc non vehicula neque. Suspendisse potenti. Nullam ultrices imperdiet consectetur. Praesent porttitor laoreet dui et dignissim. Aenean consectetur tempor scelerisque. Mauris interdum porttitor felis varius fermentum. Suspendisse ut turpis metus",
                       
                            },

                            {
                                 "sign": "fa fa-wrench",
                                "title": "Services",
                                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur, odio at volutpat ullamcorper, turpis turpis aliquet lacus, nec semper magna dui at metus. Nunc non vehicula neque. Suspendisse potenti. Nullam ultrices imperdiet consectetur. Praesent porttitor laoreet dui et dignissim. Aenean consectetur tempor scelerisque. Mauris interdum porttitor felis varius fermentum. Suspendisse ut turpis metus",
                       
                            },
                             {
                                 "sign": "fa fa-check",
                                "title": "Satishfaction",
                                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur, odio at volutpat ullamcorper, turpis turpis aliquet lacus, nec semper magna dui at metus. Nunc non vehicula neque. Suspendisse potenti. Nullam ultrices imperdiet consectetur. Praesent porttitor laoreet dui et dignissim. Aenean consectetur tempor scelerisque. Mauris interdum porttitor felis varius fermentum. Suspendisse ut turpis metus",
                       
                            },
                             {
                                 "sign": "fa fa-legal",
                                "title": "100% Return",
                                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur, odio at volutpat ullamcorper, turpis turpis aliquet lacus, nec semper magna dui at metus. Nunc non vehicula neque. Suspendisse potenti. Nullam ultrices imperdiet consectetur. Praesent porttitor laoreet dui et dignissim. Aenean consectetur tempor scelerisque. Mauris interdum porttitor felis varius fermentum. Suspendisse ut turpis metus",
                       
                            }
                    ]
                };

            $scope.prod = json;
        });

        sampleApp.controller('page1Controller', function ($scope) {
        
            $scope.message = 'This is page1.';
            $scope.title="Meet Our Members";
            var json = {
                "members":
                    [
                            {
                                "image": "1.jpg",
                                "name": "Ramanbhai",
                                "discription1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur, odio at volutpat ullamcorper, turpis turpis aliquet lacus, nec semper magna dui at metus. Nunc non vehicula neque. Suspendisse potenti. Nullam ultrices imperdiet consectetur. Praesent porttitor laoreet dui et dignissim. Aenean consectetur tempor scelerisque. Mauris interdum porttitor felis varius fermentum. Suspendisse ut turpis metus",
                       
                            },

                            {
                                 "image": "2.jpg",
                                "name": "Maganbhai",
                                "discription1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur, odio at volutpat ullamcorper, turpis turpis aliquet lacus, nec semper magna dui at metus. Nunc non vehicula neque. Suspendisse potenti. Nullam ultrices imperdiet consectetur. Praesent porttitor laoreet dui et dignissim. Aenean consectetur tempor scelerisque. Mauris interdum porttitor felis varius fermentum. Suspendisse ut turpis metus",
                       
                            },
                             {
                                 "image": "3.jpg",
                                "name": "Ziniben",
                                "discription1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur, odio at volutpat ullamcorper, turpis turpis aliquet lacus, nec semper magna dui at metus. Nunc non vehicula neque. Suspendisse potenti. Nullam ultrices imperdiet consectetur. Praesent porttitor laoreet dui et dignissim. Aenean consectetur tempor scelerisque. Mauris interdum porttitor felis varius fermentum. Suspendisse ut turpis metus",
                       
                            },
                             {
                                 "image": "4.jpg",
                                "name": "Ramilaben",
                                "discription1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur, odio at volutpat ullamcorper, turpis turpis aliquet lacus, nec semper magna dui at metus. Nunc non vehicula neque. Suspendisse potenti. Nullam ultrices imperdiet consectetur. Praesent porttitor laoreet dui et dignissim. Aenean consectetur tempor scelerisque. Mauris interdum porttitor felis varius fermentum. Suspendisse ut turpis metus",
                       
                            }
                    ]
                };

            $scope.mem = json;
        });

        sampleApp.controller('page2Controller', function ($scope) {
                 
            $scope.message = 'This is page2.';
            var json = {
                "wonders":
                    [
                            {
                                "image": "freedom.jpg",
                                "title": "Freedom consists not in doing what we like, but in having the right to do what we ought.",
                                "discription1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur, odio at volutpat ullamcorper, turpis turpis aliquet lacus, nec semper magna dui at metus. Nunc non vehicula neque. Suspendisse potenti. Nullam ultrices imperdiet consectetur. Praesent porttitor laoreet dui et dignissim. Aenean consectetur tempor scelerisque. Mauris interdum porttitor felis varius fermentum. Suspendisse ut turpis metus",
                       
                            },

                            {
                                 "image": "hope.jpg",
                                "title": "Hope is being able to see that there is light despite all of the darkness.",
                                "discription1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur, odio at volutpat ullamcorper, turpis turpis aliquet lacus, nec semper magna dui at metus. Nunc non vehicula neque. Suspendisse potenti. Nullam ultrices imperdiet consectetur. Praesent porttitor laoreet dui et dignissim. Aenean consectetur tempor scelerisque. Mauris interdum porttitor felis varius fermentum. Suspendisse ut turpis metus",
                       
                            },
                             {
                                 "image": "dream.jpg",
                                "title": " You have to dream before your dreams can come true.",
                                "discription1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur, odio at volutpat ullamcorper, turpis turpis aliquet lacus, nec semper magna dui at metus. Nunc non vehicula neque. Suspendisse potenti. Nullam ultrices imperdiet consectetur. Praesent porttitor laoreet dui et dignissim. Aenean consectetur tempor scelerisque. Mauris interdum porttitor felis varius fermentum. Suspendisse ut turpis metus",
                       
                            },
                             {
                                 "image": "smile.jpg",
                                "title": "A smile is the light in your window that tells others that there is a caring, sharing person inside.",
                                "discription1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur, odio at volutpat ullamcorper, turpis turpis aliquet lacus, nec semper magna dui at metus. Nunc non vehicula neque. Suspendisse potenti. Nullam ultrices imperdiet consectetur. Praesent porttitor laoreet dui et dignissim. Aenean consectetur tempor scelerisque. Mauris interdum porttitor felis varius fermentum. Suspendisse ut turpis metus",
                       
                            }
                    ]
                };

            $scope.won = json;
        });
  sampleApp.controller('todoListCtrl', function ($scope) {
             var todoList = this;
            todoList.todos = [
              {text:'learn Basics of angular', done:true},
              {text:'build an angular app', done:false}];
 
            todoList.addTodo = function() {
              todoList.todos.push({text:todoList.todoText, done:false});
              todoList.todoText = '';
            };
 
            todoList.remaining = function() {
              var count = 0;
              angular.forEach(todoList.todos, function(todo) {
                count += todo.done ? 0 : 1;
              });
              return count;
            };
 
            todoList.archive = function() {
              var oldTodos = todoList.todos;
              todoList.todos = [];
              angular.forEach(oldTodos, function(todo) {
                if (!todo.done) todoList.todos.push(todo);
              });
            };
  
  });
  sampleApp.controller('ContactController', function ($scope, $http) {
      alert("Controller Attached");
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                    alert("Hi");
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed :( Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }
});