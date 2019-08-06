const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const textElement=document.getElementById("text");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateweb);


const database=firebase.database().ref();

function updateweb(event){
     event.preventDefault();
      const username        = usernameElement.value;
       const message         = messageElement.value;
        const text            =textElement.value;

      usernameElement.value = "";
  messageElement.value  = "";
          textElement.value     = "";

    console.log(username + " : " + message + " : " + text);

    //Update database here
const value={
    NAME:username,
    MESSAGE:message,
    TEXT:text


};
database.push(value);
}


// Set database "child_added" event listener here
database.on("child_added", addMessageToBoard)
const messageContainer=document.querySelector(".allMessages")
// document.querySelector("#submitButton").addEventListener("click",updateDB);

function addMessageToBoard(rowData){
    const row=rowData.val()
    const name= row.NAME
    const message=row.MESSAGE
    const text=row.TEXT
    
    const pElement=document.createElement("p")
    pElement.innerText=`${name}: ${message} ${text}`
    messageContainer.appendChild(pElement)


}




