export const convertDateToDdMmYyyy = (date) => {
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };
    return new Intl.DateTimeFormat(undefined, options).format(date);
};
