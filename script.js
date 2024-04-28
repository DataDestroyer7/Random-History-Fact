input = document.getElementById("test");
input.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    event.preventDefault();
    document.getElementById("button").click();
  }
});
function search(){
  api = document.getElementById("test").value;
  fetch('https://api.api-ninjas.com/v1/historicalevents?year=' + api, {'headers':{'X-Api-Key':'7V+4paevgz++IS3NshUjgA==NNwDKsHV7LbJK2Gu'}})
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    if(data.length >= 1){
      document.getElementById("event").innerHTML = data[Math.floor(Math.random() * data.length)].event;
    }
    else{
      document.getElementById("event").innerHTML = "No Events in Dataset";
    }
  })
}
