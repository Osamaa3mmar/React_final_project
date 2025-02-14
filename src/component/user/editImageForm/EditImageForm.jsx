import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../userContext/UserContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import style from "./../Profile/main.module.css";
import Loading from "../loading/Loading";
import { toast } from "react-toastify";
export default function EditImageForm() {
  const { userImage, setUserImage } = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const [tempImage,setTempImage]=useState(null);
  const [loading,setLoading]=useState(false);
  const updateImage = async (info) => {
    const formData = new FormData();
    formData.append("image", info.image[0]);
    setLoading(true);
    let toastId=toast.loading("Changing image. . .");
    try {
      
      const { data } = await axios.put(
        "https://ecommerce-node4.onrender.com/user/update-image",
        formData,
        {
          headers: {
            Authorization: `Tariq__${localStorage.getItem("token")}`,
          },
        }
      );
      setUserImage(data.user.image.secure_url);
      toast.success("Image updated successfully!");
    } catch (e) {
      console.log(e);
      toast.error(e.message);

    }
    finally{
      setLoading(false);
      toast.dismiss(toastId);

    }
  };
  const changeImage=(e)=>{
    const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file); 
    setTempImage(imageUrl);
  }
  }
  return (
    <div className={style.container}>
      {userImage?
      <div className={style.userContainer}>
      <div className={style.imgCont}>
        <img className={style.img} src={tempImage?tempImage:userImage} alt="" />
      </div>
      <Form
        onSubmit={handleSubmit(updateImage)}
        encType="multipart/form-data"
        onChange={changeImage}
        className={style.form}
      >
        <Form.Group controlId="image">
          <Form.Label className={style.uploadBtn}>Chose Image</Form.Label>
          <Form.Control {...register("image")} className="d-none" required type="file"></Form.Control>
        </Form.Group>

        <Button type="submit" className={style.uploadBtn} disabled={loading}>{loading?"Loading . . .":'Change Image'}</Button>
      </Form>
    </div>
      :<Loading/>}
      
    </div>
  );
}
