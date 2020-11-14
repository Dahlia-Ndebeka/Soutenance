import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/modeles/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-listesujetad',
  templateUrl: './listesujetad.component.html',
  styleUrls: ['./listesujetad.component.scss']
})
export class ListesujetadComponent implements OnInit {

  list: Message[];

  constructor(
    private toastr : ToastrService,
    public serviceMessage : MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.serviceMessage.refreshListeAd().subscribe((data: Message[])=>{
      this.list = data;
    });

  }

  voirCom(msg : Message) : void{
    this.router.navigate(['ajoutcomad/' + msg.idSujet]);
  }

}
