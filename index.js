let calculator = document.getElementById("calculator")
let result = document.getElementById("result")
let history = document.getElementById("history")

calculator.style.position = "relative";
calculator.style.display = "grid";

result.style.gridColumn = "span 4";
result.style.height = "100px"
result.style.textAlign ="right"
result.style.border ="none"
result.style.outline = "none"
result.style.padding = "10px"
result.style.fontSize = "22px"






let operator = document.getElementsByClassName("operator")
for(let i = 0; i < operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id  == "clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id == "backspace"){
            let output=reverseNumberFormat(getOutput()).toString();
            if(output){   ///если у вывода естть значение
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            let output = getOutput()
            let history = getHistory()
            if(output == "" && history != ""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output = output== "" ? output : reverseNumberFormat(output);
                history = history + output;
                if(this.id == "="){
                    let result = eval(history)
                    printOutput(result)
                    printHistory("")
                }
                else{
                    history = history+this.id
                    printHistory(history)
                    printOutput("")
                }
            }
        }

    })
}



let number = document.getElementsByClassName("number")
for(let i = 0; i < number.length; i++){
    number[i].addEventListener('click',function(){
        let output=reverseNumberFormat(getOutput());
        if(output!=NaN){ //if output is a number
            output=output+this.id;
            printOutput(output);
        }
    });
}





function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

printHistory("9*9*9*9*9*9*9")
function getOutput(){
    return document.getElementById("output-value").innerText;
}


function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
