import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "../headers/user-info.model";

@Injectable({providedIn: 'root'})
export class UserInforService {
    private baseUrl: string = 'https://mlb-app-7942f-default-rtdb.firebaseio.com/';
    private myInfoEndPoint: string = 'my-info.json';
    constructor(private http: HttpClient) {

    }
    getUserInfo(){
        console.log(this.baseUrl + this.myInfoEndPoint);
        return this.http.get<UserInfo>(this.baseUrl + this.myInfoEndPoint);
    }
}