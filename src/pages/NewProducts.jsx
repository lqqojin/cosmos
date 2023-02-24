import React, { useState } from 'react';
import { addNewProduct } from '../api/firebase';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';
// import { writeUserData } from '../api/firebase';

export default function NewProducts() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then(url => {
        console.log(url);
        addNewProduct(product, url).then(() => {
          setSuccess('성공적으로 제품이 추가되었습니다.');
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        });
      })
      .finally(() => setIsUploading(false));
    // 제품의 사진을 Cloudinary 에 업로드 하고 URL을 획득
    // Firebase에 새로운 제품을 추가함
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
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>
      {success && <p className="my-2">✅ {success}</p>}
      {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}
      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
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
        <Button
          className="bg-shoppyBrand"
          text={isUploading ? '업로드 중...' : '제품 등록하기'}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}
