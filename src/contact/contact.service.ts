/// <reference path="../../typings/tsd.d.ts" />

module OnLocation.Contact {
    export interface IContactService {
        save(contactBio: IContactBio) : void;
        getBio(contactId:number) : IContactBio;
    }

    class ContactService implements IContactService {
        static $inject = ["$http"];
        constructor(private $http:ng.IHttpService){

        }

        save(contactBio: IContactBio) : void {
            console.log(contactBio);
        }

        getBio(contactId:number): IContactBio {
            var item = new ContactBio();
            item.instructorId = contactId;
            item.shortBio = "Jabb jabb jabb jabb - HOOK";
            return item;
        }
    }

    angular.module("onlocation.contact").service("onlocation.contact.contactService", ContactService);
}