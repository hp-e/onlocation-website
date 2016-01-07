var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var angular2_1 = require('angular2/angular2');
var nameComponent = (function () {
    function nameComponent() {
    }
    nameComponent.prototype.ngOnInit = function () { };
    nameComponent = __decorate([
        angular2_1.Component({
            selector: 'selector',
            templateUrl: 'app/name.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], nameComponent);
    return nameComponent;
})();
exports.nameComponent = nameComponent;
