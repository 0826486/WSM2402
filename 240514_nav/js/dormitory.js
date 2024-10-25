// selection-item 요소 가져오기
const selectionItemDivs = document.getElementsByClassName("selection-item");

// 4개의 페이지 요소 가져오기
const calendarDiv = document.getElementById("calendar");
const selectionWashingmachineTimeDiv = document.getElementById("selection-washingmachine-time");
const selectionRoomNameDiv = document.querySelector("#selection-room-name");
const boardDiv = document.querySelector("#board");

// 4개 한번에 다 모으기
const pageDivs = [calendarDiv, selectionWashingmachineTimeDiv, selectionRoomNameDiv, boardDiv];
console.log(pageDivs);

const setPage = (page) => {
    // clear selection
    for (const selectionItemDiv of selectionItemDivs) {
        selectionItemDiv.classList.remove("select-menu");
    }

    // selection 칠하기
    selectionItemDivs[page-1].classList.add("select-menu");

    // clear pageDiv
    pageDivs.forEach(pageDiv => {
        pageDiv.style.display = "none";
    });
    
    // show pageDiv 1
    pageDivs[page-1].style.display = "block";
}
setPage(1);