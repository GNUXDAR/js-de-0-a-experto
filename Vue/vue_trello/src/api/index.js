import { db } from "./firebase";

const boardsRef = db.ref("/boards");
const listsRef = db.ref("/lists");
const tasksRef = db.ref("/tasks");

export default {
  async getBoardsByUser(userId) {
    const query = boardsRef.orderByChild("owner").equalTo(userId);
    const snapshot = await query.once("value");
    return snapshot.val();
  },

  async postBoard(name) {
    const id = boardsRef.push().key;
    const owner = 1; // Este valor debe ser dinámico dependiendo del usuario autenticado
    const board = { id, name, owner };

    await boardsRef.child(id).set(board);
    return board;
  },

  async getListsFromBoard(boardId) {
    const query = listsRef.orderByChild("board").equalTo(boardId);
    const snapshot = await query.once("value");
    return snapshot.val();
  },

  async postList(board, name) {
    const id = listsRef.push().key;
    const column = { id, name, board };

    await listsRef.child(id).set(column);
    return column;
  },

  async getTasksFromList(listId) {
    const query = tasksRef.orderByChild("list").equalTo(listId);
    const snapshot = await query.once("value");
    return snapshot.val();
  },

  async postTask(list, title) {
    const id = tasksRef.push().key;
    const task = { id, list, title, completed: false };

    await tasksRef.child(id).set(task);
    return task;
  },

  async deleteTask(taskId) {
    await tasksRef.child(taskId).remove();
  },

  async completedTask(taskId) {
    const query = tasksRef.child(taskId).child("completed");
    const snapshot = await query.once("value");
    const currentStatus = snapshot.val();
    await query.set(!currentStatus);
    return !currentStatus;
  },
};
