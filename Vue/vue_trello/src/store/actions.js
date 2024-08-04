import * as types from "./mutation-types";
import API from "@/api";

export default {
  // Fetch via AJAX the boards from user
  async fetchBoards({ commit }, { user }) {
    commit(types.FETCH_BOARDS_REQUEST);

    try {
      const snap = await API.getBoardsByUser(user);
      commit(types.FETCH_BOARDS_SUCCESS, { boards: snap.val() });
    } catch (error) {
      commit(types.FETCH_BOARDS_FAILURE, { error });
    }
  },

  // Fetch via AJAX the lists from a board
  async fetchLists({ commit }, { board }) {
    commit(types.FETCH_LISTS_REQUEST);

    try {
      const snap = await API.getListsFromBoard(board);
      commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val() });
    } catch (error) {
      commit(types.FETCH_LISTS_FAILURE, { error });
    }
  },

  // Fetch via AJAX the tasks from a list
  async fetchTasks({ commit }, { list }) {
    commit(types.FETCH_TASKS_REQUEST);

    try {
      const snap = await API.getTasksFromList(list);
      commit(types.FETCH_TASKS_SUCCESS, { tasks: snap.val() });
    } catch (error) {
      commit(types.FETCH_TASKS_FAILURE, { error });
    }
  },

  // Add a new board via AJAX
  async addBoard({ commit }, { name }) {
    try {
      const board = await API.postBoard(name);
      commit(types.ADD_BOARD, { board });
    } catch (error) {
      console.error("Error adding board:", error);
    }
  },

  // Add a new column/list to a board via AJAX
  async addColumn({ commit }, { board, name }) {
    try {
      const column = await API.postList(board, name);
      commit(types.ADD_COLUMN, { column });
    } catch (error) {
      console.error("Error adding column:", error);
    }
  },

  // Add a new task to a list/column via AJAX
  async addTask({ commit }, { list, title }) {
    try {
      const task = await API.postTask(list, title);
      commit(types.ADD_TASK, { task });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  },

  // Delete a task from a list/AJAX via AJAX
  async deleteTask({ commit }, { taskId }) {
    try {
      await API.deleteTask(taskId);
      commit(types.DELETE_TASK, { taskId });
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  },

  // Mark a task as completed via AJAX
  async markAsCompleted({ commit }, { task }) {
    try {
      await API.completedTask(task.id);
      commit(types.MARK_AS_COMPLETED, { task });
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
  },
};
