var myApp=angular.module("bankApp",[]);
myApp.controller("Ctrl",function($scope,$http){
	$scope.display=function(){
		$http.jsonp("http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=bzm7bkpkkm4wghg22xdbx4vy&q="+$scope.mname+"&page_limit=1&callback=JSON_CALLBACK")
			.success(function(resp){
				$scope.image=resp.movies[0].posters.profile;	
				$scope.id=resp.movies[0].id;
				$scope.title=resp.movies[0].title;
				$scope.year=resp.movies[0].year;
				$scope.mpaa_rating=resp.movies[0].mpaa_rating;
				$scope.runtime=resp.movies[0].runtime;
				$scope.critics_consensus=resp.movies[0].critics_consensus;
				$scope.theater=resp.movies[0].release_dates.theater;	
				$scope.dvd=resp.movies[0].release_dates.dvd;	
				$scope.synopsis=resp.movies[0].synopsis;	
				
				
				 });
	/*var myurl = 'http://api.rottentomatoes.com/api/public/v1.0/movies/770672122.json';
	$http.jsonp(myurl, {
	    params: {
	        apikey: 'bzm7bkpkkm4wghg22xdbx4vy',
	        callback: 'JSON_CALLBACK'
	    }
	})
	.success(function (data) {
	    $scope.items = data;
	    });
	};
	myApp.service("custSrvc",function($http){
		this.getData=function(){
		    return $http(abc)({
		        url:abc,
		        method:"jsonp"
		    });
		};
});*/
};	
});		
		






