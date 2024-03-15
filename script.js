const input=document.querySelector('#input')
const button=document.querySelector('.btn')
const container=document.querySelector('.container');



const generateWord=(n)=>{
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let word="";
    for(let i=0;i<n;i++){
        let random=(Math.random()*25).toFixed(0);
        word+=letters[random];
    }
   return word;
}

let num;
const generatePara=()=>{
   num=input.value;
   
    if(num>0){
        const para = document.createElement('p');
        para.setAttribute("class","paras");
        let data="";
        for(let i=0;i<num;i++){
            data+=generateWord((Math.random()*10).toFixed(0));
            data+=" ";
        }
        para.innerText=data;
        container.append(para);
    }
    else{
        alert("Enter Number of Words !")
    // const para = document.createElement('p');
    // para.setAttribute("class","paras"); 
}

}





button.addEventListener('click',generatePara);
