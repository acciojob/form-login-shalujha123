let form = document.getElementById("form1")
function getFormvalue(e) {
    //Write your code here
	e.preventDefault()
	alert(form.fname.value+" "+form.lname.value)
}
