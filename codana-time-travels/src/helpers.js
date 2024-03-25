import dayjs from 'dayjs';

export const convertToSnakeCase = (string) => string.toLowerCase().replaceAll(' ', '_');

export const today = dayjs().subtract(1, 'day');