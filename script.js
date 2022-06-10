function loadPosts(){
    document.getElementById("users").innerHTML ="Carregando..."
    fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
        return res.json();
    }).then(function(json){
        montarBlog(json);
        
    })
    .catch(function(err){
        console.log(err)
    })
}

function montarBlog(lista){
    let html= "";
    for(let i in lista){
        html+="<h3>"+lista[i].name+"</h3>";
        html+=lista[i].username +"</br>";
        html+="<hr/>";
    }
    document.getElementById("users").innerHTML = html;
}
