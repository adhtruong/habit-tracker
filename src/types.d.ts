interface HabitEvent {
  date: Date;
}

interface Habit {
  id: number;
  name: string;
  events: HabitEvent[];
}
