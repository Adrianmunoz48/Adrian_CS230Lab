import { Component } from "@angular/core";
import { UserInfo } from "../headers/user-info.model";
import { UserInfoService } from "../user-info.service";


@Component({ 
    selector: 'MLB-edit-user-info',
    templateUrl: 'edit-user-info.component.html'
})
export class EditUserInfoComponent{

    constructor(private infoService: UserInfoService){

    }

onUpdateUserInfo(data:UserInfo){
    this.infoService.modifyUserInfo(data).subscribe(data => {
        console.log("Updated Information sent to backend");
    });
}
}