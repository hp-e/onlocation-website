/// <reference path="../../typings/tsd.d.ts" />
module OnLocation.Contact {
    'use strict';
    interface IContactBioScope extends ng.IScope {
        instructorId:number;
        vm:ContactBioController
    }

    export interface IContactBio {
        instructorId:number;
        shortBio:string;
    }

    export class ContactBio implements IContactBio {
        instructorId:number;
        shortBio:string;
    }

    class ContactBioController  {

        contactBio:IContactBio;

        static $inject = ["$scope", "onlocation.contact.contactService"];

        constructor(private $scope:IContactBioScope, private contactService: IContactService) {
            $scope.vm = this;
            this.getCurrentBio($scope.instructorId);
        }

        getCurrentBio(instructorId:number) {

            this.contactBio = this.contactService.getBio(instructorId);

        }

        save() {
            this.contactService.save(this.contactBio);
        }
    }

    angular.module("onlocation.contact").directive("cbContactBio", contactBio);

    //contactBio.$inject = ['ContactService'];
    function contactBio() : ng.IDirective {
        var directive = <ng.IDirective> {
            restrict: 'E',
            scope: {
                instructorId: '='
            },
            controller: ContactBioController,
            controllerAs: 'model',
            templateUrl: 'templates/contact.template.html'
        }

        return directive;
    }
}