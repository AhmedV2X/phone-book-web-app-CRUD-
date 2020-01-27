

function shwoCControls(){
    document.getElementById("creatControls").style.display="flex";
    hideUControls();

}
function hideCControls(){
    document.getElementById("creatControls").style.display="none";

}

function shwoUControls(){
    document.getElementById("updateControls").style.display="block";

}
function hideUControls(){
    document.getElementById("updateControls").style.display="none";

}

let phones=[];
 count=0;
 // let conatct={};
 let conatct=[];
function creat(){
    conatct.push(document.getElementById("conName").value);
    phones.push(document.getElementById("conNum").value)
    localStorage.setItem(
        conatct[count],
        phones[count]);
        hideCControls();


        document.getElementById("contactList").innerHTML+=
        '<div>'+count+")"+ conatct[count]+":"+
        localStorage.getItem(conatct[count])+
        '</div>';
        count++;
   
    
}

function showAllContacts(){
   // hideUControls();

    let counter=0
    document.getElementById("contactList").innerHTML="";
    while(counter<conatct.length){
        document.getElementById("contactList").innerHTML+=
        '<div>'+counter+")"+conatct[counter]+" : "+localStorage.getItem(conatct[counter])+'</div>';
        counter++;
    }

}

function update(){
    hideCControls();
    shwoUControls();
    
   localStorage.setItem
   (document.getElementById("upUserName").value,
   document.getElementById("upUserPhone").value);
   showAllContacts();
}

function delet(){

    let elemIndex=conatct.indexOf(document.getElementById("userName").value);
   let deltedItem=conatct.splice(elemIndex,1)+":"+phones.splice(elemIndex,1);
    document.getElementById("contactList").innerHTML=
    '<div>'+count+")"+ deltedItem+" "+ "was deleted"
    '</div>';
    
    localStorage.removeItem( document.getElementById("userName").value);
    //alert(conatct+" "+phones);
    count--;
    if(count<0){
        count=0;
    }

}

function deletAll(){
    hideUControls();
    document.getElementById("contactList").innerHTML=
    '';
    localStorage.clear();
    n=0;
}