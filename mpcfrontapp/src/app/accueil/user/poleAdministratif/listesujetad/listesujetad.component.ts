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
    this.router.navigate(['voircommentaire/' + msg.idMessage]);
  }

  // supprimerMessage(msg : Message){
  //   if(confirm('Attention ce champs va être supprimé')){
  //     this.serviceMessage.deleteMessage(msg.idMessage).subscribe( u => {
  //     this.serviceMessage.refreshListe().subscribe((data: Message[])=>{
  //       this.list = data;
  //     }) ;
  //     this.toastr.warning('Suppression éffectué avec succes', 'Operation sur le sujet');
  //     });
  //   }
  // }


}
