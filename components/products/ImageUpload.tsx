"use client"
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

export default function ImageUpload() {

   const [imageUrl, setImageUrl] = useState('')
  return (
    <CldUploadWidget
        onSuccess={(result, { widget }) => {
          if(result.event === 'success') {
            widget.close()
            // @ts-ignore
            setImageUrl(result.info?.secure_url)
          }
        }}
        uploadPreset='z6ujpdnw'
        options={{
          maxFiles: 1
        }}
        onUpload={(error, result) => {
            if(error) {
                console.log("Error uploading image:", error)
            }else {
                console.log("Image uploaded:", result)
            }
        }}
    >
       {({open}) => (
        <>
          <div className='space-y-2'>
            <label className='text-slate-800' >Image Producto</label>
            <div 
               className='relative cursor-pointer hoever:opacity-701 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100'
               onClick={() => open()}
            > 
            <TbPhotoPlus 
               size={50}
            />
              <p className='text-lg font-semibold'>Agregar Imagen</p>

               {imageUrl && (
                <div
                  className="absolute inset-0 w-full h-full"
                >

                  
                  <Image  // Codigo para mostrar las imagenes
                    fill  
                    style={{objectFit: 'contain'}}
                    src={imageUrl}
                    alt="Imagen de Producto"
                  />

                </div>
               )}
              </div>
          </div>

          <input
            type='hidden'
            name="image"
            value={imageUrl}
          />
        </>
       )}
    </CldUploadWidget>
  )
}
