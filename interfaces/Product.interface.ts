import {HhData} from "./page.interface";

export interface ProductCharacteristic {
    value: string
    name: string
}

export interface ReviewModel {
    _id: string
    name: string
    title: string
    description: string
    rating: number
    createdAt: Date
}

export interface ProductModel {
    _id: string
    categories: string[]
    tags: string[]
    title: string
    link: string
    price: number
    credit: number
    oldPrice: number
    description: string
    characteristics: ProductCharacteristic[]
    advantages: string
    createdAt: Date
    updatedAt: Date
    image: string
    _v: number
    initialRating: number
    reviewCount: number
    reviews: ReviewModel[]
    reviewAvg?: any
}