const msg=document.querySelector(".msg");
const guess=document.querySelector("input");
const btn=document.querySelector(".btn");
   let play=false;
let newwords="";
let randwords ="";

                
let swords= ["python"
,"javascript","hello","loop","guess","flower","bottle","air","fan","nest","sheep","play","lucky","frame","later","talk","what","ignite","swift","duster","solo","diamante","otilia","cardi","minaj"];                
                
                
                
  function createnewwords(){
    let rannum=(Math.floor(Math.random()*swords.length));
    
    let newtemswords =swords[rannum];
    return newtemswords;
}                


 function scramblewords(arr){
     for(let i=arr.length-1; i>0; i--){
         let temp=arr[i];
         console.log(temp);
         let j=Math.floor(Math.random()*(i+1));
         console.log(i);
         console.log(j);
         
         //swap
         arr[i]=arr[j];
         arr[j]=temp;
     }
     return arr;
 }



btn.addEventListener("click",function(){
    if(!play){
        play=true;
        btn.innerHTML = "GUESS";
        guess.classList.toggle('hidden');
    
        newwords= createnewwords();
  randwords = scramblewords(newwords.split("")).join("");    

        msg.innerHTML = `GUESS THE WORD : ${randwords}`;
    }else{
        let tempword = guess.value;
        if(tempword === newwords){
          play=false;
            msg.innerHTML = ` BRAVO!!!!!   YOU GUESSED IT CORRECT:)`;
            btn.innerHTML = "NEXT";
  guess.classList.toggle('hidden');
            guess.value="";
            
        }else{
            msg.innerHTML = `NAHH!!!!, GUESS AGAIN :( <br> ${randwords}`;
        }
    }
    
});
            
            
            