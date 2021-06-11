let _header = document.querySelector("#main-wrapper > div.header");
_header.remove();

let _rightHeaderItemsPanel = document.querySelector("#main-wrapper > div.page-wrapper > div.row.page-titles > div.col-md-7.align-self-center");
_rightHeaderItemsPanel.remove();

let _leftItemsPanel = document.querySelector("#main-wrapper > div.page-wrapper > div.row.page-titles > div");
_leftItemsPanel.className = "col-md-12 align-self-center";

let _orderIDElem = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > h3");
let _orderID = _orderIDElem.innerText;

let _mainBlueHeader = document.querySelector("#main-wrapper > div.page-wrapper > div.row.page-titles > div > h3");
var textnode = document.createTextNode(_orderID); 
_mainBlueHeader.appendChild(textnode);

_orderIDElem.remove();
let _orderIDHR = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > hr");
_orderIDHR.remove();

let _mainCard = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div");
_mainCard.style.margin = 0;

let _pageTitle = document.querySelector("#main-wrapper > div.page-wrapper > div.row.page-titles");
_pageTitle.style.margin = '0 0 10px';
_pageTitle.style.padding = '10px';

let _mainbod = document.querySelector("body");
_mainbod.classList.add('mini-sidebar');


let _mainBody = document.querySelector("#main-wrapper > div.page-wrapper > div.container-fluid > div > div");

var all = _mainBody.getElementsByTagName("*");

for (var _genericIdx = 0, max = all.length; _genericIdx < max; _genericIdx++) {
    all[_genericIdx].style.color = "black";
    all[_genericIdx].style.fontFamily = "Myriad pro Semibold"
}

for (var _groupHeaderIdx = 1, maxIdx = 3; _groupHeaderIdx < maxIdx; _groupHeaderIdx++) {
    let _headerGroup = document.querySelector(`#main-wrapper > div.page-wrapper > div.container-fluid > div > div > div > div > table:nth-child(1) > tbody > tr > td:nth-child(${_groupHeaderIdx})`);

    // for (var i2 = 1, max2 = 7; i2 < max; i2++) {
    //     let _tds = _headerGroup.querySelector(`tbody > tr > td.pageHeading > a:nth-child(${i2})`)
    //     _tds.style.color = 'white';
    //     _tds.style.fontFamily = "Myriad pro Semibold"
    // }

    //var array = Array.from(_headerGroup.childNodes);
    var array = Array.prototype.slice.call(_headerGroup.childNodes);
    //let _buttonsOnly = array.getElementsByTagName('a');

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

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});