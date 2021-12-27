let h1 = document.createElement("h1");
h1.setAttribute("id","title");
h1.innerText = "DOM";
document.body.append(h1);

let p1 = document.createElement("p");
p1.setAttribute("id" , "description");
p1.innerText = "DOM MANIPULATION WITH FORMS";
document.body.append(p1);

let form1 = document.createElement("form");
form1.setAttribute("id" , "form");

document.body.append(form1);


var div1 = document.createElement("div");
div1.setAttribute("class", "form-group");
div1.classList.add("container")
form1.appendChild(div1);

/* first name */
let fname=document.createElement("div")


fname.innerHTML="FIRST NAME: "

let fn=document.createElement("input")
fn.classList.add('form-control')
fn.setAttribute("type","text");
fn.setAttribute("placeholder","first-name")
fn.setAttribute("id","first-name")
fn.setAttribute("required" ," ");
div1.appendChild(fname).appendChild(fn)


/* last name  */
let lname=document.createElement("div")
lname.innerHTML="LAST NAME: "

let ln=document.createElement("input")
ln.classList.add("form-control")
ln.setAttribute("type","text")
ln.setAttribute("id","last-name")
ln.setAttribute("placeholder","last-name")
ln.setAttribute("required" ," ")
div1.appendChild(lname).appendChild(ln)



/* address */
let addre=document.createElement("div")
addre.innerHTML="ADDRESS: "

let add=document.createElement("textarea")
add.classList.add("form-control")
add.setAttribute("type","text")
add.setAttribute("id","address")
add.setAttribute("placeholder","address");
add.setAttribute("required" ," ");
div1.appendChild(addre).appendChild(add)



/* pincode */
let pin=document.createElement("div")
pin.innerHTML="PINCODE: "

let code=document.createElement("input")
code.classList.add("form-control")
code.setAttribute("type","text")
code.setAttribute("id","pincode")
code.setAttribute("required" ," ");
code.setAttribute("placeholder","pincode");
div1.appendChild(pin).appendChild(code)


/*  gender  */
let gen=document.createElement("div")
gen.innerHTML="GENDER: "
div1.appendChild(gen)


/* male */
let male=document.createElement("span")
male.innerText="MALE"
male.classList.add("mx-2")

let rb1=document.createElement("input")
rb1.setAttribute ("type","radio")
rb1.setAttribute("name","gender")
div1.appendChild(gen).appendChild(male).appendChild(rb1)


/* female */
let female=document.createElement("span")
female.innerText="FEMALE"

let rb2=document.createElement("input")
rb2.setAttribute ("type","radio")
rb2.setAttribute("name","gender")
div1.appendChild(gen).appendChild(female).appendChild(rb2)


/*food choice*/
let food=document.createElement("div")
food.innerHTML="FOOD: "
let br=document.createElement('br')
div1.appendChild(food).appendChild(br)


// briyani
let flex=document.createElement("div")
let cb1=document.createElement("input")
cb1.classList.add("mx-1")
let s1=document.createElement("span")
s1.innerText="BRIYANI"
s1.classList.add('mx-2')
flex.appendChild(cb1)
flex.appendChild(s1)
cb1.setAttribute("type","checkbox")
cb1.setAttribute("value","briyani")
cb1.setAttribute("id","cb1")
div1.appendChild(food).appendChild(flex).appendChild(s1)

let br1=document.createElement("br")
div1.appendChild(food).appendChild(s1).appendChild(cb1).appendChild(br1)

// idly
let cb2=document.createElement("input")
cb2.classList.add("mx-1")
let s2=document.createElement("span")
s2.innerText="IDLY"
s2.classList.add("mx-1")
flex.appendChild(cb2)
flex.appendChild(s2)
cb2.setAttribute("type","checkbox")
cb2.setAttribute("id","cb2")
cb2.setAttribute("value","idly")
food.appendChild(flex)

let br2=document.createElement("br")
div1.appendChild(food).appendChild(s2).appendChild(cb2).appendChild(br2)

// dosa
let cb3=document.createElement("input")
cb3.classList.add("mx-1")
let s3=document.createElement("span")
s3.classList.add("mx-1")
s3.innerText="DOSA"
flex.appendChild(cb3)
flex.appendChild(s3)
cb3.setAttribute("type","checkbox")
cb3.setAttribute("id","cb3")
cb3.setAttribute("value","dosa")
food.appendChild(flex)

let br3=document.createElement("br")
div1.appendChild(food).appendChild(s3).appendChild(cb3).appendChild(br3)

// rice
let cb4=document.createElement("input")
cb4.classList.add("mx-1")
let s4=document.createElement("span")
s4.innerText="RICE"
s4.classList.add("mx-1")
flex.appendChild(cb4)
flex.appendChild(s4)
cb4.setAttribute("type","checkbox")
cb4.setAttribute("id","cb4")
cb4.setAttribute("value","rice")
food.appendChild(flex)

let br4=document.createElement("br")
div1.appendChild(food).appendChild(s4).appendChild(cb4).appendChild(br4)

