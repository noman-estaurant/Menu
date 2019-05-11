$(document).ready(function() {
    $.ajax({
        async: true,
        crossDomain: true,
        url: "http://luffy.ee.ncku.edu.tw:17785/api/menu",
        method: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data);
            var i;
            for (i = 0; i < data.result.length; i++) {
                console.log(data.result[i]);
                $("#main-meal").append(getMenu(data.result[i].photo, data.result[i].name, data.result[i].price));
            }
        },
        error: function(result) {
            console.log(result);
        }
    });
    $(".navigationbar .cart .added").hide();
    if (added != 0) {
        $(".navigationbar .cart .added").show();
    }

});


var added = 0;

function addCart(a) {
    $(a).animate({
        backgroundColor: "rgb(255,123,159)",
        boxShadow: "0px 3px 6px rgba(111, 65, 65, 0.5)",
        color: "white",
    }, 150).delay(150).animate({
        backgroundColor: "white",
        boxShadow: "0px 3px 6px rgba(111, 65, 65, 0.5)",
        color: "rgb(255, 123, 159)",
    }, 150);
    added = added + 1;
    if (added == 1) {
        $(".navigationbar .cart .added").text(added);
        $(".navigationbar .cart .added").transition('zoom');
    } else {
        $(".navigationbar .cart .added").transition('zoom', 50);
        $(".navigationbar .cart .added").text(added);
        $(".navigationbar .cart .added").transition('zoom');
    }


    console.log("hi");
};

function getMenu(img, name, money) {
    var s = "";
    s = s + '<div class="menu">';
    s = s + '   <div class="button">';
    s = s + '       <img src="' + img + '">';
    s = s + '       <div class="content">';
    s = s + '           <p class="title">' + name + '</p>';
    s = s + '           <p class="howmuch">$ ' + money + '</p>';
    s = s + '       </div>';
    s = s + '   </div>';
    s = s + '   <div class="add" onclick="addCart($(this))">+</div>';
    s = s + '</div>';
    console.log(s);

    return s;
}