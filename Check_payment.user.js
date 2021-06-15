// ==UserScript==
// @name         Check Payment - Sabella
// @namespace    http://tampermonkey.net/
// @version      0.2
// @author       Anis
// @description  To Tweak Order Details page
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

let _rightHeaderItemsPanel = document.querySelector("#main-wrapper > div.page-wrapper > div.row.page-titles > div.col-md-7.align-self-center");
_rightHeaderItemsPanel.remove();

let _leftItemsPanel = document.querySelector("#main-wrapper > div.page-wrapper > div.row.page-titles > div");
_leftItemsPanel.className = "align-self-center";

let _btnPrev = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > table:nth-child(1) > tbody > tr > td:nth-child(2) > a:nth-child(1)");
_btnPrev.className = 'btn btn-info';

let _btnNext = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > table:nth-child(1) > tbody > tr > td:nth-child(2) > a:nth-child(2)");
_btnNext.className = 'btn btn-success';
_btnNext.style.marginLeft = '20px';

let _emailTable = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > table:nth-child(5)");
let _hrAboveEmail = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > hr:nth-child(4)");
let _hrBelowEmail = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > hr:nth-child(6)");

let _emailID = _emailTable.childNodes[1].childNodes[0].childNodes[3].innerText;

//_emailTable.remove();
_hrAboveEmail.remove();
_hrBelowEmail.remove();

let _titleBar = document.querySelector("#main-wrapper > div.page-wrapper > div.row.page-titles");
let _tblPayment = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div.col-12 > div > div > table:nth-child(4)");
_tblPayment.style.marginLeft = '20px';

_titleBar.appendChild(_tblPayment);


let _theREALTablePayment = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div.col-12 > div > div > table:nth-child(5)");
if (_theREALTablePayment) {
    _titleBar.appendChild(_theREALTablePayment);
}


let _orderIDElem = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > h3");
let _orderID = _orderIDElem.innerText;

let _mainBlueHeader = document.querySelector("#main-wrapper > div.page-wrapper > div.row.page-titles > div > h3");
_mainBlueHeader.innerText = '';
_mainBlueHeader.classList.remove("text-primary");

let lSpacer = document.createElement("SPAN");
lSpacer.style.marginLeft = '14px';

let textnode = document.createTextNode(_orderID);

let spacer = document.createElement("SPAN");
spacer.style.marginLeft = '32px';

let emailIDText = document.createTextNode(_emailID);

function ToggleMenu(isHidden) {
    if (isHidden) {
        _homeIcon.className = 'fa fa-bars';

        let _header = document.querySelector("#main-wrapper > div.header");
        _header.style.display = 'none';
        
        let _sideBar = document.querySelector("#main-wrapper > div.left-sidebar");
        _sideBar.style.display = 'none';
        
        let _pageWrapper = document.querySelector("#main-wrapper > div.page-wrapper");
        _pageWrapper.style.marginLeft = '0px';
    } 
    else 
    {
        _homeIcon.className = 'fa fa-arrows-alt';

        // let _header = document.querySelector("#main-wrapper > div.header");
        // _header.style.display = 'initial';

        let _sideBar = document.querySelector("#main-wrapper > div.left-sidebar");
        _sideBar.style.display = 'initial';

        let _pageWrapper = document.querySelector("#main-wrapper > div.page-wrapper");
        _pageWrapper.style.marginLeft = '240px';
    }
}

let _homeBtnToggle = document.createElement('button');
_homeBtnToggle.className = 'btn';
_homeBtnToggle.type = 'button';

_homeBtnToggle.onclick = function name() {
    if (_homeIcon.className === 'fa fa-bars') {      
        ToggleMenu(false);
    } else {       
        ToggleMenu(true);
    }
}

let _homeIcon = document.createElement('i');
_homeIcon.style.fontSize = '20px';
_homeBtnToggle.appendChild(_homeIcon);
ToggleMenu(true);


_mainBlueHeader.appendChild(_homeBtnToggle);
_mainBlueHeader.appendChild(lSpacer);
_mainBlueHeader.appendChild(textnode);
_mainBlueHeader.appendChild(spacer);
_mainBlueHeader.appendChild(emailIDText);


_orderIDElem.remove();
let _orderIDHR = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > hr");
_orderIDHR.remove();

let _mainCard = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div");
_mainCard.style.margin = 0;

let _pageTitle = document.querySelector("#main-wrapper > div.page-wrapper > div.row.page-titles");
_pageTitle.style.margin = '0 0 10px';
_pageTitle.style.padding = '10px';





let _mainBody = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid");
BlackenTexts(_mainBody, true);
BlackenTexts(_titleBar, false);

function BlackenTexts(mainParent, isBody) {
    var all = mainParent.getElementsByTagName("*");

for (var _genericIdx = 0, max = all.length; _genericIdx < max; _genericIdx++) {
    all[_genericIdx].style.color = "black";

    if (isBody) {
        all[_genericIdx].style.fontFamily = "Arial";
        all[_genericIdx].style.fontSize = '20px';        
    }

}

}



