import { TImmobile } from "@/types";

const cardPropMock: TImmobile = {
  "id": "000",
  "ownerId": "google-oauth2|10015361573371827215",
  "tenantId": undefined,
  "addressId": "000",
  "typeId": "002",
  "price": 500,
  "bedroomsQty": 2,
  "bathroomsQty": 2,
  "parkingQty": 0,
  "sqrFootage": 70,
  "petFriendly": true,
  "description": "Apartamento espaçoso com 70m², 2 quartos, sendo uma suíte, e com um banheiro social.",
  "createdAt": new Date("2023-11-21T15:57:35.495Z"),
  "updatedAt": new Date("2023-11-21T15:57:35.495Z"),
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
    "createdAt": new Date("2023-11-21T15:57:35.461Z"),
    "updatedAt": new Date("2023-11-21T15:57:35.461Z")
  },
  "type": {
    "id": "002",
    "type": "apartamento"
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

export default cardPropMock;
