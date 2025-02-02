import { Component } from '@angular/core';
import { SpyComponent } from "../../../core/components/spy/spy.component";
import { PasswordService } from '../../../core/services/scenario-services/password.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [SpyComponent],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.scss'
})
export class MonitorComponent {


  constructor(protected passwordService: PasswordService,
    protected router : Router,
    protected ac : ActivatedRoute
  ){

  }


  next(){
    console.log("INIASHIDBASDBkj")
    if(this.passwordService.currentIndex == 3){
      
      this.router.navigate(['../game'], {relativeTo: this.ac});
    }else{
      this.passwordService.next();
    }
  
  }
}