let _tablesInTitleBar = _titleBar.getElementsByClassName("table-noborder-auto");


let _tblArry = Array.prototype.slice.call(_tablesInTitleBar);

_tblArry.forEach(function (tblItm, tblIDX)
{
    tblItm.style.lineHeight = '0.8';
    tblItm.style.padding = '0px';
    tblItm.style.margin = '0px';
});


let _mainFirstCard = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div.col-12 > div > div");
_mainFirstCard.parentNode.style.paddingBottom = 0;

let _mainFirstCardChildren = Array.prototype.slice.call(_mainFirstCard.childNodes);

let _tableMainArray = [];
_mainFirstCardChildren.forEach(function(mfccItm, mfccIdx){
    if (mfccItm.nodeName === "TABLE") {
        _tableMainArray.push(mfccItm);
    }
});

let _phone1 = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > table:nth-child(3) > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2)");
let _phone2 = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > table:nth-child(3) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)");

let _phoneArrays = [_phone1, _phone2];
_phoneArrays.forEach(function (pItem, pIDX) {


    let btn = document.createElement("a");
    btn.style.margin = '10px'
    btn.href = '#';
    btn.title = 'Chat in Whatsapp';


    let _img = document.createElement("img");
    _img.style.height = '32px';
    _img.class = 'img img-responsive';
    _img.src = "https://raw.githubusercontent.com/Hanzalah-Adalan/Sab/main/whatsapp.svg";

    btn.appendChild(_img);

    btn.onclick = function () {
        window.open(`https://wa.me/6${pItem.innerText}/?text=Assalamu'alaikum`);
    };

    pItem.appendChild(btn);


});

let _mainRow = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div");
let _pricingTable = document.getElementsByClassName("display nowrap table table-hover");
let _commentsStatusTable = document.getElementsByClassName("m-t-40");


let _cardBody_pricing = document.createElement('div');
_cardBody_pricing.className = 'card-body';
_cardBody_pricing.appendChild(_pricingTable[0]);

let _cardBody_comments = document.createElement('div');
_cardBody_comments.className = 'card-body';
_cardBody_comments.appendChild(_commentsStatusTable[0].childNodes[1]);


let _cardDiv_pricing = document.createElement('div');
_cardDiv_pricing.className = 'card';
_cardDiv_pricing.appendChild(_cardBody_pricing);

let _cardDiv_comments = document.createElement('div');
_cardDiv_comments.className = 'card';
_cardDiv_comments.appendChild(_cardBody_comments);

let _col_pricing = document.createElement('div');
_col_pricing.className = 'col-md-12';
_col_pricing.appendChild(_cardDiv_pricing);

let _col_comments = document.createElement('div');
_col_comments.className = 'col-md-12';
_col_comments.appendChild(_cardDiv_comments);


_mainRow.appendChild(_col_pricing);
_mainRow.appendChild(_col_comments);


let _allTR = _col_pricing.getElementsByTagName("B");
let _trArray = Array.prototype.slice.call(_allTR);

_trArray.forEach(filterTRAtPromo);

function filterTRAtPromo(_bElem, _trIndex) {
    if (_bElem.innerText.includes("-RM")) {
        _bElem.style.color = 'red';
    }
}

for (var _groupHeaderIdx = 1, maxIdx = 3; _groupHeaderIdx < maxIdx; _groupHeaderIdx++) {
    let _headerGroup = document.querySelector(`#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > table:nth-child(1) > tbody > tr > td:nth-child(${_groupHeaderIdx})`);

    var array = Array.prototype.slice.call(_headerGroup.childNodes);

    array.forEach(myFunction);

}


function myFunction(item, index) {
    if (item.nodeName === "A") {
        item.style.color = 'white';

        if (item.className === 'btn-sm btn-warning') {
            item.className = 'btn btn-warning'
        }
    }

}

let _containerFluid = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid");
_containerFluid.style.padding = '10px';

_mainFirstCard.innerHTML = "";

_tableMainArray.forEach(function(tmaItem, tmaIdx){
    if (tmaItem.className==="display nowrap table table-hover") {
        _cardBody_pricing.appendChild(tmaItem);
    }
    else
    {
        _mainFirstCard.appendChild(tmaItem);
        
        if(tmaItem.className==="table-noborder-auto"){
            tmaItem.style.marginTop = '20px';
            tmaItem.style.marginBottom = '0px';

            let _verticaltablesInTitleBar = tmaItem.getElementsByClassName("table-noborder-auto");
let _verttblArry = Array.prototype.slice.call(_verticaltablesInTitleBar);

_verttblArry.forEach(function (tblItm, tblIDX)
{
    tblItm.style.marginBottom = '0px';
});

        }
    }
})



let _dtcHTMLCol = _containerFluid.getElementsByClassName("dataTableContent");
let _dtcs = Array.prototype.slice.call(_dtcHTMLCol);

_dtcs.forEach(function (tblItm, tblIDX)
{
    tblItm.style.padding = '4px';
});