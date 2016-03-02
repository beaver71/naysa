var naysa = angular.module('naysa', ['ui.router']);

naysa
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){      
        
        $stateProvider
            .state('index', {
                url:'/home',
                views: {
                        'viewSlider' : {
                            templateUrl: "partials/slider.html"
                        },
                        'viewNav' : {
                            templateUrl: "partials/navigation.html"
                        },
                        'viewAbout' : {
                            templateUrl: "partials/about.html"
                        },
                        'viewPartners' : {
                            templateUrl: "partials/partners.html"
                        },
                        'viewMap' : {
                            templateUrl: "partials/googleMap.html"
                        },
                        'viewFooter' : {
                            templateUrl: "partials/footer.html"
                        }
                    }
            })            
            .state('about', {
                url:'/about',
                views: {
                        'viewSlider' : {
                            templateUrl: "partials/slider.html"
                        },
                        'viewNav' : {
                            templateUrl: "partials/navigation.html"
                        },
                        'viewAbout' : {
                            templateUrl: "partials/about.html"
                        },
                        'viewPartners' : {
                            templateUrl: "partials/partners.html"
                        },
                        'viewMap' : {
                            templateUrl: "partials/googleMap.html"
                        },
                        'viewFooter' : {
                            templateUrl: "partials/footer.html"
                        }
                    }
            })
            .state('contentProvider', {
                url: '/contentProvider',
                views: {
                    'viewNav' : {
                        templateUrl: "partials/navigation.html"
                    },
                    'viewContentProvider' : {
                        templateUrl: "partials/contentProvider.html"
                    },
                    'viewFooter' : {
                        templateUrl: "partials/footer.html"
                    }
                }   
            })
            .state('mobileOperator', {
                url: '/mobileOperator',
                views: {
                    'viewNav' : {
                        templateUrl: "partials/navigation.html"
                    },
                    'viewMobileOperator' : {
                        templateUrl: "partials/mobileOperator.html"
                    },
                    'viewFooter' : {
                        templateUrl: "partials/footer.html"
                    }
                }   
            })
            .state('contentExpertise', {
                url: '/contentExpertise',
                views: {
                    'viewNav' : {
                        templateUrl: "partials/navigation.html"
                    },
                    'viewcontentExpertise' : {
                        templateUrl: "partials/contentExpertise.html"
                    },
                    'viewFooter' : {
                        templateUrl: "partials/footer.html"
                    }
                }   
            })
            .state('contentExpertise/glamour', {
                url: '/contentExpertise/glamour',
                views: {
                    'viewNav' : {
                        templateUrl: "partials/navigation.html"
                    },
                    'viewglam' : {
                        templateUrl: "partials/glam.html"
                    },
                    'viewFooter' : {
                        templateUrl: "partials/footer.html"
                    }
                }   
            })
            .state('contentExpertise/astro', {
                url: '/contentExpertise/astrology',
                views: {
                    'viewNav' : {
                        templateUrl: "partials/navigation.html"
                    },
                    'viewastro' : {
                        templateUrl: "partials/astro.html"
                    },
                    'viewFooter' : {
                        templateUrl: "partials/footer.html"
                    }
                }   
            })
            .state('contentExpertise/games', {
                url: '/contentExpertise/games',
                views: {
                    'viewNav' : {
                        templateUrl: "partials/navigation.html"
                    },
                    'viewgames' : {
                        templateUrl: "partials/games.html"
                    },
                    'viewFooter' : {
                        templateUrl: "partials/footer.html"
                    }
                }   
            })
            .state('contentExpertise/app', {
                url: '/contentExpertise/applications',
                views: {
                    'viewNav' : {
                        templateUrl: "partials/navigation.html"
                    },
                    'viewapp' : {
                        templateUrl: "partials/applications.html"
                    },
                    'viewFooter' : {
                        templateUrl: "partials/footer.html"
                    }
                }   
            })
            .state('contact', {
                url: '/contactUs',
                views: {
                    'viewNav' : {
                        templateUrl: "partials/navigation.html"
                    },
                    'viewcontactUs' : {
                        templateUrl: "partials/contactUs.html"
                    },
                    'viewMap' : {
                        templateUrl: "partials/googleMap.html"
                    },
                    'viewFooter' : {
                        templateUrl: "partials/footer.html"
                    }
                }   
            })
            
        $urlRouterProvider.otherwise('/home');
        
    }]); 


    
  
