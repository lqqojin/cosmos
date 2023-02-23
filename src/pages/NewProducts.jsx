import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from 'src/api/uploader';
import { writeUserData } from '../api/firebase';

export default function NewProducts() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(product);
    uploadImage(file);
    // 제품의 사진을 Cloudinary 에 업로드 하고 URL을 획득
    // Firebase에 새로운 제품을 추가함
    writeUserData(product);
  };

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full h-full my-1 flex justify-center items-center flex-col">
      <div>새로운 제품 등록</div>
      {file && <img src={URL.createObjectURL(file)} alt="local file" />}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="제품명"
          value={product.title ?? ''}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="가격"
          value={product.price ?? ''}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="category"
          value={product.category ?? ''}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="제품 설명"
          value={product.description ?? ''}
          onChange={handleChange}
        />
        <input
          type="text"
          name="option"
          placeholder="옵션들(콤마(,)로 구분)"
          value={product.option ?? ''}
          onChange={handleChange}
        />
        <Button className="bg-shoppyBrand" text={'제품 등록하기'} />
      </form>
    </section>
  );
}
