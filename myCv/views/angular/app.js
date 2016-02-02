var app = angular.module('flapperNews', []);

app.controller('MainCtrl',[
	'$scope',
	function($scope){
		$scope.test = 'hello world!';
		$scope.title = '';
		$scope.link = '';
		$scope.posts = [
			{title: 'post 1', upvotes: 0},
			{title: 'post 2', upvotes: 5},
			{title: 'post 3', upvotes: 9},
			{title: 'post 4', upvotes: 21},
			{title: 'post 5', upvotes: 1},
			{title: 'post 6', upvotes: 5}
		];

		$scope.addPost = function(){
			if((!$scope.title || $scope.title === '')
				&&(!$scope.link || $scope.link === ''))
			 { return; }
			$scope.posts.push({
				title: $scope.title, 
				link: $scope.link,
				upvotes: 0
			});
			$scope.title = '';
			$scope.link = '';
		};

		$scope.incrementUpvotes = function(post){
			post.upvotes++;
		}
	}]);