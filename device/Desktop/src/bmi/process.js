function kirabmi() {

//Ini bahagian declare variables
    let height = parseFloat(document.querySelector("#height").value);
  
    let weight = parseInt(document.querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  
    if (height === "" || isNaN(height))
		document.getElementById("status").innerHTML=`<p style="color:Red">Not Valid.</p>`;
    else if (weight === "" || isNaN(weight))
        document.getElementById("status").innerHTML=`<p style="color:Red">Not Valid. Weight null</p>`;
    
    else {	
//Ini bahagian proses dan output bmi
        let bmi = weight / Math.pow(height, 2);
 
        if (bmi < 18.6) 
			 document.getElementById("status").innerHTML=`<p style="color:#90ee90">Under Weight : <span>${bmi}</span></p>`;
			 
  
        else if (bmi >= 18.6 && bmi < 24.9) 
			document.getElementById("status").innerHTML=`<p style="color:Green">Normal : <span>${bmi}</span>`;
			
            
        else if (bmi >= 25 && bmi <= 30)
            document.getElementById("status").innerHTML=`<p style="color:Orange">Over Weight : <span>${bmi}</span>`;
			
  
        else document.getElementById("status").innerHTML=`<p style="color:Red">Obese : <span>${bmi}</span></p>`;
		
			
    }
}
