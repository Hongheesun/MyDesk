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

export { currentDate, currentTimer };
