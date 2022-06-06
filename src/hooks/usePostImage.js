import { useEffect, useState } from "react";
import axios from "axios";

const usePostImage = (API, image) => {
  const [imageId, setImageId] = useState(null);

  useEffect(async () => {
    const response = await axios.post(API, image);
    setImageId(response.data.id);
  }, []);
  return imageId;
}

export default usePostImage;