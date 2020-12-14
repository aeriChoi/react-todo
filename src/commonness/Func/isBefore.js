import moment from "moment";

export const isBefore = (type, date) => {
  if (date !== undefined) {
    const getDay = moment(date).format("YYYY-MM-DD");
    const getDiffDay = moment(getDay, "YYYY-MM-DD").fromNow();
    const getTime = moment(date).format("HH:mm");
    const getDiffTime = moment(getTime, "HH:mm").fromNow();

    switch (type) {
      case 'day':
        const isBeforeDay = getDiffDay.includes('ago');
        console.log('isBeforeDay', isBeforeDay);
        return isBeforeDay
      case 'time':
        const isBeforeTime = getDiffTime.includes('ago');
        console.log('isBeforeTime', isBeforeTime);
        return isBeforeTime
      default:
        return false;
    }
  } else {
    return false;
  }
};
