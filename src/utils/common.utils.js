export const numConverted = num => {
  if (num < 10) {
    return '0' + num;
  } else {
    return num.toString();
  }
};

export const dateToString = date => {
  if (date) {
    const explode = date.split(' ');
    const explode_date = explode[0].split('-'); // For Date
    return (
      explode_date[0] +
      '-' +
      numConverted(+explode_date[1]) +
      '-' +
      numConverted(+explode_date[2])
    );
  } else {
    const converted_date =
      new Date().getFullYear() +
      '-' +
      numConverted(new Date().getMonth() + 1) +
      '-' +
      numConverted(new Date().getDate());
    return converted_date;
  }
};

export const timeToString = date => {
  if (date) {
    const explode = date.split(' ');
    const explode_date = explode[1].split('-'); // For Time
    return (
      explode_date[0] +
      ':' +
      numConverted(+explode_date[1]) +
      ':' +
      numConverted(0)
    );
  } else {
    const convertedTime =
      numConverted(new Date().getHours()) +
      ':' +
      numConverted(new Date().getMinutes()) +
      ':' +
      numConverted(new Date().getSeconds());
    return convertedTime;
  }
};
