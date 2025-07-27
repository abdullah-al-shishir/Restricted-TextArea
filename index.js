

const textArea=document.getElementById('textArea');
const charCount=document.getElementById('charCount');
const maxChars=document.getElementById('maxChars');



let maximum = 199;

const characterCount=()=>{
    const currentLength=textArea.value.length;
    charCount.textContent=currentLength;
    
    if(currentLength > maximum){
        charCount.classList.add('charCountstyle')
    }
    else{
        charCount.classList.remove('charCountstyle')
    }

}
textArea.addEventListener('input',characterCount);