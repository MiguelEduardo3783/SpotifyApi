import { AccountServiceService } from './../account-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public accountService: AccountServiceService) {
    
  }
  accesToken: string;
  clientId: string;
  clientSecret: string;

  getToken(){
    alert("Voy por el Token");
    this.accountService.getSpotifyToken(this.clientId, this.clientSecret).then(response => {
      return response.json();
    }).then(r => {
      this.accesToken = r.access_token;
      console.log(r.access_token);
    });
  }

}