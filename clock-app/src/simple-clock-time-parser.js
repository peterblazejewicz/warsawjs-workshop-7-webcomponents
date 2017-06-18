SimpleClockTimeParser = {

    parseTime(time) {
        if(!time) return null;
        const [, hours, minutes, seconds] = time && (/^(\d{2}):(\d{2}):(\d{2})$/).exec(time);
        if(hours && minutes && seconds) {
          const date = new Date();
          date.setHours(+hours);
          date.setMinutes(+minutes);
          date.setSeconds(+seconds);
          return date;
        }
        return null;
    }

};