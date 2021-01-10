interface Event {
  date: Date;
}

interface Habit {
  name: string;
  events: Event[];
}
