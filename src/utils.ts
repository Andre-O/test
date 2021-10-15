export class Utils {
  static zeroPad(num: number | string, places: number): string {
    let numString = num.toString();
    while (numString.length < places) {
      numString = '0' + numString;
    }
    return numString;
  }

  static isNumber(value: string): boolean {
    return !isNaN(parseFloat(value)) && /(^(\d+)?[.,]?\d+$)|(^\d+[.,]?(\d+)?$)/.test(value);
  }

  static getByKey<O, K extends keyof O>(obj: O, key: K): O[K] {
    return obj[key];
  }

  static sortStrings(array: string[]): string[] {
    return array.slice().sort((a, b) => {
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      }
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }

  static badgeNumber(num: number): string {
    if (num < 1) {
      return '';
    } else if (num > 99) {
      return '99+';
    }

    return num.toString();
  }

  static initials(str: string | string[]): string {
    let words = str instanceof Array ? str : str.trim().split(/\s+/).slice(0, 2);
    words = words.map(x => x.trim());
    return `${words[0].slice(0, 1)}${words[1]?.slice(0, 1) ?? ''}`;
  }
}
