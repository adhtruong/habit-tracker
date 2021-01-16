interface HabitEvent {
  date: string;
}

interface Habit {
  id: number;
  name: string;
  detail: string;
  events: HabitEvent[];
}
