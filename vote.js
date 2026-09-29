function vote(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var Answer=document.getElementById("Answer");
    if(age>=18){
        Answer.innerHTML=name+" are eligible to vote";
    }
    else{
        Answer.innerHTML=name+" are not eligible to vote";
    }
}