$("view-tables").on("click", function(){
    $.get("/api/tables", function(data){
        console.log(data);
        if(data){
            for ( var i = 0; i < data.length; i++) {
                $("#tableNumber").text(i+1);
                $("#id").text(data[i].id);
                $("#name").text(data[i].name);
                $("#email").text(data[i].email);
                $("#phone").text(data[i].phone);
            }
        }
        else {
            $("#name").text("No one ahead of you! Make a reservation while theres still time!");
        }
    })
})