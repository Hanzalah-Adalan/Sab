let _header = document.querySelector("#main-wrapper > div.header");
_header.remove();

let _rightHeaderItemsPanel = document.querySelector("#main-wrapper > div.page-wrapper > div.row.page-titles > div.col-md-7.align-self-center");
_rightHeaderItemsPanel.remove();

let _leftItemsPanel = document.querySelector("#main-wrapper > div.page-wrapper > div.row.page-titles > div");
_leftItemsPanel.className = "col-md-12 align-self-center";

let _sideBar = document.querySelector("#main-wrapper > div.left-sidebar");
_sideBar.style.display = 'none';

let _btnPrev = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > table:nth-child(1) > tbody > tr > td:nth-child(2) > a:nth-child(1)");
_btnPrev.className = 'btn btn-info';

let _btnNext = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > table:nth-child(1) > tbody > tr > td:nth-child(2) > a:nth-child(2)");
_btnNext.className = 'btn btn-success';
_btnNext.style.marginLeft = '20px';

let _pageWrapper = document.querySelector("#main-wrapper > div.page-wrapper");
_pageWrapper.style.marginLeft = '0px';

let _emailTable = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > table:nth-child(5)");
let _hrAboveEmail = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > hr:nth-child(4)");
let _hrBelowEmail = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > hr:nth-child(6)");

let _emailID = _emailTable.childNodes[1].childNodes[0].childNodes[3].innerText;

_emailTable.remove();
_hrAboveEmail.remove();
_hrBelowEmail.remove();

let _orderIDElem = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > h3");
let _orderID = _orderIDElem.innerText;

let _mainBlueHeader = document.querySelector("#main-wrapper > div.page-wrapper > div.row.page-titles > div > h3");
_mainBlueHeader.innerText = '';
_mainBlueHeader.classList.remove("text-primary");

let textnode = document.createTextNode(_orderID);
let spacer = document.createElement("SPAN");
spacer.style.marginLeft = '32px';

let emailIDText = document.createTextNode(_emailID);

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





let _mainBody = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div");


var all = _mainBody.getElementsByTagName("*");

for (var _genericIdx = 0, max = all.length; _genericIdx < max; _genericIdx++) {
    all[_genericIdx].style.color = "black";
    all[_genericIdx].style.fontFamily = "Myriad pro Semibold"
}



let _phone1 = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > table:nth-child(3) > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2)");
let _phone2 = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > table:nth-child(3) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)");

let _phoneArrays = [_phone1, _phone2];
_phoneArrays.forEach(function(pItem, pIDX){


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




let _allTR = _mainBody.getElementsByTagName("B");
let _trArray = Array.prototype.slice.call(_allTR);

_trArray.forEach(filterTRAtPromo);

function filterTRAtPromo(_bElem, _trIndex)
{
    if(_bElem.innerText.includes("-RM"))
    {
        _bElem.style.color = 'red';
    }
}

for (var _groupHeaderIdx = 1, maxIdx = 3; _groupHeaderIdx < maxIdx; _groupHeaderIdx++) {
    let _headerGroup = document.querySelector(`#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > table:nth-child(1) > tbody > tr > td:nth-child(${_groupHeaderIdx})`);

    var array = Array.prototype.slice.call(_headerGroup.childNodes);

    array.forEach(myFunction);

}


function myFunction(item, index)
{
    if(item.nodeName === "A")
    {
        item.style.color = 'white';

        if(item.className==='btn-sm btn-warning')
        {
            item.className = 'btn btn-warning'
        }
    }

}