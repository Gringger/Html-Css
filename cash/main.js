$(document).ready(function () {
        addItem("Сир");
        addItem("Помідори");
        addItem("Печиво");
        var $newName=$("#prodNameAdd")
        $("#add").click(function ()
        {
         let new_name=$newName.val();
         addItem(new_name);
        });


    });
function addItem(name) {
    var isBought = false;
    var quantity=1;
   var $newLeft = $("#copyThis").clone().appendTo(".bigLeft");
   var $newRight = $("#copyLeftProduct").clone().appendTo("#prodLeft");
$newLeft.addClass("copied");
$newLeft.find(".prodName").text(name);
$newRight.find("#prodLeftName").text(name);
$newLeft.find("#plus").click(function () {
   quantity+=1;
   $newLeft.find(".counter").text(quantity);
   $newRight.find("#prodLeftQuantity").text(quantity);
});
$newLeft.find("#minus").click(function () {
    if(quantity>1) {
        quantity -= 1;
        $newLeft.find(".counter").text(quantity);
        $newRight.find("#prodLeftQuantity").text(quantity);
    }
    });
$newLeft.find("#delete").click(function () {
    $newLeft.remove();
    $newRight.remove();
    }


);
$newLeft.find("#buy").click(function () {
    var $bought = $newRight.clone().appendTo("#prodBought");
    $newRight.remove();
    $bought.show();
    $newLeft.find("#plus").prop("disabled", true);
    $newLeft.find("#minus").prop("disabled", true);
    $newLeft.find("#delete").prop("disabled", true);
    $newLeft.find("#buy").prop("disabled", true);
    isBought=true;
        $newLeft.find("#buy").text("Не куплено");
});


$newLeft.removeClass("copied");
$newLeft.show();
$newRight.show();
}
