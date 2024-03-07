function dayOfTheYear(date) {
    let date2 = new Date(date.getYear() + 1900, 0);
    return Math.round((date2.getTime() - date.getTime()) / (1000 * 3600 * 24));
}