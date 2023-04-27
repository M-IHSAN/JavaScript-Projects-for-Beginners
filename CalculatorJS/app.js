

function period(){

  var expression1=formMain.Display.value
  var lastvalue=expression1.charAt(expression1.length-1);

  if (lastvalue=='+'||lastvalue=='-'||lastvalue=='/'||lastvalue=='*'||lastvalue=='%'||lastvalue=='.')
{
  formMain.Display.value=expression1.substring(0,expression1.length-1)
  formMain.Display.value+='.';
}
  else
  {
    formMain.Display.value+='.';
  }
}

function add(){

  var expression1=formMain.Display.value
  var lastvalue=expression1.charAt(expression1.length-1);

  if (lastvalue=='+'||lastvalue=='-'||lastvalue=='/'||lastvalue=='*'||lastvalue=='%'||lastvalue=='.')
{
  formMain.Display.value=expression1.substring(0,expression1.length-1)
  formMain.Display.value+='+';
}
  else
  {
    formMain.Display.value+='+';
  }
}
function sub(){

  var expression1=formMain.Display.value
  var lastvalue=expression1.charAt(expression1.length-1);

  if (lastvalue=='+'||lastvalue=='-'||lastvalue=='/'||lastvalue=='*'||lastvalue=='%'||lastvalue=='.')
{
  formMain.Display.value=expression1.substring(0,expression1.length-1)
  formMain.Display.value+='-';
}
  else
  {
    formMain.Display.value+='-';
  }
}
function mult(){

  var expression1=formMain.Display.value
  var lastvalue=expression1.charAt(expression1.length-1);

  if (lastvalue=='+'||lastvalue=='-'||lastvalue=='/'||lastvalue=='*'||lastvalue=='%'||lastvalue=='.')
{
  formMain.Display.value=expression1.substring(0,expression1.length-1)
  formMain.Display.value+='*';
}
  else
  {
    formMain.Display.value+='*';
  }
}

function div(){

  var expression1=formMain.Display.value
  var lastvalue=expression1.charAt(expression1.length-1);

  if (lastvalue=='+'||lastvalue=='-'||lastvalue=='/'||lastvalue=='*'||lastvalue=='%'||lastvalue=='.')
{
  formMain.Display.value=expression1.substring(0,expression1.length-1)
  formMain.Display.value+='/';
}
  else
  {
    formMain.Display.value+='/';
  }
}

function toggleSign() 
{
  var expression1=formMain.Display.value;
  formMain.Display.value=''

  if (expression1>=0){
    var toggle=expression1*-1;
    formMain.Display.value=toggle;
  }
  else if(expression1<0){
    formMain.Display.value=''
    var toggle1=(-1*expression1);
    formMain.Display.value=toggle1;
  }
}

  function percentage1(){
    var expression1=formMain.Display.value
    var lastvalue=expression1.charAt(expression1.length-1);
    if (lastvalue=='+'||lastvalue=='-'||lastvalue=='/'||lastvalue=='*'||lastvalue=='%'||lastvalue=='.')
{
  formMain.Display.value=expression1.substring(0,expression1.length-1)
  // formMain.Display.value+='%';
  formMain.Display.value=formMain.Display.value/100;
}
  else
  {
    formMain.Display.value=formMain.Display.value/100;
  }
  }

  
  document.addEventListener('keydown', function(event) {
    if (event.key === '1') {
      formMain.Display.value+=1
    }
    else if (event.key === '2') {
      formMain.Display.value+=2
    }
   else if (event.key === '3') {
      formMain.Display.value+=3
    }
    else if (event.key === '4') {
      formMain.Display.value+=4
    }
   else if (event.key === '5') {
      formMain.Display.value+=5
    }
   else if (event.key === '6') {
      formMain.Display.value+=6
    }
   else if (event.key === '7') {
      formMain.Display.value+=7
    }
   else if (event.key === '8') {
      formMain.Display.value+=8
    }
   else if (event.key === '9') {
      formMain.Display.value+=9
    }
   else if (event.key === '0') {
      formMain.Display.value+=0
    }
   else if (event.key === '.') {
      formMain.Display.value+='.'
    }
  });
    document.addEventListener('keypress', function(event) {
      if (event.key === '/') { 
        div();
      }
      else if (event.key === '*'){
        mult();
      }
      else if (event.key === '.'){
        period();
      }
      else if (event.key === '-'){
        sub();
      }
      else if(event.key === '+'){
        add();
      }
      else if (event.key === '%'){
        percentage1();
      }
      else if(event.key === 'Enter'){
        formMain.Display.value=eval(formMain.Display.value)
      }
      // else if(event.keyCode === 27){
      //   alert("hello)");
      //   formMain.Display.value='';
      // }
    });
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Delete' ||event.key === 'Escape') {
        formMain.Display.value='';
      }
  });
    