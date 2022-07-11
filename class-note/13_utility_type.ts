// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   brand: string;
//   stock: number;
// }

// // 상품 목록을 받아오기 위한 API 함수
// // function fetchProducts(): Promise<Product[]> {
  
// // }

// // 불필요한 타입 코드를 줄이고 깔끔한 방법으로 코드를 작성할 수 있다라는 장점이 있음
// // interface ProductDetail {
// //   id: number;
// //   name: string;
// //   price: number;
// // }

// // 특정 상품의 상세 정보를 나타내기 위한 함수
// // type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
// // function displayProductDetail(productItem: Pick<Product, 'id' | 'name' | 'price'>) {
// // }

// // interface UpdateProduct {
// //   id?: number;
// //   name?: string;
// //   price?: number;
// //   brand?: string;
// //   stock?: number;
// // }

// // 특정 상품 정보를 업데이트(갱신)하는 함수
// type UpdateProduct = Partial<Product>; // 어떤 타입을 가지는지 보기 위해서 적은 코드 (변수에 마우스오버)
// function updateProductItem(productItem: Partial<Product>) {

// }

// // 유틸리티 타입 구현하기 - Partial
// interface UserProfile {
//   username: string;
//   email: string;
//   profilePhotoUrl: string;
// }

// // interface UserProfileUpdate {
// //   username?: string;
// //   email?: string;
// //   profilePhotoUrl?: string;
// // }

// // #1
// // type UserProfileUpdate = {
// //   username?: UserProfile['username'];
// //   email?: UserProfile['email'];
// //   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// // }

// // #2 Mapped type
// // type UserProfileUpdate= {
// //   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// // }
// // type UserProfileKeys = keyof UserProfile // "username" | "email" | "profilePhotoUrl"

// // #3
// type UserProfileUpdate= {
//   [p in keyof UserProfile]?: UserProfile[p]
// }

// // #4
// type SubSet<T> = {
//   [p in keyof T]?: T[p]  
// }
