import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/modeles/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-listesujettech',
  templateUrl: './listesujettech.component.html',
  styleUrls: ['./listesujettech.component.scss']
})
export class ListesujettechComponent implements OnInit {

  list: Message[];

  constructor(
    private toastr : ToastrService,
    public serviceMessage : MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.serviceMessage.refreshListeTech().subscribe((data: Message[])=>{
      this.list = data;
    });

  }

  voirCom(msg : Message) : void{
    this.router.navigate(['voircommentaire/' + msg.idMessage]);
  }

}
