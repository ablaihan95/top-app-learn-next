export enum TopLevelCategory {
    Courses, Services, Books, Products
}

export interface HhData {
    _id: string
    count: string
    juniorSalary: number
    middleSalary: number
    seniorSalary: number
    updatedAt: Date
}

export interface TopPageModel {
    tags: string[]
    secondCategory: string
    alias: string
    title: string
    category: string
    seoText: string
    tagsTitle: string
    metaTile: string
    metaDescription: string
    firstCategory: TopLevelCategory
    advantages: string
    createdAt: Date
    updatedAt: Date
    hhData: HhData
}