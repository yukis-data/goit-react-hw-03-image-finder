import { toast } from 'react-toastify';

const KEY = '29241003-a488ce55d9e0c6db1e5e6cf1a';
const errorMessage = () => toast.error('Oops... we didn`t find anything');

export class ImageService {
 getImages = (input, page) => {
   return(
    fetch(
        `https://pixabay.com/api/?q=${input}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      ).then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(errorMessage()));
      })
   ) 
  };
}
