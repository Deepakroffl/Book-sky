function plusbutton() {
    $("#popupbox2").removeClass("visually-hidden");
}
function deletebutton() {
    $("#deletebtn").parent().remove();
    
}
function addclick(event) {
    event.preventDefault()
}
$("#cancelbtn").click(function (e) { 
    e.preventDefault();
    $("#popupbox2").addClass("visually-hidden");
});
$("#addbtn").click(function (e) { 
    e.preventDefault();
    var creatione = document.createElement("div");
    creatione.setAttribute("class","ms-5 mt-3 bg-dark p-4 w-25 rounded added");
    creatione.setAttribute("id","bookadding")
    creatione.innerHTML=`<h3 class="text-danger">${booktitleinput.value}</h3>
                <hr class="text-light">
                <h5 class="text-warning">${bookauthor.value}</h5>
                <p class="text-light text-start fw-normal">${paratext.value}</p>
                <button class="btn btn-primary btn-sm" id="deletebtn" onclick="deletebutton()">Delete</button>`
    $(".containerbook").append(creatione);
    $("#popupbox2").addClass("visually-hidden");
});

