// src/services/userService.ts
import api from './api';

export const userService = {
    getAll: () => api.get('/users'),
    getOne: (id: string) => api.get(`/users/${id}`),
    create: (data: any) => api.post('/auth/register', data),
    login: (credentials: any) => api.post('/auth/login', credentials),
    update: (id: string, data: any) => api.put(`/users/${id}`, data),
    delete: (id: string) => api.delete(`/users/${id}`)
  };