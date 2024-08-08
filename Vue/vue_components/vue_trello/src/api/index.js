import {
  getDatabase,
  ref,
  get,
  set,
  push,
  query,
  orderByChild,
  equalTo,
  remove,
} from "firebase/database";
import app from "./firebase"; // Importa la instancia de la aplicación inicializada

// Inicializar la base de datos
const db = getDatabase(app);

export default {
  async getBoardsByUser(userId) {
    const boardsRef = ref(db, "boards");
    const userQuery = query(boardsRef, orderByChild("owner"), equalTo(userId));
    const snapshot = await get(userQuery);
    return snapshot.val();
  },

  async postBoard(name) {
    const boardsRef = ref(db, "boards");
    const newBoardRef = push(boardsRef);
    const id = newBoardRef.key;
    const owner = 1; // Este valor debe ser dinámico dependiendo del usuario autenticado
    const board = { id, name, owner };

    await set(newBoardRef, board);
    return board;
  },

  async getListsFromBoard(boardId) {
    const listsRef = ref(db, "lists");
    const boardQuery = query(listsRef, orderByChild("board"), equalTo(boardId));
    const snapshot = await get(boardQuery);
    return snapshot.val();
  },

  async postList(board, name) {
    const listsRef = ref(db, "lists");
    const newListRef = push(listsRef);
    const id = newListRef.key;
    const column = { id, name, board };

    await set(newListRef, column);
    return column;
  },

  async getTasksFromList(listId) {
    const tasksRef = ref(db, "tasks");
    const listQuery = query(tasksRef, orderByChild("list"), equalTo(listId));
    const snapshot = await get(listQuery);
    return snapshot.val();
  },

  async postTask(list, title) {
    const tasksRef = ref(db, "tasks");
    const newTaskRef = push(tasksRef);
    const id = newTaskRef.key;
    const task = { id, list, title, completed: false };

    await set(newTaskRef, task);
    return task;
  },

  async deleteTask(taskId) {
    const taskRef = ref(db, `tasks/${taskId}`);
    await remove(taskRef);
  },

  async completedTask(taskId) {
    const taskCompletedRef = ref(db, `tasks/${taskId}/completed`);
    const snapshot = await get(taskCompletedRef);
    const currentStatus = snapshot.val();
    await set(taskCompletedRef, !currentStatus);
    return !currentStatus;
  },
};
