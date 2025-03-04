# Igor's Todo List

### A todo webapp built using React, MUI, and Redux Toolkit.

You can add and edit todos (with a description and a deadline). Todos can be filtered to show either all todos (dafault), todos due today, due on the day selected in the calendar, or overdue todos. If a todo has a due date it's displayed in the calendar as a small dot in the top right corner of a corresponding calendar day. Overdue todos are shown in red, the dots indicating overdue todos in the calendar are red as well.

The webapp uses MUI components and built-in MUI styling functionality. Both todos and active filters are stored in a Redux state to avoid props drilling.
