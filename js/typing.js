window.addEventListener('load', contentLoaded);

function contentLoaded() {
  var typeSpan = document.getElementById('type');
  var pasteSpan = document.getElementById('paste');

  var textToPaste = pasteSpan.textContent;
  pasteSpan.textContent = '';

  function pasteText(toElem, text) { 
    var ctrlv = document.getElementById('ctrlv');

    ctrlv.classList.add('show');

    setTimeout(function() {
      ctrlv.classList.remove('show');
      

      setTimeout(function() {
        toElem.textContent = text;
      }, 300);

    }, 500);
    
  }

  typeWrite(typeSpan, function() { pasteText(pasteSpan, textToPaste); });
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function typeWrite(elem, callback){
  var text = elem.textContent;
  elem.textContent = '';
  var randInt = 0
  for (var i = 0; i < text.length; i++) {
    randInt += parseInt(randomIntFromInterval(40,150));
    var typing = setTimeout(function(y){
      elem.textContent += text.charAt(y);

      if (y == text.length - 1)
        callback();
    }, randInt, i);
  };
}

