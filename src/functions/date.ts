const currentTimer = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

const currentDate = () => {
  const now = new Date();
  const todayMonth = now.getMonth() + 1;
  const todayDate = now.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[now.getDay()];
  return `${todayMonth}월 ${todayDate}일 ${dayOfWeek}요일`;
};

const calendarDate = (month: string) => {
  if (month === "Jan") {
    return "01";
  } else if (month === "Feb") {
    return "02";
  } else if (month === "Mar") {
    return "03";
  } else if (month === "Apr") {
    return "04";
  } else if (month === "May") {
    return "05";
  } else if (month === "Jun") {
    return "06";
  } else if (month === "Jul") {
    return "07";
  } else if (month === "Aug") {
    return "08";
  } else if (month === "Sep") {
    return "09";
  } else if (month === "Act") {
    return "10";
  } else if (month === "Nov") {
    return "11";
  } else if (month === "Dec") {
    return "12";
  }
};

export { currentDate, currentTimer, calendarDate };
