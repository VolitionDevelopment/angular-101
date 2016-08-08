/**
 * Created by Jackson on 8/8/16.
 */

var app = angular.module('countryApp', []);
app.controller('countryCtrl', function($scope){
    $scope.countries = [
        {
            name: "USA",
            goldMetals: 3,
            silverMetals: 5,
            bronzeMetals: 4,
            img: 'https://ssl.gstatic.com/onebox/media/sports/logos/wj9uZvn_vZrelLFGH8fnPA_48x48.png'
        },
        {
            name: "Italy",
            goldMetals: 3,
            silverMetals: 3,
            bronzeMetals: 2,
            img: 'https://ssl.gstatic.com/onebox/media/sports/logos/joYpsiaYi4GDCqhSRAq5Zg_48x48.png'
        },
        {
            name: "China",
            goldMetals: 3,
            silverMetals: 2,
            bronzeMetals: 3,
            img: 'https://ssl.gstatic.com/onebox/media/sports/logos/8Cr5Gw-79PpIX2rIEZ7Pvg_48x48.png'
        },
        {
            name: "Australia",
            goldMetals: 3,
            silverMetals: 5,
            bronzeMetals: 4,
            img: 'https://ssl.gstatic.com/onebox/media/sports/logos/jSgw5z0EPOLzdUi-Aomq7Q_48x48.png'
        }
    ]
});