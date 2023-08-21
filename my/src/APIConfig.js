import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  headers: {
    Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWE5NGQ5Nzk5YzNkMTA5ZmFmYmE4YmZkZDkyNGE1MyIsInN1YiI6IjY0ZTA1ZTU3YWFlYzcxMDNmYmViMWY0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dsRstsdFqKwt0iUpJrnsPfbAHxk3msW0GgfnxxvF3bE'
  }
});
export default axiosInstance;