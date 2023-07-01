
import { Component ,EventEmitter,Input , OnChanges , OnInit, Output, SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  implements  OnInit  {
  @Input() name ='';
  @Output() voted = new EventEmitter<boolean>();
didVote = false;
  
 ngOnInit(): void {
   console.log('ngOnnit from child component')
 }
 vote(agree :boolean){
  this.voted.emit(agree);
  this.didVote = true;
 }
}
