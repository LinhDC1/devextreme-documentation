//<!--@Knockout-->
var myViewModel = {
    menuItems: [
        { text: 'Increase' },
        {
            text: 'Share',
            items: [
                { text: 'Send to a friend' },
                { text: 'Send to a group' }]
        },
        { text: 'Download' },
        { text: 'Comment' },
        { text: 'Favorite' }
    ]
};
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.menuItems = [
        { text: 'Increase' },
        {
            text: 'Share',
            items: [
                { text: 'Send to a friend' },
                { text: 'Send to a group' }]
        },
        { text: 'Download' },
        { text: 'Comment' },
        { text: 'Favorite' }
    ]
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var menuItems = [
    { text: 'Increase' },
    {
        text: 'Share',
        items: [
            { text: 'Send to a friend' },
            { text: 'Send to a group' }]
    },
    { text: 'Download' },
    { text: 'Comment' },
    { text: 'Favorite' }
];
$("#contextMenu1").dxContextMenu({
    dataSource: menuItems,
    target: '#contextMenuTarget1'
});
$("#contextMenu2").dxContextMenu({
    dataSource: menuItems,
    target: '#contextMenuTarget2',
    cssClass: 'customClass'
});
//<!--/@jQuery-->