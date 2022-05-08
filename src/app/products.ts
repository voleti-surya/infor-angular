export interface Product {
  id: number;
  title: string;
  answer: number;
  is_visible: boolean;
  answer_type : string;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Did you work with the Infor Design team for the last 6 months?',
    answer: 799,
    is_visible: true,
    answer_type : 'radio' 
  },
  {
    id: 2,
    title: 'What is your department?',
    answer: 799,
    is_visible: false,
    answer_type : 'textbox'

  },
  {
    id: 3,
    title: 'How would you rate your experience on the scale below?',
    answer: 799,
    is_visible: false,
    answer_type: 'slider'
  },
  {
    id: 4,
    title: 'What made you give such rating?',
    answer: 799,
    is_visible: false,
    answer_type: 'textarea'
  },
  {
    id: 5,
    title: 'How would you rate this survey?',
    answer: 799,
    is_visible: false,
    answer_type: 'star'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/