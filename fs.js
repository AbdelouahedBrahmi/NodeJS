var fs=require("fs");

var monDossier = "monDossier"
//Afficher le dossier courant
console.log(process.cwd());

//creer le dossier s'il n'existe
fs.mkdir(process.cwd() + "/" + monDossier,function(e){ if(!e){
    console.log("le reperoire " + monDossier + " est bien crée");

     }
    else {
    console.log("ERROR :" + monDossier + " exist deja");
    }
});


