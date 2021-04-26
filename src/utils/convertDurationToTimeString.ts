export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / (60 * 60));
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = (duration % 60);
    //padStart adiciona caracteres que faltaram. Se a hora for = 1, a escrita será 01
    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':')

    return timeString;
}