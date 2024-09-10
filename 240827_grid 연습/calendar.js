// 달력

// 현재 날짜 구하기
let currentDate = new Date();

// 이전 달 버튼 이벤트 처리
const setCalendarHeader = (date) => {
    // 연도 구하기
    const year = date.getFullYear();
    // 달 구하기
    const month = date.getMonth();     // 0: 1월, 1: 2월

    titleString = `${year}년 ${month + 1}월`;
    const calendarHeaderH1 = document.querySelector("#calendar-header h1");
    calendarHeaderH1.innerHTML = titleString;
}
const changeMonth = (delta) => {
    currentDate.setMonth(currentDate.getMonth() + delta);
    setCalendarHeader(currentDate);
}

const prevMonthButton = document.getElementById("prev-month");
prevMonthButton.addEventListener("click", () => changeMonth(-1));    // .addEventListner("click", console.log('이전 달'))하면 안됨. console.log() 함수 실행한 결과를 클릭 했을 때 실행함. 즉 아무일도 안함

// 다음 달 버튼 이벤트 처리
const nextMonthButton = document.querySelector("#next-month");
nextMonthButton.onclick = () => changeMonth(1);

// 일 구하기
const setCalendar = (data) => {
    
}
// 첫 날의 요일 구하기
// 마지막 날짜 구하기
// 마지막 날의 요일 구하기

// 이전 달 뒷날짜 구하기

// 다음 달 앞 날짜 구하기

setCalendarHeader(currentDate);