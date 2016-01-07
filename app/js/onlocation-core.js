var OnLocation;
(function (OnLocation) {
    angular.module('onlocation', [
        'onlocation.contact'
    ]);
})(OnLocation || (OnLocation = {}));
var OnLocation;
(function (OnLocation) {
    var Contact;
    (function (Contact) {
        angular.module('onlocation.contact', []);
    })(Contact = OnLocation.Contact || (OnLocation.Contact = {}));
})(OnLocation || (OnLocation = {}));
var OnLocation;
(function (OnLocation) {
    var Contact;
    (function (Contact) {
        'use strict';
        var ContactBio = (function () {
            function ContactBio() {
            }
            return ContactBio;
        })();
        Contact.ContactBio = ContactBio;
        var ContactBioController = (function () {
            function ContactBioController($scope, contactService) {
                this.$scope = $scope;
                this.contactService = contactService;
                $scope.vm = this;
                this.getCurrentBio($scope.instructorId);
            }
            ContactBioController.prototype.getCurrentBio = function (instructorId) {
                this.contactBio = this.contactService.getBio(instructorId);
            };
            ContactBioController.prototype.save = function () {
                this.contactService.save(this.contactBio);
            };
            ContactBioController.$inject = ["$scope", "onlocation.contact.contactService"];
            return ContactBioController;
        })();
        angular.module("onlocation.contact").directive("cbContactBio", contactBio);
        function contactBio() {
            var directive = {
                restrict: 'E',
                scope: {
                    instructorId: '='
                },
                controller: ContactBioController,
                controllerAs: 'model',
                templateUrl: 'templates/contact.template.html'
            };
            return directive;
        }
    })(Contact = OnLocation.Contact || (OnLocation.Contact = {}));
})(OnLocation || (OnLocation = {}));
var OnLocation;
(function (OnLocation) {
    var Contact;
    (function (Contact) {
        var ContactService = (function () {
            function ContactService($http) {
                this.$http = $http;
            }
            ContactService.prototype.save = function (contactBio) {
                console.log(contactBio);
            };
            ContactService.prototype.getBio = function (contactId) {
                var item = new Contact.ContactBio();
                item.instructorId = contactId;
                item.shortBio = "Jabb jabb jabb jabb - HOOK";
                return item;
            };
            ContactService.$inject = ["$http"];
            return ContactService;
        })();
        angular.module("onlocation.contact").service("onlocation.contact.contactService", ContactService);
    })(Contact = OnLocation.Contact || (OnLocation.Contact = {}));
})(OnLocation || (OnLocation = {}));
var OnLocation;
(function (OnLocation) {
    var Contact;
    (function (Contact_1) {
        var Contact = (function () {
            function Contact() {
                var vm = this;
                vm.email = "post@onlocation.photo";
                vm.phone = "+47 934 28 779";
                vm.share = [
                    { title: "facebook", icon: "fa fa-facebook", link: "http://www.facebook.com" },
                    { title: "twitter", icon: "fa fa-twitter", link: "http://www.twitter.com" }
                ];
            }
            Contact.prototype.save = function () { };
            return Contact;
        })();
        angular.module("onlocation.contact").controller("onlocation.contact.contact", Contact);
    })(Contact = OnLocation.Contact || (OnLocation.Contact = {}));
})(OnLocation || (OnLocation = {}));
