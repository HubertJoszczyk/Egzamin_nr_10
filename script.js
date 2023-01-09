function policz(){
    var wynik=document.getElementById('wynik');
    var ile=document.getElementById('liczba_gosci').value;
    var poprawiny=document.getElementById('poprawiny').checked;
    var koszt=0;
    if(poprawiny==true){
        koszt=(ile*100)*1.3;
    }
    else{
        koszt=ile*100;
    }
    wynik.innerHTML='Koszt twojego wesela to '+koszt+' złotych';







}