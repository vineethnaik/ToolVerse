import axios from 'axios'

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token')
      window.location.href = '/auth'
    }
    return Promise.reject(error)
  }
)

// API service functions
export const toolService = {
  // Get all tools with optional pagination and filtering
  getTools: async (params = {}) => {
    const {
      page = 0,
      size = 20,
      search = '',
      category = '',
      pricing = '',
      sort = 'name',
      direction = 'asc'
    } = params
    
    const queryParams = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
      sort,
      direction,
    })
    
    if (search) queryParams.append('search', search)
    if (category) queryParams.append('category', category)
    if (pricing) queryParams.append('pricing', pricing)
    
    return api.get(`/tools?${queryParams}`)
  },

  // Get tool by ID
  getToolById: async (id) => {
    return api.get(`/tools/${id}`)
  },

  // Get featured/trending tools
  getFeaturedTools: async () => {
    return api.get('/tools/featured')
  },

  // Get tools by category
  getToolsByCategory: async (category, params = {}) => {
    const { page = 0, size = 20 } = params
    return api.get(`/tools/category/${category}?page=${page}&size=${size}`)
  },

  // Search tools
  searchTools: async (query, params = {}) => {
    const { page = 0, size = 20 } = params
    return api.get(`/tools/search?q=${encodeURIComponent(query)}&page=${page}&size=${size}`)
  },

  // Create new tool (admin only)
  createTool: async (toolData) => {
    return api.post('/tools', toolData)
  },

  // Update tool (admin only)
  updateTool: async (id, toolData) => {
    return api.put(`/tools/${id}`, toolData)
  },

  // Delete tool (admin only)
  deleteTool: async (id) => {
    return api.delete(`/tools/${id}`)
  },
}

export const categoryService = {
  // Get all categories
  getCategories: async () => {
    return api.get('/categories')
  },

  // Get category by ID
  getCategoryById: async (id) => {
    return api.get(`/categories/${id}`)
  },
}

export const requestService = {
  // Submit tool request
  submitRequest: async (requestData) => {
    return api.post('/requests', requestData)
  },

  // Get all requests (admin only)
  getRequests: async (params = {}) => {
    const { page = 0, size = 20, status = '' } = params
    const queryParams = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
    })
    if (status) queryParams.append('status', status)
    
    return api.get(`/requests?${queryParams}`)
  },

  // Update request status (admin only)
  updateRequestStatus: async (id, status) => {
    return api.put(`/requests/${id}?status=${encodeURIComponent(status)}`)
  },

  // Delete request (admin only)
  deleteRequest: async (id) => {
    return api.delete(`/requests/${id}`)
  },
}

// Mock data service for development
export const mockService = {
  // Get mock tools (for development)
  getMockTools: async () => {
    // This would normally import from mockTools.js
    // For now, return a promise that resolves with empty data
    // The actual mock data will be imported in the components
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: [], total: 0 }), 100)
    })
  }
}

export default api
