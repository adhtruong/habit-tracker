interface Event {
  date: Date;
}

interface Habit {
  id: number;
  name: string;
  events: Event[];
}
