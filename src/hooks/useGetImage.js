import { useEffect, useState } from "react";
import axios from "axios";

const useGetImage = (API) => {
  const [image, setImage] = useState([]);

  useEffect(async () => {
    const response = await axios.get(API);
    setImage(response.data);
  }, []);
  return image;
}

export default useGetImage;