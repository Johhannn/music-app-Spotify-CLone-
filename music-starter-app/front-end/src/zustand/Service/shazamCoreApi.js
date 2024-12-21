import {create} from 'zustand';
import axios from 'axios';

const useMusicStore = create((set) => ({
  musicData: [], 
  loading: false, 
  error: null, 


  fetchMusicData: async () => {
    set({ loading: true, error: null }); 
    const options = {
      method: 'GET',
      url: 'https://scraptik.p.rapidapi.com/discover-music',
      params: { count: '48', cursor: '0' },
      headers: {
        'x-rapidapi-key': '2b00edfdddmsh09afed912f4ab8ap1a178cjsnd24c7c27a368',
        'x-rapidapi-host': 'scraptik.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      set({ musicData: response.data, loading: false }); 
    } catch (error) {
      set({ error: error.message, loading: false }); 
    }
  },
}));

export default useMusicStore;
