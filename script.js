let addingcontainer = document.getElementById("adding");
let input = document.getElementById("entry");
let submitBtn = document.getElementById("submiting");
let audioelement=null;

submitBtn.onclick = function(event) {
    addingcontainer.textContent="";
    let valueOfGiven = input.value;

    if (!isNaN(valueOfGiven) && Number.isInteger(parseFloat(valueOfGiven))) {
        let sum = 0;
        for (let i = 0; i < valueOfGiven.length; i++) {
            sum += parseInt(valueOfGiven.charAt(i), 10);
        }

        if (sum === 7) {
            let headingelement=document.createElement("h2");
            headingelement.textContent="Thala For A Reason"
            headingelement.classList.add("success");
            addingcontainer.appendChild(headingelement);
            let imageElement = document.createElement("img");
            imageElement.src = "successgif.gif";
            imageElement.classList.add("dhoniimage");
            addingcontainer.appendChild(imageElement);
            if(audioelement ===null){
                audioelement=new Audio("Bole-Jo-Koyal-Bago-Me (mp3cut.net).mp3");
                audioelement.play();
            }
            else{
                audioelement.pause();
                audioelement.src="Bole-Jo-Koyal-Bago-Me (mp3cut.net).mp3";
                audioelement.play();
            }
            addingcontainer.classList.add("celebration");
        }
        else{
            let headingelement=document.createElement("h2");
            headingelement.textContent="No Thala For You"
            headingelement.classList.add("notsuccess");
            addingcontainer.appendChild(headingelement);
            let imageElement = document.createElement("img");
            imageElement.src = "failuregif.gif";
            imageElement.classList.add("not-success");
            addingcontainer.appendChild(imageElement);
            if(audioelement===null){
                audioelement=new Audio("Moye-Moye(PaglaSongs (mp3cut.net).mp3");
                audioelement.play();
            }
            else{
                audioelement.pause();
                audioelement.src="Moye-Moye(PaglaSongs (mp3cut.net).mp3";
                audioelement.play();

            }
        }
    }
    else{
        if(valueOfGiven.length===7){
            let headingelement=document.createElement("h2");
            headingelement.textContent="Thala For A Reason"
            headingelement.classList.add("success");
            addingcontainer.appendChild(headingelement);
            let imageElement = document.createElement("img");
            imageElement.src = "successgif.gif";
            imageElement.classList.add("dhoniimage");
            addingcontainer.appendChild(imageElement);
            addingcontainer.classList.add("celebration");
            if(audioelement ===null){
                audioelement=new Audio("Bole-Jo-Koyal-Bago-Me (mp3cut.net).mp3");
                audioelement.play();
            }
            else{
                audioelement.pause();
                audioelement.src="Bole-Jo-Koyal-Bago-Me (mp3cut.net).mp3";
                audioelement.play();
            }
        }
        else{
            let headingelement=document.createElement("h2");
            headingelement.textContent="No Thala For A Reason"
            headingelement.classList.add("notsuccess");
            addingcontainer.appendChild(headingelement);
            let imageElement = document.createElement("img");
            imageElement.src = "failuregif.gif";
            imageElement.classList.add("not-success");
            addingcontainer.appendChild(imageElement);
            if(audioelement===null){
                audioelement=new Audio("Moye-Moye(PaglaSongs (mp3cut.net).mp3");
                audioelement.play();
            }
            else{
                audioelement.pause();
                audioelement.src="Moye-Moye(PaglaSongs (mp3cut.net).mp3";
                audioelement.play();
            }
        }
    }
    input.value=""
}


