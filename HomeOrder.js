(function() {
    'use strict';

    
    let _mainTable = document.querySelector("#order_form > table > tbody");
    BlackenTexts(_mainTable);
    
    
    function BlackenTexts(mainParent) {
        var all = mainParent.getElementsByTagName("*");
    
    for (var _genericIdx = 0, max = all.length; _genericIdx < max; _genericIdx++) {
        all[_genericIdx].style.color = "black";
        all[_genericIdx].style.fontFamily = "Arial";
        all[_genericIdx].style.fontSize = '20px';   
    
    }
    
    }
    
    
    let _allChechboxes = document.getElementsByTagName("input");
    let Innad = Array.prototype.slice.call(_allChechboxes);
    
    Innad.forEach(function(chkItem, chkIdx)
    {
        if (chkItem.type==="checkbox") {
            chkItem.style.width="40px";
            chkItem.style.height="40px";
        }
    })
    
    
    let _form = document.getElementsByName("orders")[0];
    _form.style.fontSize = "20px";
    _form.style.fontWeight = "900";
    
    let _btnExport = document.getElementsByName("export");
    _btnExport[0].style.display = "none";

    let _btnExport2 = $("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > form > div:nth-child(3) > div > input:nth-child(3)");
    _btnExport2[0].style.display = "none";

    $("#bulk_sync").css("display","none");
    $("#bulk_print2").css("display","none");

    $("#bulk_sync2").css("display","none");
    $("#bulk_print3").css("display","none");

    let _colMd12 = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > form > div:nth-child(3) > div");
    let _btn_bulkUpdate = $("#bulk_update");

    _colMd12.appendChild(_btn_bulkUpdate[0]);

let _btnSearchOrder = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > form > div:nth-child(3) > div > input.btn.btn-primary");
_btnSearchOrder.innerHTML = "Search Order <i class='fa fa-bars'></i>";


})();

