function HideallForm()
{
           document.getElementById("form1").style = "none"; 
           document.getElementById("form2").style = "none"; 
           document.getElementById("form2").style = "none"; 
}
 
function setForm(value) {


 var e = document.getElementById('select1');
    var selectedOption = e.options[e.selectedIndex].value;
    if(value == 'dvd'){
                document.getElementById('form1').style='display:block;';
                document.getElementById('form2').style='display:none;';
                document.getElementById('form3').style='display:none;';
            }
            else if(value == 'furniture') {

                document.getElementById('form1').style = 'display:none;';
                document.getElementById('form2').style = 'display:block;';
                document.getElementById('form3').style = 'display:none;';

            }else if(value == 'book'){
                document.getElementById('form1').style = 'display:none;';
                document.getElementById('form2').style = 'display:none;';
                document.getElementById('form3').style = 'display:block;';
            }else{
              HideallForm();
            }

}  