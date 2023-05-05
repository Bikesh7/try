import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

constructor(private service:OrderDetailsService  ){}
foodData:any;
ngOnInit():void{
  this.foodData=this.service.foodDetails

}

}

