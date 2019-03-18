let baseUrl = '';

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://yourdomain.com/api/';
} else {
  baseUrl = 'http://localhost:5000/';
}

export const apiHost = baseUrl;
