import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  
{
  agree =0;
  disagree = 0;
  votes = ['Thien', 'NguyenDang Thien', 'IT test'];
  
  onVote(agree:boolean){
    if(agree){
      this.agree++;
    }
    else{
      this.disagree++;
    }
  }


}