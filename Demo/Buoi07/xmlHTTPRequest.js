function showUserList(){
    const response = new XMLHttpRequest()
    // When send a request and receive response from server
    response.onload = function(){
        // checking error
        if(response.status ==200 && response.readyState == 4){
            // responseText = string response from server
            const userRes = JSON.parse(response.responseText);
           
            let htmls = userRes.data.map((user)=>(
                `
                <div class="col-md-3 mb-3">
                    <div class="card">
                        <img src="${user.avatar}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                            <p class="card-text">${user.email}</p>
                        </div>
                        <div class='card-footer'>
                            <button class='btn btn-sm btn-dark' onclick='showDetailUser(${user.id})'>View</button>
                        </div>
                    </div>
                </div>
                `
            ) )
            document.getElementById('userList').innerHTML =htmls.join('');
        }
    }
    // config a request before send
    response.open("GET","https://reqres.in/api/users")
    response.send();
}

function showDetailUser(userId){
    const response = new XMLHttpRequest();

    response.onload = function(){
        if(response.status == 200 && response.readyState == 4){
            // console.log(response.responseText);
            const userRes = JSON.parse(response.responseText)
            $('#user-avatar').attr("src",userRes.data.avatar);
            $('#user-name').html(`${userRes.data.first_name}${userRes.data.last_name}`)
            $('#user-email').html(`${userRes.data.email}`);
            $('#user-detail').modal("show");

        }
        else{
            alert('Something went wrong,please contact administrator!')
        }
    }
    response.open("GET",`https://reqres.in/api/users/${userId}`);
    response.send();
}

// JSON.stringtify()   => convert object to json
// JSON.parse()    => convert json to object