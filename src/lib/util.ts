export const THEME_COLOUR = "#030712"

export const getRandomNumbers = (length: number) => {
    let value = []

    for (let i = 0; i < length; i++){
        value.push(Math.floor(Math.random() * 10))
    }

    return Number(value.join(''))
}

export function timeSince(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime(); // difference in milliseconds

    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSeconds < 60) {
        return `${diffSeconds} second${diffSeconds !== 1 ? "s" : ""} ago`;
    } else if (diffMinutes < 60) {
        return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
    } else if (diffHours < 24) {
        return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
    } else {
        return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
    }
}
