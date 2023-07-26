
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Accept": "application/json"
    },
    body:JSON.stringify({
        name:name,
        email:email
    })
})
.then(resp=>resp.json())
.then(data=> {
    let newId=data.id
    let idElement=document.createElement("p")
    idElement.textContent=`New Id: ${newId}`
    document.body.appendChild(idElement)
})
.catch(error=> {
    let testError=document.createElement("p")
    testError.textContent=`ERROR: ${error.message}`
    document.body.appendChild(testError)
})   

}

let form=document.querySelector("#input")
  form.addEventListener("submit",function(e){
    e.preventDefault()
    let name= document.getElementById('nameId').value
    let email= document.getElementById('emailId').value;
    submitData(name,email)
  })


