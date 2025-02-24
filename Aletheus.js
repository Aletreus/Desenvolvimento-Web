/*var x = "ai";
var qcna = [1,4,7,5,99];
qcna[5] = 3;
if(x == "ai"){
    x = "gorn pay"
}
else{
    x = "Pub Horn"
}
while(x = "gorn pay"){ //Repetição
    x = "Ai"
}
for(c = 0; c < 10; c++){
    console.log(c)
    
}*/
//console.log('I ghost the down cool!.');

var lista = [3, 8, 5, 9 ,2];
var auxiliar;
for(var c = 0; c < lista.length; c++){
    for(var n = 0; n < lista.length; n++){
        if(lista[n] > lista[n + 1]){
            auxiliar = lista[n]
            lista[n] = lista[n+ 1]
            lista[n + 1] = auxiliar
        }
    }
}
document.write(lista)

