import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5001';

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error('Request failed:', error.message);
    return Promise.reject(error);
    
  }
);
const TaskService = {
  getTasks: async () => {
    try {
      const result = await axios.get('/items');
      return result.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  },

  addTask: async (name) => {
    try {
      const result = await axios.post('/addToDo', { name });
      return result.data;
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  },

  setCompleted: async (id, isComplete) => {
    try {
      const result = await axios.put(`/upDate/${id}`, { isComplete });
      return result.data;
    } catch (error) {
      console.error('Error setting task completion:', error);
      throw error;
    }
  },

  deleteTask: async (id) => {
    try {
      await axios.delete(`/deleteToDo/${id}`);
      console.log('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  },
};

export default TaskService;