function getParagraph1(){
    var inputs = [];
    for(i=1;i<=6;i++){
        inputs.push(document.getElementById("input_"+i).value);
    }
    console.log(inputs.join(". "));
    document.getElementById("showParagraph1").style.display="inline-block";
    document.getElementById("showParagraph1").innerHTML=inputs.join(". ");
}

function getParagraph2(){
    var inputs2 = [];
    for(j=1;j<=6;j++){
        inputs2.push(document.getElementById("input"+j).value);
    }
    console.log(inputs2.join(". "));
    document.getElementById("showParagraph2").style.display="inline-block";
    document.getElementById("showParagraph2").innerHTML=inputs2.join(". ");
}