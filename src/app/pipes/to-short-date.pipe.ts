import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "toShortDate"
})
export class ToShortDatePipe implements PipeTransform {
  monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ];

  transform(value: Date, args?: any): any {
    console.log(value);
    if (args == "day") {
      return this.toInteger(value.getDate());
    } else if (args == "mm yy") {
      return (
        this.monthNames[value.getMonth()] +
        " " +
        `${value.getFullYear()}`.slice(-2)
      );
    } else {
      return "cou";
    }
  }

  toInteger(value: any): string {
    return ("0" + `${value}`).slice(-2);
  }
}
