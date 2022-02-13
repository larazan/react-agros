import React from "react";

const Card = () => {
    
    const articles = [
        {
            'title': 'AGROS Shipper',
            'body': 'Agros adalah sistem terpadu satu pintu—one stop service yang berfokus pada pelayanan jasa logistik muatan berat. Agros menawarkan mitra terlatih, efisiensi dan ',
            'img': 'https://agros.co.id/images/img-about.jpg'
        },
        {
            'title': 'AGROS Transporter',
            'body': 'Tidak ada yang tidak mungkin. Kini, Perusahaan bisa dengan cepat mendapatkan keuntungan tanpa harus melakukan hal berat.',
            'img': 'https://agros.co.id/images/img-thumb-03.jpg'
        },
        {
            'title': 'AGROS Driver',
            'body': 'AGROS menawarkan keleluasaan untuk memilih proyek sehingga peningkatan pendapatan bukan lagi jadi impian.',
            'img': 'https://agros.co.id/images/img-thumb-05.jpg'
        },
    ]

  return (
    <>
      <div class="flex flex-wrap px-2">
     {articles.map((article, index) => (
         <div class="w-full lg:w-1/4 md:w-1/2  md:px-4 lg:px-6 py-5" key={index}>
         <div class="bg-white hover:shadow-xl">
           <div class="">
             <img
               src={article.img}
               alt=""
               class="h-56 w-full rounded-t hover:opacity-25"
             />
           </div>
           <div class="px-4 py-4 md:px-6">
             <h1 class="font-bold text-lg">{article.title}</h1>
             <p class="py-4">
                 {article.body}
             </p>
             </div>
         </div>
       </div>
     ))}
        
        </div>
    </>
  );
};

export default Card;
