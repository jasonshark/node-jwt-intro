
app.controller('LoginCtrl', function($rootScope, $scope, user){
	$scope.userCreds = {};

	$scope.loginFields = [
		{ 
			type: 'input',
			key: 'email',
			templateOptions: {
				label: 'Email',
				type: 'email',
				placeholder: 'Valid email address',
				required: true
			}
		},
		{ 
			type: 'input',
			key: 'password',
			templateOptions: {
				label: 'Password',
				type: 'password',
				placeholder: 'Password',
				required: true
			}

		}
	];

	$scope.login = function(userCreds){
		user.login(userCreds).then(function success(res){
			// if successful, log user in
			if(res.data.success){
				$rootScope.user = res.data;
			}	
		}, function handleError(res){
			console.error('Error: ' + JSON.stringify(res.data));
		});
	};

});