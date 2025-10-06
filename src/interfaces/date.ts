export interface DateItem {
    date: Date;
    dayOfWeek: string;
    dayOfMonth: string;
    isToday: boolean;
}

export interface TimeSlot {
    time: Date;
    label: string;
    disabled: boolean;
}
