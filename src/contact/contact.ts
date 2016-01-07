/// <reference path="../../typings/tsd.d.ts" />
module OnLocation.Contact {
    interface IContact {
        title: string;
        save(): void;
    }

    interface IShareableContent {
        title: string;
        link: string;
        icon: string;
    }

    class Contact {
        //static $inject = ["$scope"];
        phone:string;
        email:string;

        share: Array<IShareableContent>;
        constructor() {
            var vm = this;

            vm.email = "post@onlocation.photo";
            vm.phone = "+47 934 28 779";

            vm.share = [
                {title: "facebook", icon:"fa fa-facebook", link:"http://www.facebook.com"},
                {title: "twitter", icon:"fa fa-twitter", link:"http://www.twitter.com"}
                ]
        }

        save(): void { }
    }

    angular.module("onlocation.contact").controller("onlocation.contact.contact", Contact);
}

