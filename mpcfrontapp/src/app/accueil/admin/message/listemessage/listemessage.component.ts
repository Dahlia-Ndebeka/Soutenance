import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/modeles/message.model';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'src/app/services/message.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listemessage',
  templateUrl: './listemessage.component.html',
  styleUrls: ['./listemessage.component.scss']
})
export class ListemessageComponent implements OnInit {

  list: Message[];

  constructor(
    private toastr : ToastrService,
    public serviceMessage : MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.serviceMessage.refreshListe().subscribe((data: Message[])=>{
      this.list = data;
    });

  }

  editerMessage(msg : Message) : void{
    this.router.navigate(['editermessage/' + msg.idSujet]);
  }

  supprimerMessage(msg : Message){
    if(confirm('Attention ce champs va être supprimé')){
      this.serviceMessage.deleteMessage(msg.idSujet).subscribe( u => {
      this.serviceMessage.refreshListe().subscribe((data: Message[])=>{
        this.list = data;
      }) ;
      this.toastr.warning('Suppression éffectué avec succes', 'Operation sur le sujet');
      });
    }
  }

}
