interface HabitEvent {
  date: Date;
}

interface Habit {
  id: number;
  name: string;
  detail: string;
  events: HabitEvent[];
}
