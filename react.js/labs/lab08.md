## Lab - Performance
### Lab Objective:
Build a list of tasks with an option to add new tasks and optimize it using React.memo, useMemo,
and useCallback.

### Steps:
* Create a task management app that allows users to add tasks and filter them.
* Use React.memo to optimize the task display component, ensuring it doesn't re-render unnecessarily.
* Memoize the filtered tasks using useMemo to prevent recalculations on every render.
* Memoize the function that adds a new task using useCallback.
