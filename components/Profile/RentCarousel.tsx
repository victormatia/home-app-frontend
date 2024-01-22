"use client"
import React, { useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { PropertyCard } from './PropertyCard';

const immobiles = [
  {
  "id": "000",
  "ownerId": "google-oauth2|10015361573371827215",
  "tenantId": undefined,
  "addressId": "000",
  "typeId": "002",
  "price": Number("500"),
  "bedroomsQty": 2,
  "bathroomsQty": 2,
  "parkingQty": 0,
  "sqrFootage": Number("70"),
  "petFriendly": true,
  "description": "Apartamento espaçoso com 70m², 2 quartos, sendo uma suíte, e com um banheiro social.",
  "payment": {
    "paid": true,
    "overdue": false,
    "terminated": false,
  },
  "address": {
    "id": "000",
    "street": "Rua 00",
    "burgh": "Violete",
    "city": "Itapipoca",
    "state": "Ceará",
    "postalCode": "62500-000",
    "number": "0000",
    "apto": "0000",
    "complement": "Próximo ao bar do Mozá",
  },
  "photos": [
    {
      "photo": {
        "url": "https://images.unsplash.com/photo-1614568742191-1ec6d6c183b3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTN8fHxlbnwwfHx8fHw%3D"
      }
    },
    {
      "photo": {
        "url": "https://images.unsplash.com/photo-1614568054271-2381b5b1beab?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTV8fHxlbnwwfHx8fHw%3D"
      }
    }
  ]
  },
  {
    "id": "000",
    "ownerId": "google-oauth2|10015361573371827215",
    "tenantId": undefined,
    "addressId": "000",
    "typeId": "002",
    "price": Number("500"),
    "bedroomsQty": 2,
    "bathroomsQty": 2,
    "parkingQty": 0,
    "sqrFootage": Number("70"),
    "petFriendly": true,
    "description": "Apartamento espaçoso com 70m², 2 quartos, sendo uma suíte, e com um banheiro social.",
    "payment": {
      "paid": true,
      "overdue": false,
      "terminated": false,
    },
    "address": {
      "id": "000",
      "street": "Rua 00",
      "burgh": "Violete",
      "city": "Itapipoca",
      "state": "Ceará",
      "postalCode": "62500-000",
      "number": "0000",
      "apto": "0000",
      "complement": "Próximo ao bar do Mozá",
    },
    "photos": [
      {
        "photo": {
          "url": "https://images.unsplash.com/photo-1614568742191-1ec6d6c183b3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTN8fHxlbnwwfHx8fHw%3D"
        }
      },
      {
        "photo": {
          "url": "https://images.unsplash.com/photo-1614568054271-2381b5b1beab?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTV8fHxlbnwwfHx8fHw%3D"
        }
      }
    ]
    },
    {
      "id": "000",
      "ownerId": "google-oauth2|10015361573371827215",
      "tenantId": undefined,
      "addressId": "000",
      "typeId": "002",
      "price": Number("500"),
      "bedroomsQty": 2,
      "bathroomsQty": 2,
      "parkingQty": 0,
      "sqrFootage": Number("70"),
      "petFriendly": true,
      "description": "Apartamento espaçoso com 70m², 2 quartos, sendo uma suíte, e com um banheiro social.",
      "payment": {
        "paid": true,
        "overdue": false,
        "terminated": false,
      },
      "address": {
        "id": "000",
        "street": "Rua 00",
        "burgh": "Violete",
        "city": "Itapipoca",
        "state": "Ceará",
        "postalCode": "62500-000",
        "number": "0000",
        "apto": "0000",
        "complement": "Próximo ao bar do Mozá",
      },
      "photos": [
        {
          "photo": {
            "url": "https://images.unsplash.com/photo-1614568742191-1ec6d6c183b3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTN8fHxlbnwwfHx8fHw%3D"
          }
        },
        {
          "photo": {
            "url": "https://images.unsplash.com/photo-1614568054271-2381b5b1beab?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTV8fHxlbnwwfHx8fHw%3D"
          }
        }
      ]
      },
      {
        "id": "000",
        "ownerId": "google-oauth2|10015361573371827215",
        "tenantId": undefined,
        "addressId": "000",
        "typeId": "002",
        "price": Number("500"),
        "bedroomsQty": 2,
        "bathroomsQty": 2,
        "parkingQty": 0,
        "sqrFootage": Number("70"),
        "petFriendly": true,
        "description": "Apartamento espaçoso com 70m², 2 quartos, sendo uma suíte, e com um banheiro social.",
        "payment": {
          "paid": true,
          "overdue": false,
          "terminated": false,
        },
        "address": {
          "id": "000",
          "street": "Rua 00",
          "burgh": "Violete",
          "city": "Itapipoca",
          "state": "Ceará",
          "postalCode": "62500-000",
          "number": "0000",
          "apto": "0000",
          "complement": "Próximo ao bar do Mozá",
        },
        "photos": [
          {
            "photo": {
              "url": "https://images.unsplash.com/photo-1614568742191-1ec6d6c183b3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTN8fHxlbnwwfHx8fHw%3D"
            }
          },
          {
            "photo": {
              "url": "https://images.unsplash.com/photo-1614568054271-2381b5b1beab?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTV8fHxlbnwwfHx8fHw%3D"
            }
          }
        ]
        }
]

const RentCarousel: React.FC = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      spacing: 16,
    },
    loop: true,
    mode:'free',
  });
return (
<div className='mt-5 flex flex-col lg:w-[925px]'>
  <span className='text-left ml-5'>Meus Alugueis</span>
  <div className='xl:ml-5'>
    <div ref={sliderRef} className="keen-slider" style={{paddingBottom:20, paddingTop:8, paddingLeft:20}}>
    {
            immobiles?.map((immobile, index) => {
              return(
                <PropertyCard
                key={ index }
                immobile={immobile}
                />
              );
            })
          }
    </div>
  </div>
</div>
);
};

export default RentCarousel;