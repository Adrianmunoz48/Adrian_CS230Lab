import { Component, Injectable, OnInit } from "@angular/core";
import { UserInforService } from "../Body/user-info.service";
import { UserInfo } from "./user-info.model";

@Component({
    selector: "MLB-user-info",
    templateUrl: "user-info.component.html"
})
export class UserInfoComponent implements OnInit{
    myInfo: UserInfo | undefined;
    
    constructor(private userInforService: UserInforService){
        }
    ngOnInit(): void {
        console.log("Registering showUserInfo as a subscriber");
        this.showUserInfo();
    }

         
        showUserInfo(){
            this.userInforService.getUserInfo().subscribe((data: UserInfo) => {
                console.log(data);
                this.myInfo  = data;
            })
        }
}
