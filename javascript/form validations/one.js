function validate()
{
    let email =document.getElementById('email').value

    let password =document.getElementById('password').value
    if (email == "")
    {
        console.log("test case123")
        document.getElementById('email message').innerHTML ="please enter email ID"
    }
    if(password == "")
    {
        document.getElementById('passwordmessage').interhtml = "please enter password"
    }

    return false
}