import React, { Component }  from 'react';
//@ts-ignore
import { GiClothes } from 'react-icons/gi';
//@ts-ignore
import { MdOutlineSmartToy } from 'react-icons/md';
//@ts-ignore
import { GiAbstract061 } from 'react-icons/gi';


export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'shipping',
    url: '/shipping',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <MdOutlineSmartToy />,
    title: 'toy',
    text: 'toy text',
  },
  {
    id: 2,
    icon: <GiClothes />,
    title: 'clothing',
    text: 'clothing text',
  },
  {
    id: 3,
    icon: <GiAbstract061 />,
    title: 'accessories',
    text: 'accessories text',
  },
]

export const API_ENDPOINT =
  'https://bqk6gkzk.api.sanity.io/v1/graphql/production/default'

export const QUERY = `
{
  allProduct {
    _id
    name
    slug {
      current
    }
    brand
    categories {
      categories
    }
    clothingCategories {
      clothingCategories
    }
    price
    stock
    forWhom {
      forWhom
    }
    height {
      height
    }
    heightDescription
    age {
      age
    }
    ageDescription
    itemDescription
    featured
    images {
      asset {
        url
      }
    }
  }
}

`
