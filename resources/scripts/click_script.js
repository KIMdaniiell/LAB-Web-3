window.onload = function (){
    let currentRadius = parseFloat(document.getElementsByClassName("formFieldWrapper")[2].getElementsByClassName("fieldValue")[0].innerText);
    currentRadius = Math.round(currentRadius/0.5-1);
    showGraph(currentRadius);


/**
    let canvas = document.getElementById("Canvas");

    let getOffsetTop = element => {
        let offsetTop = 0;
        while(element) {
            offsetTop += element.offsetTop;
            element = element.offsetParent;
        }
        return offsetTop;
    }

    let getOffsetLeft = element => {
        let offsetLeft = 0;
        while(element) {
            offsetLeft += element.offsetLeft;
            element = element.offsetParent;
        }
        return offsetLeft;
    }

    let canvasTopOffset = getOffsetTop(canvas)+22;
    let canvasLeftOffset = getOffsetLeft(canvas)+21;


    window.onresize = function (){
        canvasTopOffset = getOffsetTop(canvas)+22;
        canvasLeftOffset = getOffsetLeft(canvas)+21;

        console.log("[ClickScript] x0 = "+canvasLeftOffset+"  y0 = "+canvasTopOffset);
    }

    canvas.onclick = function () { clickHandler(event,canvasLeftOffset,canvasTopOffset) };
 **/
}

function showGraph(num){
    console.log("showing graph number #"+num);
    let canvas = document.getElementById("Canvas");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    let img;
    switch (num) {
        case 1:
            img = document.getElementById("Graph1");
            break;
        case 2:
            img = document.getElementById("Graph2");
            break;
        case 3:
            img = document.getElementById("Graph3");
            break;
        case 4:
            img = document.getElementById("Graph4");
            break;
        case 5:
            img = document.getElementById("Graph5");
            break;
        default :
            let currentRadius = parseFloat(document.getElementsByClassName("formFieldWrapper")[2].getElementsByClassName("fieldValue")[0].innerText);
            currentRadius = Math.round(currentRadius/0.5-1);
            showGraph(currentRadius);
            break;
    }
    context.drawImage(img,0,0,512,512);
    showAttempts(num);
}

function showAttempts(num){
    console.log("drawing dots");
    let canvas = document.getElementById("Canvas");
    let context = canvas.getContext("2d");
    //let currentRadius = parseFloat(document.getElementsByClassName("formFieldWrapper")[2].getElementsByClassName("fieldValue")[0].innerText);
    let currentRadius = (num+1)*0.5;
    console.log("current rad = "+currentRadius);
    context.strokeStyle = "#aab6c3";
    Array.from(document.getElementById("result_table").getElementsByTagName("tr")).slice(1)
        .forEach( row => {
            let rowdata = Array.from(row.getElementsByTagName("td"));
            let r = parseFloat(rowdata[2].innerText);
            let x = parseFloat(rowdata[0].innerText) ;
            let y = parseFloat(rowdata[1].innerText) ;
            let result= rowdata[3].innerText;
            x = x/r;
            y = y/r;
            if (r !== currentRadius) {
                return;
            }
            if (result === "MISS") {
                context.fillStyle = 'red';
            } else if (result === "HIT") {
                context.fillStyle = 'green';

            }
            context.beginPath();
            context.arc(255+x*200, 255-y*200, 4, 0, Math.PI * 2, false);
            context.closePath();
            context.fill();
        });
}

function clickHandler ( mouseClick, LeftOffset, TopOffset) {
    console.log("[ClickScript] X = "+(mouseClick.pageX - LeftOffset -255)/200 + "  Y = " + -(mouseClick.pageY - TopOffset-255)/200);
    console.log("[ClickScript] x0 = "+LeftOffset+"  y0 = "+TopOffset);

    let dataIsCorrect = true;
    let rAlreadyChecked = false;
    let r;

    Array.from(document.getElementsByName("R"))
        .filter( node => {
            return node.checked;
        })
        .forEach( node => {
            if (rAlreadyChecked === true) {
                document.getElementById("r_error").innerHTML="<br>Пожалуйста, выберите одно значение R";
                dataIsCorrect = false;
            } else {
                document.getElementById("r_error").innerHTML="";
                let v = validateR(node);
                dataIsCorrect = dataIsCorrect * v;
                r = node.value;
                rAlreadyChecked = true;
            }
        });
    if (rAlreadyChecked === false) {
        document.getElementById("r_error").innerHTML="<br>Пожалуйста, выберите одно значение R";
        dataIsCorrect = false;
        console.log("[ClickScript] Валидность R = " + false);
    }

    let x = ((mouseClick.pageX - LeftOffset -255)/200*r).toFixed(2);
    let y = (-(mouseClick.pageY - TopOffset-255)/200*r).toFixed(2);

    console.log("\tX равен:" + x);
    console.log("\tY равен:" + y);
    console.log("\tR равен:" + r);
    console.log("[ClickScript] Результат проверки:" + dataIsCorrect);

    if (dataIsCorrect) {
        handle(x, y, r);
        console.log("[ClickScript] POST запрос сформирован и отправлен.");
    }
}