// chapathi
let cb5=document.createElement("input")
let s5=document.createElement("span")
s5.innerText="CHAPATHI"
flex.appendChild(cb5)
flex.appendChild(s5)
cb5.setAttribute("type","checkbox")
cb5.setAttribute("id","cb5")
cb5.setAttribute("value","chapathi")
food.appendChild(flex)

let br5=document.createElement("br")
div1.appendChild(food).appendChild(s5).appendChild(cb5).appendChild(br5)



/* state */
let tamil=document.createElement("div")
tamil.innerText="STATE: "
div1.appendChild(tamil)

let nadu =document.createElement("input")
nadu.classList.add("form-control")
nadu.setAttribute("type","text")
nadu.setAttribute("id","state")
tamil.appendChild(nadu)



/* country*/
let coun=document.createElement("div")
coun.innerText="COUNTRY: "
div1.appendChild(coun)

let cotry =document.createElement("input")
cotry.classList.add("form-control")
cotry.setAttribute("type","text")
cotry.setAttribute("id","country")
coun.appendChild(cotry)



/* submit */
let subm=document.createElement("input")
subm.classList.add("form-control")
subm.setAttribute("type","button")
subm.setAttribute("value","SUBMIT")
subm.setAttribute("id","submit")
subm.setAttribute("class","btn btn-primary")
div1.appendChild(subm)



/* table */
let tab=document.createElement("table");
tab.setAttribute("class" , "table");
document.body.appendChild(tab)
let thead = document.createElement("thead");
tab.appendChild(thead);
let tr1=document.createElement("tr");
thead.appendChild(tr1);
let th1=document.createElement("th")
th1.innerHTML="FIRST NAME"
tr1.appendChild(th1);
let th2=document.createElement("th")
th2.innerHTML="LAST NAME"
tr1.appendChild(th2);
let th3=document.createElement("th")
th3.innerHTML="ADDRESS"
tr1.appendChild(th3);
let th4=document.createElement("th")
th4.innerHTML="PINCODE"
tr1.appendChild(th4);
let th5=document.createElement("th")
th5.innerHTML="FOOD"
tr1.appendChild(th5);
let th6=document.createElement("th")
th6.innerHTML="STATE"
tr1.appendChild(th6);
let th7=document.createElement("th")
th7.innerHTML="COUNTRY"
tr1.appendChild(th7);

//body table
let tbody = document.createElement("tbody")
tab.appendChild(tbody)
let tr2=document.createElement("tr")
tbody.appendChild(tr2)
let tbh1 = document.createElement("td")
tbh1.setAttribute('id','tr1')
tr2.appendChild(tbh1)
let tbh2 = document.createElement("td")
tbh2.setAttribute('id','tr2')
tr2.appendChild(tbh2)
let tbh3=document.createElement("td")
tbh3.setAttribute('id','tr3')
tr2.appendChild(tbh3)
let tbh4=document.createElement("td")
tbh4.setAttribute('id','tr4')
tr2.appendChild(tbh4)
let tbh5=document.createElement("td")
tbh5.setAttribute('id','tr5')
tr2.appendChild(tbh5)
let tbh6=document.createElement("td")
tbh6.setAttribute('id','tr6')
tr2.appendChild(tbh6)
let tbh7=document.createElement("td")
tbh7.setAttribute('id','tr7')
tr2.appendChild(tbh7)


let ans=document.getElementById("submit").addEventListener('click',submitted)

function submitted()
{
    let fname_v = document.getElementById('first-name').value;
    document.getElementById('tr1').innerText=fname_v;
    let lname_v = document.getElementById('last-name').value;
    document.getElementById('tr2').innerText=lname_v;
    let addre_v = document.getElementById('address').value;
    document.getElementById('tr3').innerText=addre_v;
    let pincode_v = document.getElementById('pincode').value;
    document.getElementById('tr4').innerText=pincode_v;
    let ch1_v = document.getElementById('cb1');
    let ch2_v = document.getElementById('cb2');
    let ch3_v = document.getElementById('cb3');
    let ch4_v = document.getElementById('cb4');
    let ch5_v = document.getElementById('cb5');
   let state_v = document.getElementById('state');
   let tt=document.getElementById('tr6').innerHTML=state_v.value;
    let coun_v =document.getElementById('country').value;
    document.getElementById('tr7').innerHTML=coun_v;
    
   let l=" ";
   
   if(ch1_v.checked==true){
      let ff=document.getElementById('cb1').value;
       l=l+ff+' '
   }
   if(ch2_v.checked==true){
      let ff=document.getElementById('cb2').value;
      l=l+ff+' '
   }
   if(ch3_v.checked==true){
      let ff=document.getElementById('cb3').value;
      l=l+ff+' '
   }
   if(ch4_v.checked==true){
      let ff=document.getElementById('cb4').value;
      l=l+ff+' '
   }
   if(ch5_v.checked==true){
      let ff=document.getElementById('cb5').value;
      l=l+ff+' '
   }
   

// console.log(l)

   document.getElementById('tr5').innerHTML=l
   
   }

   

