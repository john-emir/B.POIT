let url = "http://john-emir.github.io/A.POIT/"
function loadBodyPage(taskId){
    fetch(url)
    .then(function(response){
        return response.text();
    }).then(function(data){

        document.body.insertAdjacentHTML('beforeend', data);
        
    }).catch(function(error){
        alert(error);
    })

}
