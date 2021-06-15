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

_emailTable.remove();
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