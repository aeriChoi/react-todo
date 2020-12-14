import moment from "moment";

export const getDate = (date) => {
  if (date !== undefined) {
    const selectedDate = moment(date).format('YYYY-MM-DD HH:mm');
    return selectedDate;
  } else {
    return '';
  }
};
