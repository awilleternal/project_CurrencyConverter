let ur = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown = document.querySelectorAll(".dropdown select");
const f=document.querySelector(".from select");
const t=document.querySelector(".to select");
const btn = document.querySelector("button");

const msg=document.querySelector(".msg");
console.log(dropdown)

for (let s of dropdown) {
    for (c in cl) {
        let no = document.createElement("option");
        no.innerText = c;
        no.value = c;
        if (s.name == "from" && c == "USD") {
            no.selected = "selected";
        }
        if (s.name == "to" && c == "INR") {
            no.selected = "selected";
        }
        s.append(no);


    }
    s.addEventListener("change", (evt) => {
        updateflag(evt.target);
    })
}
const updateflag = (ele) => {
    let c = ele.value;
   
    let newsrc = `https://flagsapi.com/${cl[c]}/flat/64.png`;
    let img = ele.parentElement.querySelector("img");
    img.src = newsrc;


}

const u=async (e)=>{
    let a=document.querySelector("input");
    let x=a.value;
    console.log(x,1);
    if(x<1 || x===""){
        a.value="1";
        x=1;

    }
    console.log(f.value.toLowerCase())
    let url=`${ur}/${f.value.toLowerCase()}/${t.value.toLowerCase()}.json`;

    let re=await fetch(url);
    let re1=await re.json();
    let x1=re1[t.value.toLowerCase()];
    let fi=a.value*x1;

    console.log(x1);
    msg.innerText=`${x} ${f.value}=${fi} ${t.value}`

}
btn.addEventListener("click",  (e) => {
    e.preventDefault();
    u();
    


})
window.addEventListener("load",()=>{
    u();
})
