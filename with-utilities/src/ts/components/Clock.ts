export class Clock {
  private formatter: TimeFormatter;

  constructor(formatter = SimpleTimeFormatter) {
    this.formatter = formatter;
  }

  public getTime(){
    return format(new Date(), this.formatter);
  }
}

function format(date: any, formatter: TimeFormatter) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let extra = "";
  minutes = minutes < 10 ? "0" + minutes : minutes;
  if(formatter.twelveHoursClock){
    extra = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
  }
  return  hours + formatter.separator + minutes
  + (formatter.showSeconds ? ( formatter.separator + seconds) : "")
      + (formatter.showExtra ? (" " + extra) : "");
}

export const SimpleTimeFormatter = {
  separator: ":",
  twelveHoursClock: true,
  showSeconds: true,
  showExtra: true
};

export interface TimeFormatter {
  separator: string;
  twelveHoursClock: boolean;
  showSeconds: boolean;
  showExtra: boolean;
}
