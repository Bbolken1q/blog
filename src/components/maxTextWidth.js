function getTextWidth(string, font = 16) { 
    let text = document.createElement("span"); 
    document.body.appendChild(text); 

    let style = text.style

    style.font = "auto"; 
    style.fontSize = font + "px"; 
    style.height = 'auto'; 
    style.width = 'auto'; 
    style.opacity = '0';
    style.position = 'absolute'; 
    style.whiteSpace = 'no-wrap'; 
    text.textContent = string; 
 
    let width = Math.ceil(text.clientWidth); 
 
    document.body.removeChild(text);
    return width;
}

function tooLong(string, maxLength, maxWidth, font, overwrite) {
    if(!string || (!maxLength && !maxWidth)) { 
        return "";
    }
    else if(string.length === 0) {
        return "";
    }
    else {
        if(maxWidth) {
            if(string) {
                let outputText = string
                console.log(getTextWidth(outputText, font))
                while(getTextWidth(outputText, font)>maxWidth)
                {
                    outputText = outputText.slice(0, outputText.length-1)
                }
                outputText = outputText.slice(0, outputText.length-3)+"..."
                console.log(getTextWidth(outputText, font))
                return <div>{outputText}</div>
            }
        }
        else {
            if(string.length >= maxLength) {
                return string.slice(0, maxLength-3)+"..."
            }
            else {
                return string.slice(0, maxLength)
            } 
        }
    }
    
}

export default tooLong