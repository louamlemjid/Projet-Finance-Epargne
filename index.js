class tableaux{
    constructor(){
        this.table=[];
        this.solde=0;
    }
    Ajout(Object){
        this.table.push(Object);
    }
    Afficher(){
        return this.table;
    }
}

class compteEpargne {
    constructor(dateValeur, dateOperation,operationDebit,operationCredit,nombreJour,taux,interet,sol) {
        this.dateValeur=dateValeur;
        this.dateOperation=dateOperation;
        this.operationDebit=operationDebit;
        this.operationCredit=operationCredit;
        this.nombreJour=nombreJour;
        this.taux=taux;
        this.interet=interet;
        this.ouvertureCompte="01/31/2023";
        this.sol=sol;
    }
    Debit(){
        let date=new Date();
        let day=date.getDate();
        let month=date.getMonth()+1;
        let year=date.getFullYear();
        let dateF=month+"/"+day+"/"+year;
        date=new Date(dateF);
        date.setDate(date.getDate()-7);
        let day2=date.getDate();
        let month2=date.getMonth()+1;
        let year2=date.getFullYear();
        let dateE=month2+"/"+day2+"/"+year2;
        return dateE;
    }
    Credit(){
        let date=new Date();
        let day=date.getDate();
        let month=date.getMonth()+1;
        let year=date.getFullYear();
        let dateF=month+"/"+day+"/"+year;
        date=new Date(dateF);
        date.setDate(date.getDate()+7);
        let day2=date.getDate();
        let month2=date.getMonth()+1;
        let year2=date.getFullYear();
        let dateE=month2+"/"+day2+"/"+year2;
        return dateE;
    }
    NombreJour(){
        let d1=new Date(this.dateValeur);
        if(list.Afficher().length<=1  ){var d2=new Date(this.ouvertureCompte)}
        else{var d2=new Date(list.Afficher()[list.Afficher().length-2].dateValeur)}
        console.log(this.dateValeur,this.ouvertureCompte);
        console.log((d1.getTime()-d2.getTime())/(1000*3600 * 24))
        return (d1.getTime()-d2.getTime())/(1000*3600 * 24);
    }
}
//louam lemjid II1
var list=new tableaux();
document.getElementsByTagName("button")[0].addEventListener("click",function Add(){
    const inp=document.getElementById('operation').value;
    if(Number(inp)<0 && Number(inp)-list.solde<0){document.getElementsByTagName("span")[0].style.opacity=1}
    else{
        document.getElementsByTagName("span")[0].style.opacity=0
        const taux=document.getElementById('taux').value;
        console.log(Number(inp));
        
        if (Number(inp)>=0){
            let date=new Date();
            date.setDate(date.getDate());
            let day=date.getDate();
            let month=date.getMonth();
            let year=date.getFullYear();
            let today=month+"/"+day+"/"+year;
            list.Ajout(new compteEpargne());
            list.solde+=Number(inp);
            list.Afficher()[list.Afficher().length-1].sol=list.solde;
            list.Afficher()[list.Afficher().length-1].operationCredit=Number(inp);
            list.Afficher()[list.Afficher().length-1].taux=taux;
            list.Afficher()[list.Afficher().length-1].dateOperation=today;
            list.Afficher()[list.Afficher().length-1].dateValeur=list.Afficher()[list.Afficher().length-1].Credit();
            list.Afficher()[list.Afficher().length-1].nombreJour=list.Afficher()[list.Afficher().length-1].NombreJour();
            list.Afficher()[list.Afficher().length-1].interet=list.Afficher()[list.Afficher().length-1].nombreJour*taux*list.solde/36000;
        }
        else {
            let date=new Date();
            date.setDate(date.getDate());
            let day=date.getDate();
            let month=date.getMonth();
            let year=date.getFullYear();
            let today=month+"/"+day+"/"+year;
            list.Ajout(new compteEpargne());
            list.solde+=Number(inp);
            list.Afficher()[list.Afficher().length-1].sol=list.solde;
            list.Afficher()[list.Afficher().length-1].taux=taux;
            list.Afficher()[list.Afficher().length-1].operationDebit=Number(inp);
            list.Afficher()[list.Afficher().length-1].dateOperation=today;
            list.Afficher()[list.Afficher().length-1].dateValeur=list.Afficher()[list.Afficher().length-1].Debit();
            list.Afficher()[list.Afficher().length-1].nombreJour=list.Afficher()[list.Afficher().length-1].NombreJour();
            list.Afficher()[list.Afficher().length-1].interet=list.Afficher()[list.Afficher().length-1].nombreJour*taux*list.solde/36000;
        }
        //boucle for
            var row = document.createElement("TR");
            
            var doCell  = document.createElement("TD");
            var dvCell  = document.createElement("TD");
            var opdCell = document.createElement("TD");
            var ocCell  = document.createElement("TD");
            var sCell   = document.createElement("TD");
            var nbjCell = document.createElement("TD");
            var iCell   = document.createElement("TD");
            var tvCell  = document.createElement("TD");

            row.appendChild(doCell);
            row.appendChild(dvCell);
            row.appendChild(opdCell);
            row.appendChild(ocCell);
            row.appendChild(sCell);
            row.appendChild(nbjCell);
            row.appendChild(iCell);
            row.appendChild(tvCell);
            

            var dop  = document.createTextNode(list.Afficher()[list.Afficher().length-1].dateOperation);
            var dv  = document.createTextNode(list.Afficher()[list.Afficher().length-1].dateValeur);
            var opd = document.createTextNode(list.Afficher()[list.Afficher().length-1].operationDebit);
            var oc = document.createTextNode(list.Afficher()[list.Afficher().length-1].operationCredit);
            var s   = document.createTextNode(list.Afficher()[list.Afficher().length-1].sol);
            var nbj = document.createTextNode(list.Afficher()[list.Afficher().length-1].nombreJour);
            var int = document.createTextNode(list.Afficher()[list.Afficher().length-1].interet);
            var tv = document.createTextNode(list.Afficher()[list.Afficher().length-1].taux);
            
            doCell.appendChild(dop);
            dvCell.appendChild(dv);
            opdCell.appendChild(opd);
            ocCell.appendChild(oc);
            sCell.appendChild(s);
            nbjCell.appendChild(nbj);
            iCell.appendChild(int);
            tvCell.appendChild(tv);
            row.classList.add("table-warning");
            document.getElementsByClassName('table-group-divider')[0].appendChild(row);
        //}
    }
    
});