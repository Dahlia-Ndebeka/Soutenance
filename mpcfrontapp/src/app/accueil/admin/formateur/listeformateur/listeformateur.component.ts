import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/modeles/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-listeformateur',
  templateUrl: './listeformateur.component.html',
  styleUrls: ['./listeformateur.component.scss']
})
export class ListeformateurComponent implements OnInit {

    list: Utilisateur[];

  constructor(
    private toastr : ToastrService,
    public serviceFormateur : UtilisateurService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceFormateur.refreshListeFormateur().subscribe((data: Utilisateur[])=>{
      this.list = data;
    })  
  }

  // editerFormateur(For : Utilisateur) : void{
  //   this.router.navigate(['editerformateur/' + For.idCompte]);
  // }

  // supprimerFormateur(For : Utilisateur){
  //   if(confirm('Attention ce champs va être supprimé')){
  //     this.serviceFormateur.deleteUtilisateur(For.idCompte).subscribe( u => {
  //       this.serviceFormateur.refreshListe().subscribe((data: Utilisateur[])=>{
  //         this.list = data;
  //       })
  //     this.toastr.warning('Suppression éffectué avec succes', 'Operation sur le formateur');
  //     });
  //   }
  // }

}
