// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('App', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tabs', {
            url: '/tabs',
            abstract: true,
            templateUrl: 'view/tabs/tabs.html'
        })
        .state('tabs.person', {
            url: '/person',
            views: {
                'person-tab': {
                    templateUrl: 'view/person/person.html',
                    controller: 'PersonController'
                }
            }
        })
        .state('tabs.performancem', {
            url: '/person/:chatId',
            views: {
                'performancem-tab': {
                    templateUrl: 'view/performancem/performancem.html',
                    controller: 'PerformancemController'
                }
            }
        })
        .state('tabs.performanceh', {
            url: '/performanceh',
            views: {
                'performanceh-tab': {
                    templateUrl: 'view/performanceh/performanceh.html',
                    controller: 'PerformancehController'
                }
            }
        });

    $urlRouterProvider.otherwise('/tabs/person');
})

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.factory('Chats', function() {
    var chats = [{
        id: 0,
        name: 'Mr Ying',
        text: ' ',
        face: 'img/ionic.png'
    }, {
        id: 1,
        name: 'Mr Huang',
        text: ' ',
        face: 'img/ionic.png'
    }];

    var performs = [{
        id: 0,
        month: '2016年10月11日',
        perf: '22,125,600元'
    }, {
        id: 0,
        month: '2016年10月25日',
        perf: '223,315,600元'
    }, {
        id: 1,
        month: '2016年10月27日',
        perf: '1,128,000元'
    }];

    return {
        //返回人员信息
        all: function() {
            return chats;
        },
        remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        },

        //返当月回业绩信息
        allpf: function() {
            return performs;
        },
        getpf: function(chatId) {
            var ppf = [];
            for (var j = 0; j < performs.length; j++) {
                if (performs[j].id === parseInt(chatId)) {
                    ppf.push(performs[j]);
                }
            }
            return ppf;
        }
    };
});