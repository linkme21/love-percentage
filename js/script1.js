function love() {
    var first_name =document.getElementById("firstname").value
    var lovername =document.getElementById("lovername").value
    // var total=
    var total= ( first_name.length * first_name.length )+
    (lovername.length * lovername.length)*Math.floor(Math.random()*9)
    if (total>100) {
        total=95
    }
    if (total) {
        console.log("kjhk");
        document.getElementById("notice").innerHTML = ` نسبه حب ${first_name} ♥️ ${lovername} %${total} `

    }else{
        alert("404")
    }
}
function resetfunction() {
    document.getElementById("firstname").value=" "
    document.getElementById("lovername").value=" "
    document.getElementById("notice").innerHTML=" "
}