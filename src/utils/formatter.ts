export class Formatter {
  static FormatDate(value: Date): string {
    const date = new Date(value);

    return Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(date);
  }
}
